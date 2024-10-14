import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Camera, useCameraPermission, useCameraDevice } from 'react-native-vision-camera';
import { ViroARSceneNavigator } from '@reactvision/react-viro';
import Arscene from './components/arscene';

export default function index() {
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission();

  if (!hasPermission) {
    // Camera permissions are still loading.
    requestPermission()
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device!}
        isActive={true}
      />
      <ViroARSceneNavigator
        style={StyleSheet.absoluteFill}
        initialScene={{
          scene: Arscene
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})