import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Link href="/scan" asChild style={{marginBottom: 15}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                width: 200,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{fontWeight: '600', fontSize: 15}}>
                Scan
              </Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/object-detection" asChild style={{marginBottom: 15}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                width: 200,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{fontWeight: '600', fontSize: 15}}>
                Object Detection
              </Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/xr" asChild style={{marginBottom: 15}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                width: 200,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{fontWeight: '600', fontSize: 15}}>
                XR
              </Text>
            </View>
          </TouchableOpacity>
        </Link>

        {/* <Link href="/viro-vision" asChild style={{marginBottom: 15}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                width: 200,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{fontWeight: '600', fontSize: 15}}>
                Viro + Vision
              </Text>
            </View>
          </TouchableOpacity>
        </Link> */}

        <Link href="/webview" asChild style={{marginBottom: 15}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                width: 200,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{fontWeight: '600', fontSize: 15}}>
                Webview
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/tabview" asChild style={{marginBottom: 15}}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#f2f2f2',
                width: 200,
                height: 60,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{fontWeight: '600', fontSize: 15}}>
                TabView
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
        
      </View>
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
