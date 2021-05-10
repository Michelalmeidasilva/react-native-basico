import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const FlatListScreen = () =>{
    return (
        <View style={styles.container}>
            <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                {key: 'ater'},
                {key: 'ast'},
                {key: 'df'},
                {key: 'atger'},
                {key: 'test'},
                {key: '333'},
                {key: 'afsf'},
                {key: '4444252'},
                {key: 'vcxvc'},
                {key: 'adsav'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default FlatListScreen;