import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';

export default class FullImage extends Component {

  getPosistionsFromJSON = () => {
    const fileJSON = require('./img/file.json');
    console.log(fileJSON);
    spots = fileJSON.spots.map((spot, i) =>

      <View style={{ flexDirection: 'row', position: "absolute", zIndex: 20, top: (spot.y) + '%', left: (spot.x) + '%', height: 50}}>
        <TouchableOpacity style={{ padding: 5, marginTop: 10 }} >
          <Image source={require('./img/hotspot.png')} />
        </TouchableOpacity>
        <View style={styles.hotspotTitileView}>
          <Text style={styles.hotspotTitle}>{spot.pageTitle}</Text>
        </View>
      </View>


      // <Text
      //   onPress={() => console.log(i)}
      //   style={
      //     {
      //       position: 'absolute',
      //       top: (spot.y) + '%',
      //       left: (spot.x) + '%',
      //       zIndex: 999, color: 'white'
      //     }}
      //   key={i}>
      //   Dugme
      //    </Text>
    );
    return spots;
  }

  render() {

    return (
      <View style={styles.mainView}>

        <View style={styles.body}>

          <View style={styles.contentContainer}>

            <Image resizeMethod='resize' style={{ width: '100%', height: '100%', resizeMode: 'cover', zIndex: 1 }} source={require('./img/img.jpeg')} />
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
