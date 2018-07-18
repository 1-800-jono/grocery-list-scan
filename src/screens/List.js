import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ItemCard from '../components/ItemCard';


export default class List extends React.Component {

  onShowDetails = (itemx) => {
    //alert(item.name);
    this.props.navigation.navigate('ItemDetails', {...itemx})
  };
  
  render() {
    return (
      <ScrollView style={styles.container}>
        {
          Object.keys(this.props.screenProps.items).map((key) => (
            <TouchableOpacity onPress={() => this.onShowDetails(this.props.screenProps.items[key])} key={key}>
             <ItemCard               
                item={this.props.screenProps.items[key]} 
                index={key}             
              />
           </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
    backgroundColor: '#111',
    padding: 20
  },
  text: {
    color: '#fff'
  },
  button: {
    backgroundColor: 'tomato',
    width: '100%'
  },
  scroll: {
    height: '100%'
  }
});
