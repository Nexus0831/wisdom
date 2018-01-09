import Amplify, {
  API
} from 'aws-amplify';

import * as aws from './../../config/aws';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: aws.AWS_NAME,
        endpoint: aws.AWS_END_POINT
      }
    ]
  }
});

const path = "/wisdom";
const strings = "abcdefghijklmnopqrstuvwxyz0123456789";

// CRUD
export const archiveCreate = (values) => {
  let hash = '';
  for(let i=0; i<15; i++){
    hash += strings[Math.floor(Math.random()*strings.length)];
  }
  const date = new Date();
  const created_at = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  const option = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: {
      TableName: aws.AWS_TABLE_NAME,
      Item: {
        id: hash,
        createUser: values.userName,
        title: values.title,
        date: created_at,
        text: values.text
      }
    }
  };
  return API.post(aws.AWS_NAME, path, option)
    .then(result => {
      console.log('good');
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
};

export const archiveRead = () => {
  return API.get(aws.AWS_NAME, path)
    .then(result => {
      const items = result.Items.filter(item => {
        return (item.title === 'Pythonインストール')
      });
      return items
    })
    .catch((error) => {
      return {};
    });
};
