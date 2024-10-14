import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {
  ViroARScene,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  // Viro3DObject,
} from "@reactvision/react-viro";

export default function Arscene() {
  const [text, setText] = useState("Initializing AR...");

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      {/* <Viro3DObject
        source={require('../../assets/3d-objects/Gundam/Gundam.obj')}
        scale={[0.001, 0.001, 0.001]}
        type='OBJ'
        resources={[
          require('../../assets/3d-objects/Gundam/Gundam.mtl'),
          require('../../assets/3d-objects/Gundam/Gundam.png'),
        ]}
      /> */}
    </ViroARScene>
  );
}

const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
})