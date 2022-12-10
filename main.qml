// Copyright (C) 2020 The Qt Company Ltd.
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR BSD-3-Clause

import QtQuick
import ExampleCustomMaterial

Item {
    id: root

    width: 640
    height: 480


//! [1]
    CustomItem {
        property real xpos: 0.5
        property real ypos: 0.5

        anchors.fill: parent
        center: Qt.point(xpos, ypos);

        NumberAnimation on px {
            from: 0
            to: 6.2831853
            duration: 12000
            running: true
            loops: Animation.Infinite
        }

        MouseArea {
            anchors.fill: parent
            onPositionChanged: {
                parent.xpos = mouseX/parent.parent.width
                parent.ypos = mouseY/parent.parent.height
            }
            onPressed: {
                parent.xpos = mouseX/parent.parent.width
                parent.ypos = mouseY/parent.parent.height
            }
        }
    }



}
