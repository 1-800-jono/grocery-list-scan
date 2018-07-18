import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon, Button, Input} from 'react-native-elements';


export default class AddItem extends React.Component {

  state = {
    name: '',
  }

  handleSubmit = () => {
    alert(this.state.name);
  }

  
  render() {
    
    return (
      <View style={styles.itemContainer}>
        
        <View style={styles.imageTile}>
          <Icon name="add-a-photo" size={35} type="material-icons" />
        </View>

        <View style={styles.formContainer}>
          <Input 
            placeholder="name" 
            label="Product Name" 
            onChangeText={(name) => this.setState({ name })}
            />
          <View style={styles.barcodeContainer}>
            <Icon name="barcode-scan" type="material-community" size={55} />
            <Text style={styles.fakeLable}>Barcode</Text>
            <Text style={styles.fakeLable}>11111</Text>
          </View>
          <Button title="Add Product" onPress={() => this.handleSubmit()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageTile: {
    width: '100%',
    height: 200,
    backgroundColor: 'gray',
    //flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  imageText: {
    color: 'black',
    textAlign: 'center'
  },
  formContainer: {
    padding: 20
  },
  barcodeContainer: {
    flex: 1,
    height: 100
    //alignItems: 'left',
  },
  fakeLable :{
    color: '#86939e',
    fontWeight: 'bold',
    fontSize: 16
  }

});
