// node_modules
import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/monokai';

// styles
import {
  ValidateError,
  MarkdownEditor
} from './cssinjs';

// pure function
const TextArea = (props) => {
  return (
    <span
      id="textarea"
    >
      {/*<AceEditor*/}
        {/*mode="markdown"*/}
        {/*theme="monokai"*/}
        {/*// placeholder={props.placeholder}*/}
        {/*value={props.input.value}*/}
        {/*// label={props.label}*/}
        {/*onBlur={() => props.input.onBlur(props.value)}*/}
        {/*onChange={props.input.onChange}*/}
        {/*// style={props.style}*/}
        {/*className={props.className}*/}
        {/*// readOnly={props.disabled}*/}
        {/*number={2}*/}
      {/*/>*/}
      <MarkdownEditor
        // placeholder={props.placeholder}
        value={props.input.value}
        // label={props.label}
        onBlur={() => props.input.onBlur(props.value)}
        onChange={props.input.onChange}
        // style={props.style}
        className={props.className}
        // readOnly={props.disabled}
        wrap={props.wrap}
      />
      {
        props.meta.touched
        && props.meta.error
        && <ValidateError>{props.meta.error}</ValidateError>
      }
    </span>
  );
};

export default TextArea;
