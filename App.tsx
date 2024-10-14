import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, useCameraPermission, useCameraDevice, useCodeScanner, Code } from 'react-native-vision-camera';
import { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
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
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState<Code>();


  if (!hasPermission) {
    // Camera permissions are still loading.
    requestPermission()
  }

  const openCamera = () => {
    setOpen(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {hasPermission && open ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device!}
            isActive
            codeScanner={codeScanner}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              position: 'absolute',
              top: 0,
              marginTop: 40
            }}
          >
            <TouchableOpacity onPress={() => setOpen(!open)}>
              <View>
                <Ionicons name="arrow-back-outline" size={40} color='white' />
              </View>
            </TouchableOpacity>
          </View>

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
        </>
      ) : (
        <TouchableOpacity onPress={openCamera}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 100,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{color: 'white'}}>
              Scan
            </Text>
          </View>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
