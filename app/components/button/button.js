import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../text/text';
import {viewPresets, textPresets} from './button.presets';
import {mergeAll, flatten} from 'ramda';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../../themes';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props) {
  // grab the props
  const {
    preset = 'primary',
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    icon,
    iconColor,
    ...rest
  } = props;

  const viewStyle = mergeAll(
    flatten([viewPresets[preset] || viewPresets.primary, styleOverride]),
  );
  const textStyle = mergeAll(
    flatten([textPresets[preset] || textPresets.primary, textStyleOverride]),
  );

  const content = children || <Text tx={tx} text={text} style={textStyle} />;
  const iconContent = icon ? (
    <Icon
      name={icon}
      color={iconColor || color.palette.primaryTextColor}
      size={20}
    />
  ) : null;
  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      {iconContent}
      {content}
    </TouchableOpacity>
  );
}
