import {StyleSheet} from 'react-native';
import margin from './margin';
import padding from './padding';
import text from './text';
import color from './color';
import input from './input';
import utils from './utils';
import dimensions from './dimensions'
const styles = {
  ...margin,
  ...padding,
  ...text,
  ...color,
  ...input,
  ...utils,
  ...dimensions,
};

export default StyleSheet.create({...styles});
