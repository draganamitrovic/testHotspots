import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import resolveAssetSource from 'resolveAssetSource';

export default class FullImage extends Component {

  getPosistionsFromJSON = () => {
    const { width, height } = resolveAssetSource(require('./img/1635.jpg'));
    const fileJSON = require('./img/file.json');
    console.log(fileJSON);
    hotspot = fileJSON.files.spots.map((spot, i) =>
      <View key={i + '.viewMaster'} style={{ flexDirection: 'row', position: "absolute", zIndex: 20, top: height-height*spot.y/1000, left: width-width*spot.x/1000 }}>
        <TouchableOpacity key={i} style={{ padding: 5, marginTop: 10 }} >
          <Image key={i + '.image'} source={require('./img/hotspot.png')} />
        </TouchableOpacity>
        <View key={i + '.viewSlave'} style={styles.hotspotTitileView}>
          <Text key={i + '.text'} style={styles.hotspotTitle}>{spot.label}</Text>
        </View>
      </View>
    );
    return hotspot;
  }

  render() {

    return (
      <View style={styles.mainView}>

        <View style={styles.body}>

          <View style={styles.contentContainer}>

            <Image resizeMethod='resize' style={{ width: '100%', height: '100%', resizeMode: 'cover', zIndex: 1 }} source={require('./img/1635.jpg')} />
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
    width: '100%'
  },
  contentContainer: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    marginBottom: 5,
  },
  hotspotTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#da281c'
  },

  hotspotTitileView: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
    height: 25,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

});
