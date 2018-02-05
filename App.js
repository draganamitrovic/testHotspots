import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class FullImage extends Component {

  getPosistionsFromJSON = () => {
    const fileJSON = require('./img/file.json');
    console.log(fileJSON);
    // const fileParsed = JSON.parse(fileJSON);
    fileJSON.spots.forEach(spot => {
      console.log(spot);
    })
  }

  render() {
    this.getPosistionsFromJSON();
    return (
      <View style={styles.mainView}>

        <View style={styles.body}>

          <View style={styles.contentContainer}>

           
          
              <Image resizeMethod='resize' style={{ width: '100%', height: '100%', resizeMode: 'cover'}} source={require('./img/img.jpeg')} />

        
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
