import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Camera, useCameraPermission, useCameraDevice, useCodeScanner, Code } from 'react-native-vision-camera';
import { useState, useRef } from 'react';

export default function index() {
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission();
  const [code, setCode] = useState<Code>();

  if (!hasPermission) {
    // Camera permissions are still loading.
    requestPermission()
  }

  const codeScanner = useCodeScanner({
    codeTypes: [
      'qr', 
      'ean-13',
      'aztec',
      'code-128',
      'code-39',
      'code-93',
      'codabar',
      'data-matrix',
      'ean-8',
      'itf',
      'pdf-417',
      'upc-a',
      'upc-e'
    ],
    onCodeScanned: (codes) => {
      if (code?.value != codes[0].value) {
        setCode(codes[0])
      }
    }
  })

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device!}
        isActive
        codeScanner={codeScanner}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          width: '80%',
          height: 150,
          borderRadius: 20,
          bottom: 50,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10
        }}
      >
        <Text
          style={{
            fontWeight: '500'
          }}
        >
          CODE: {code?.value}
        </Text>
      </View>
    </View>
  )
}