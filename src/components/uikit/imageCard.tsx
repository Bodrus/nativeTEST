import React, {PropsWithChildren} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import {width as w} from '../../../src/constans';

interface ImageCardProps {
  data: InterfaceData;
}

interface InterfaceData {
  name: string;
  image: {medium: string};
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 10,
    textAlign: 'center',
    alignSelf: 'center',
    width: w / 2.4,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
  },
  container: {
    width: w / 2.1,
  },
  sub: {
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    borderRadius: 5,
  },
});

const ImageCard = ({data}: PropsWithChildren<ImageCardProps>) => {
  const {h1, cover, container, sub} = styles;

  const {image, name} = data;

  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: `${image.medium}`}} />
      </View>
      <Text style={h1}>{name}</Text>
    </View>
  );
};

export default ImageCard;
