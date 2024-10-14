import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar, TabBarItem } from 'react-native-tab-view';
import { Tabs, MaterialTabBar, MaterialTabItem } from 'react-native-collapsible-tab-view'

const FirstRoute = () => (
  <View className='flex-1 items-center justify-center bg-white'>
    <Text className="font-bold">
      react-native-tab-view
    </Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderTabBarItem={props => (
              <TabBarItem
                {...props}
                style={{width: props.defaultTabWidth}}
              />
            )}
          />
        )}
      />

      <Tabs.Container
        width={layout.width}
        renderHeader={() => (
          <View>
            <Text>header</Text>
          </View>
        )}
        renderTabBar={props => (
          <MaterialTabBar
            {...props}
            TabItemComponent={(props) => (
              <MaterialTabItem
                {...props}
                // changing styles here don't do anything
                style={{}}
              />
            )}
          />
        )}
      >
        <Tabs.Tab name="A">
          <View className='flex-1 items-center justify-center bg-white'>
            <Text className="font-bold">
              react-native-collapsible-tab-view
            </Text>
          </View>
        </Tabs.Tab>
        <Tabs.Tab name="B">
          <SecondRoute/>
        </Tabs.Tab>
      </Tabs.Container>
    </>
  );
}