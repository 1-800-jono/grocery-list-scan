import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {Icon} from 'react-native-elements';

export default class CameraItem extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
    console.log(FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}photos`));
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync()
        .then(data => this.onPictureSaved(data))
    }
  };

  onPictureSaved =  photo => {
    console.log(photo.uri)
    const imageID = Date.now();
     FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${imageID}.jpg`,
    });
    this.props.navigation.state.params.handleImage(`${FileSystem.documentDirectory}photos/${imageID}.jpg`);
    //console.log(FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}photos`));
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} ref={ref => { this.camera = ref; }}>
            <View
              style={styles.container}>
              <TouchableOpacity onPress={this.takePicture} style={styles.snapButton}>
                <Icon name="camera" type="entypo" size={55} color="white"/>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  snapButton: {
    alignSelf: 'flex-end'
  }
  
});