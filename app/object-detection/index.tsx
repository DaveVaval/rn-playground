import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import { 
  // Camera,
  useCameraPermission, 
  useCameraDevice, 
  useCodeScanner, 
  Code, 
  useFrameProcessor,
} from 'react-native-vision-camera';
import { useImageLabeler, Camera } from 'react-native-vision-camera-v3-image-labeling';

export default function index() {
  const camera = useRef<any>(null);
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission();
  const [code, setCode] = useState<Code>();
  const [object, setObject] = useState<any>('');
  const { scanImage } = useImageLabeler({minConfidence: 0.1})


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

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    const data = scanImage(frame)
    setObject(data[0].label)
  }, [])

  const processFrame = (data: any) => {
    if (object != data) {
      setObject(data)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device!}
        isActive
        options={{
          minConfidence: 0.1
        }}
        callback={(data: any) => processFrame(data[0].label)}
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
          Object: {object}
        </Text>
      </View>
    </View>
  )
}