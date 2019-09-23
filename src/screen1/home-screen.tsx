import React, {Component} from 'react';
import Header from '../components/uikit/header';
import ImageCard from '../components/uikit/imageCard';
import {View, ScrollView, StyleSheet} from 'react-native';


const url = 'http://api.tvmaze.com/search/shows?q=stargate';

export default class HomeScreen extends Component {
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
    console.log(this.props)
    const {container} = styles;

    return (
      <View>
        <Header title={this.state.title} />
        <ScrollView>
          <View style={container}>
            {data.map(item => {
              const {id} = item.show;
              return <ImageCard key={id} data={item.show} />;
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
  },
})
