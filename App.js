import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [list, setList] = useState([
    {key: '1', name: 'item 01'},
    {key: '2', name: 'item 02'},
    {key: '3', name: 'item 03'},
    {key: '4', name: 'item 04'},
    {key: '5', name: 'item 05'},
    {key: '6', name: 'item 06'},
    {key: '7', name: 'item 07'},
    {key: '8', name: 'item 08'},
    {key: '9', name: 'item 09'},
    {key: '10', name: 'item 10'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, {name: 'Item 69'}]);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.body}>
      {/* <FlatList
        data={list}
        renderItem={({item}) => (
          <View style={styles.view}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      /> */}
      <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }>
        {list.map(object => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
