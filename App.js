import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default class FullImage extends Component {

  getPosistionsFromJSON = () => {
    const fileJSON = require('./img/file.json');
    fromTop = 100;
    console.log(fileJSON);
    spots = fileJSON.spots.map((spot, i) => <Text onPress={() => console.log(i)} style={{position: 'absolute', top: fromTop*i, left: 40, zIndex: 999, color: 'white'}} key={i}>Dugme</Text>);
    return spots;   
  }

  render() {
    return (
      <View style={styles.mainView}>

        <View style={styles.body}>

          <View style={styles.contentContainer}>
          
              <Image resizeMethod='resize' style={{ width: '100%', height: '100%', resizeMode: 'cover'}} source={require('./img/img.jpeg')} />
              {this.getPosistionsFromJSON()}       
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    position: 'relative',
    height: '100%'
  },
  body: {
    height: '100%',
  },
  contentContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: '100%',
    marginBottom: 5,
  },
});
