// node_modules
import React from 'react';

// styles
import {
  GhostCheckBox
} from './cssinjs';

// pure function
const CheckBox = (props) => {
  return (
    <span
      id="checkbox"
    >
      <GhostCheckBox
        placeholder={props.placeholder}
        value={props.input.value}
        label={props.input.value ? 'sharing' : 'private'}
        onBlur={() => props.input.onBlur(props.value)}
        onChange={props.input.onChange}
        style={props.style}
        className={props.className}
        type='checkbox'
        size={props.size}
        id="sharing"
        checked={props.checked}
      />
      <label
        htmlFor="sharing"
      >
        {props.input.value ? 'Sharing' : 'Private'}
      </label>
    </span>
  );
};

export default CheckBox;