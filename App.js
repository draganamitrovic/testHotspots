import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TouchableWithoutFeedback, Dimensions } from 'react-native';
import RNFB from 'react-native-fetch-blob';

export default class FullImage extends Component {

  state = {
    layoutWidth: 0,
    layoutHeigth: 0
  }
  getPosistionsFromJSON = () => {
    const { width, height } = resolveAssetSource(require('./img/1635.jpg'));
    const fileJSON = require('./img/file.json');
    hotspot = fileJSON.files[1].spots.map((spot, i) => {
      const posx = this.state.layoutWidth * (spot.x / 1000);
      const posy = this.state.layoutHeigth * (spot.y / 1000);
      return (
        <View key={i + '.viewMaster'} style={{ flexDirection: 'row', position: "absolute", zIndex: 20, left: posx - 10, top: posy - 25 }}>
          <TouchableOpacity key={i} style={{ padding: 0, marginTop: 15, }} >
            <Image key={i + '.image'} source={require('./img/hotspot.png')} />
          </TouchableOpacity>
          <View key={i + '.viewSlave'} style={styles.hotspotTitileView}>
            <Text key={i + '.text'} style={styles.hotspotTitle}>{spot.label}</Text>
          </View>
        </View>
      );
    });
    return hotspot;
  }

 render() {

    return (
      <View style={styles.mainView} >
        <View style={styles.body}>
          <View style={styles.contentContainer}>
            <Image
              ref='_image'
              resizeMode='center'
              style={{ width: '100%', height: '100%', resizeMode: 'stretch', zIndex: 1 }}
              onLayout={event => {
                const width = event.nativeEvent.layout.width;
                const height = event.nativeEvent.layout.height;
                console.log('event', width, height);
                this.setState(() => ({ layoutWidth: width, layoutHeigth: height }));
              }}
              source={require('./img/1635.jpg')} />
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
    color: '#da281c',
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
    marginBottom: 15
  },

});
