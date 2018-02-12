// node_modules
import styled, {
  injectGlobal
} from 'styled-components';

// styled component
export const MyContainer = styled.div`
  display: grid;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding-bottom: 30px;
  
  @media (max-width: 619px) {
    font-size: 30px;
  }
  
  @media (min-width: 620px) { 
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 54px;
  }
`;

export const Date = styled.div`
  width: 100%;
  color: white;
  font-family: "Helvetica Neue";
  font-weight: 200;
  font-size: 30px;
  text-align: center;
`;

export const globalStyles = injectGlobal`
  #archive-detail {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 20px 1fr 20px;
    height: 100%;
    
    @media (min-width: 1024px) {
      grid-template-columns: 40px 1fr 40px;
    }
    
    .markdown-preview {
      color: #ffffff;
      font-size: 16px;
      
      a {
        color: #15B0DE;
        text-decoration: underline;
      }
      
      a:hover {
        color: #37D2FF;
        text-decoration: underline;
      }
      
      a.absent {
        color: #cc0000; 
      }
      
      a.anchor {
        display: block;
        padding-left: 30px;
        margin-left: -30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0; }
      
      h1, h2, h3, h4, h5, h6 {
        color: #ffffff;
        margin: 20px 0 10px;
        padding: 0;
        font-weight: bold;
        -webkit-font-smoothing: antialiased;
        cursor: text;
        position: relative; 
      }
     
      
      h1 tt, h1 code {
        font-size: inherit; }
      
      h2 tt, h2 code {
        font-size: inherit; }
      
      h3 tt, h3 code {
        font-size: inherit; }
      
      h4 tt, h4 code {
        font-size: inherit; }
      
      h5 tt, h5 code {
        font-size: inherit; }
      
      h6 tt, h6 code {
        font-size: inherit; }
      
      h1 {
        font-size: 35px;
        color: #ffffff; 
      }
      
      h2 {
        font-size: 30px;
        border-bottom: 1px solid #cccccc;
        color: #ffffff;
      }
      
      h3 {
        font-size: 27px; }
      
      h4 {
        font-size: 23px; }
      
      h5 {
        font-size: 18px; }
      
      h6 {
        color: #777777;
        font-size: 14px; }
      
      p, blockquote, ul, ol, dl, li, table, pre {
        margin: 15px 0; }
      
      hr {
        border: 0 none;
        color: #cccccc;
        height: 4px;
        padding: 0; }
      
      body > h2:first-child {
        margin-top: 0;
        padding-top: 0; }
      body > h1:first-child {
        margin-top: 0;
        padding-top: 0; }
        body > h1:first-child + h2 {
          margin-top: 0;
          padding-top: 0; }
      body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
        margin-top: 0;
        padding-top: 0; }
      
      a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
        margin-top: 0;
        padding-top: 0; }
      
      h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
        margin-top: 0; }
      
      li p.first {
        display: inline-block; }
      
      ul, ol {
        padding-left: 30px; }
      
      ul :first-child, ol :first-child {
        margin-top: 0; }
      
      ul :last-child, ol :last-child {
        margin-bottom: 0; }
      
      dl {
        padding: 0; }
        dl dt {
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          padding: 0;
          margin: 15px 0 5px; }
          dl dt:first-child {
            padding: 0; }
          dl dt > :first-child {
            margin-top: 0; }
          dl dt > :last-child {
            margin-bottom: 0; }
        dl dd {
          margin: 0 0 15px;
          padding: 0 15px; }
          dl dd > :first-child {
            margin-top: 0; }
          dl dd > :last-child {
            margin-bottom: 0; }
      
      blockquote {
        border-left: 4px solid #dddddd;
        padding: 0 15px;
        color: #777777; }
        blockquote > :first-child {
          margin-top: 0; }
        blockquote > :last-child {
          margin-bottom: 0; }
      
      table {
        padding: 0; 
        border-collapse: collapse;
      }
      
      table tr {
          border-top: 1px solid #cccccc;
          background-color: rgba(0, 0, 0, 0);
          margin: 0;
          padding: 0; }
          table tr th {
            font-weight: bold;
            border: 1px solid #cccccc;
            text-align: left;
            margin: 0;
            padding: 6px 13px; }
          table tr td {
            border: 1px solid #cccccc;
            text-align: left;
            margin: 0;
            padding: 6px 13px; }
          table tr th :first-child, table tr td :first-child {
            margin-top: 0; }
          table tr th :last-child, table tr td :last-child {
            margin-bottom: 0; }
      
      img {
        max-width: 50%; }
      
      span.frame {
        display: block;
        overflow: hidden; }
        span.frame > span {
          border: 1px solid #dddddd;
          display: block;
          float: left;
          overflow: hidden;
          margin: 13px 0 0;
          padding: 7px;
          width: auto; }
        span.frame span img {
          display: block;
          float: left; }
        span.frame span span {
          clear: both;
          color: #333333;
          display: block;
          padding: 5px 0 0; }
      span.align-center {
        display: block;
        overflow: hidden;
        clear: both; }
        span.align-center > span {
          display: block;
          overflow: hidden;
          margin: 13px auto 0;
          text-align: center; }
        span.align-center span img {
          margin: 0 auto;
          text-align: center; }
      span.align-right {
        display: block;
        overflow: hidden;
        clear: both; }
        span.align-right > span {
          display: block;
          overflow: hidden;
          margin: 13px 0 0;
          text-align: right; }
        span.align-right span img {
          margin: 0;
          text-align: right; }
      span.float-left {
        display: block;
        margin-right: 13px;
        overflow: hidden;
        float: left; }
        span.float-left span {
          margin: 13px 0 0; }
      span.float-right {
        display: block;
        margin-left: 13px;
        overflow: hidden;
        float: right; }
        span.float-right > span {
          display: block;
          overflow: hidden;
          margin: 13px auto 0;
          text-align: right; }
      
      code, tt {
        margin: 0 2px;
        padding: 0 5px;
        white-space: nowrap;
        border: 1px solid #282828;
        background-color: #282828;
        border-radius: 3px; }
      
      pre code {
        margin: 0;
        padding: 0;
        font-size: 18px !important;
        white-space: pre;
        border: none;
        background: transparent; }
      
      .highlight pre {
        background-color: #282828;
        border: 1px solid #282828;
        font-size: 18px;
        overflow: auto;
        padding: 6px 10px;
        border-radius: 3px; }
      
      pre {
        background-color: #282828;
        border: 1px solid #282828;
        font-size: 18px;
        overflow: auto;
        padding: 6px 10px;
        border-radius: 3px; }
        pre code, pre tt {
          background-color: transparent;
          border: none; 
        }
      
    }
  }
`;
