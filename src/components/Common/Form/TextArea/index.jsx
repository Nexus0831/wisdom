// node_modules
import React from 'react';
import $ from 'jquery';

// styles
import {
  ValidateError,
  MarkdownEditor
} from './cssinjs';

// pure function
const TextArea = (props) => {


  const changeToggle = (e) => {
    // ToDo: 補足機能はここで実装;
    // const $textarea = $("#editor");
    // const sentence = textarea.value;
    // const pos = textarea.selectionStart;
    //
    // const automatic = (key) => {
    //   textarea.value = sentence.substr(0, pos) + key + sentence.substr(pos, sentence.length);
    //   textarea.selectionEnd = pos;
    //   textarea.selectionStart = pos;
    // };

    // const linefeed = (e) => {
    //   const lines = sentence.split("\n");
    //   // console.log(lines[lines.length-1].substr(0, 3));
    //   if (lines[lines.length-1].substr(0, 2).match(/\- /)) {
    //     textarea.value = sentence + "- ";
    //   }
    //
    // };

    // textarea.onKeyDown((e) => {
    //   switch (e.key) {
    //     case '(':
    //       automatic(')');
    //       break;
    //
    //     case '{':
    //       automatic('}');
    //       break;
    //
    //     case '[':
    //       automatic(']');
    //       break;
    //
    //     case '\"':
    //       automatic('\"');
    //       break;
    //
    //     case '\'':
    //       automatic('\'');
    //       break;
    //
    //     case '\`':
    //       automatic('\`');
    //       break;
    //
    //     case 'Enter':
    //       // const lines = sentence.split("\n");
    //       // console.log(lines);
    //       // // console.log(lines[lines.length-1].substr(0, 3));
    //       // if (lines[lines.length-1].match(/^\- /)) {
    //       //   textarea.value = sentence + "- ";
    //       // } else if(lines[lines.length-1].match(/^[1-9]*\. /)){
    //       //
    //       //   textarea.value = sentence + "- ";
    //       // }
    //       break;
    //
    //   }
    // });
    props.input.onChange(e.target.value);
  };

  return (
    <span
      id="textarea"
    >
      <MarkdownEditor
        id="editor"
        placeholder={props.placeholder}
        onBlur={() => props.input.onBlur(props.value)}
        value={props.input.value}
        onChange={changeToggle}
        readOnly={props.disabled}
        className={props.className}
        size={props.size}
        style={props.style}
        wrap={props.wrap}
        onKeyDown={props.onKeyDown}
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
