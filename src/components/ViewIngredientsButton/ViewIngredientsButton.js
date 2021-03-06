import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

// ViewIngredientsButton Component From Template
export default class ViewIngredientsButton extends React.Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
