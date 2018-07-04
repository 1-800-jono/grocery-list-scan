import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import ItemCard from './ItemCard';


export default class List extends React.Component {
  
  render() {
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/1545577?s=460&v=4'
    };
    return (
      <ScrollView style={styles.container}>
        { Object.keys(this.props.items).map( key => {
          return <ItemCard  key={key} item={this.props.items[key]} index={key}/>
        })}
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
