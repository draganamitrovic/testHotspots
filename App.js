import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import RNFB from 'react-native-fetch-blob';
import resolveAssetSource from 'resolveAssetSource';

export default class FullImage extends Component {

  getPosistionsFromJSON = () => {
    const fileJSON = require('./img/file.json');
    console.log(fileJSON);
    const { width, height } = resolveAssetSource(require('./img/1635.jpg'));
    console.log('uh...', width, height);

    hotspot = fileJSON.files.spots.map((spot, i) =>
      <View key={i + '.viewMaster'} style={{ flexDirection: 'row', position: "absolute", zIndex: 20, top: (spot.y / 10) + '%', left: (spot.x / 10) + '%' }}>
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

  downloadHotspotImages = () => {

  }

  generateHotspots = () => {
    const hotspotsJSONContent = RNFB.fs.dirs.DocumentDir + '/hotspotsJSON.json';
    const hotspotsJSONUrl = 'http://www.cduppy.com/salescms/?a=ajax&do=getHotspots&projectId=5&token=1234567890';

    RNFB.config({ path: hotspotsJSONContent, overwrite: true }).fetch('GET', hotspotsJSONUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data);

      });
  }

  componentWillMount() {
    // RNFB.config({ path: RNFB.fs.dirs.DocumentDir + '/puppy.jpg' }).fetch('GET', 'https://assets1.cdn-mw.com/mw/images/article/art-wap-landing-mp-lg/puppy-3143-ad4140d8f6055cda2cd8956d4af37ea9@1x.jpg')
    //   .then(() => {
    //     Image.getSize('file://' + RNFB.fs.dirs.DocumentDir + '/puppy.jpg', (w, h) => console.log('got it: ', w, h));
    //   });
    // this.generateHotspots()
  }

  render() {

    return (
      <View style={styles.mainView}>

        <View style={styles.body}>

          <View style={styles.contentContainer}>

            <Image ref='_image' resizeMethod='resize' style={{ width: '100%', height: '100%', resizeMode: 'cover', zIndex: 1 }} source={require('./img/1635.jpg')} />
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
