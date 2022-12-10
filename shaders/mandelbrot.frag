//! [1]
#version 440

layout(location = 0) in vec2 vTexCoord;

layout(location = 0) out vec4 fragColor;

//! [2]
// uniform block: 84 bytes
layout(std140, binding = 0) uniform buf {
    mat4 qt_Matrix; // offset 0
    float qt_Opacity; // offset 64
    float px; // offset 68
    vec2 center; // offset 72
    int limit; // offset 80
} ubuf;
//! [2]

void main()
{
    float x = vTexCoord.x;
    float y = vTexCoord.y;
    vec2 center = ubuf.center;

    float dx = (sin(ubuf.px) + 1.5)*0.33333333;
    float dy = (cos(ubuf.px) + 1.5)*0.33333333;

    float z1 = sqrt((x - center.x)*(x - center.x) + (y - center.y)*(y - center.y));
    float z2 = sqrt((x - dx)*(x - dx) + (y - dy)*(y-dy));
    float z3 = sqrt((x - dy)*(x - dy) + (y - dx)*(y-dx));

    z1 = 0.7*sin(15.0*z1 + 2.0) + 0.1;
    z2 = sin(25.0*z1*z2 + 0.5);
    z3 = sin(20.0*z3*z2 + 15*z3 + 0.5);

    if ((z1 > -0.4) || (z2 > -0.5) || (z3 > -0.5)) {
        fragColor = vec4(z1, z2, z3, 1.0);
    } else {
        fragColor = vec4(-z1, -z2, -z3, 1.0);
    }


}
//! [1]
