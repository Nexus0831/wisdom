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
  const created_at = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${("00" + date.getMinutes()).slice(-2)}`;

  const option = {
    headers: {
      'X-Api-Key': aws.AWS_API_KEY,
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
      return true
    })
    .catch((error) => {
      return false
    });
};

export const archiveRead = (userName) => {
  const option = {
    headers: {
      'X-Api-Key': aws.AWS_API_KEY,
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return API.get(aws.AWS_NAME, path, option)
    .then(result => {
      const items = result.Items.filter(item => {
        return (item.createUser === userName)
      });
      return items
    })
    .catch((error) => {
      return {};
    });
};

export const archiveEdit = (values) => {
  const date = new Date();
  const created_at = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${("00" + date.getMinutes()).slice(-2)}`;

  const option = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: {
      TableName: aws.AWS_TABLE_NAME,
      Key: {
        id: values.id
      },
      AttributeUpdates: {
          createUser: {
            Value: values.userName
          },
          title: {
            Value: values.title
          },
          date: {
            Value: created_at
          },
          text: {
            Value: values.text
          }
      }
    }
  };
  return API.put(aws.AWS_NAME, path, option)
    .then(result => {
      return true
    })
    .catch((error) => {
      return false
    });
};

export const archiveDelete = (ID) => {
  const option = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: {
      TableName: aws.AWS_TABLE_NAME,
      Key: {
        id: ID
      }
    }
  };

  return API.del(aws.AWS_NAME, path, option)
    .then(result => {
      return true
    })
    .catch((error) => {
      return false
    });
};
