import React, {Component} from 'react';
import Header from './src/components/uikit/header';
import ImageCard from './src/components/uikit/imageCard';
import {View, ScrollView, StyleSheet} from 'react-native';

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json';

export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
  };

  componentDidMount(): void {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => this.setState({data}))
      .catch(error => console.log('ERROR!!!!', error));
  }

  render() {
    const {data} = this.state;
    const {container} = styles;

    return (
      <View>
        <Header title={this.state.title} />
        <ScrollView>
          <View style={container}>
            {data.map(item => {
              const {id} = item;

              return <ImageCard key={id} data={item} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 3,
    justifyContent: 'space-around',
    marginBottom: 150,
  }
})
