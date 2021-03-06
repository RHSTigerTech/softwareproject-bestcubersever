import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import {val} from './PictureTaker';
let fileType= Platform.OS === 'ios' ? 'jpeg':'png'

export default App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://metal-density-310218.wl.r.appspot.com/sendColors?serial='+val+'&extension='+fileType+'')
        
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
        <Text>{data}</Text>
    </View>
    // <View style={{ flex: 1, padding: 24 }}>
    //   {isLoading ? <Text>Loading...</Text> : 
    //   ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
    //       <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
    //       <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
    //       <FlatList
    //         data={data.articles}
    //         keyExtractor={({ id }, index) => id}
    //         renderItem={({ item }) => (
    //           <Text>{item.id + '. ' + item.title}</Text>
    //         )}
    //       />
    //     </View>
    //   )}
    // </View>
  );
};