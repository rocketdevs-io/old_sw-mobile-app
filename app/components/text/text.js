import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {presets} from './text.presets';
import {mergeAll, flatten} from 'ramda';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props) {
  // grab the props
  const {
    preset = 'default',
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  // figure out which content to use
  const content = text || children;

  const style = mergeAll(
    flatten([presets[preset] || presets.default, styleOverride]),
  );

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
}
