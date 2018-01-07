// node_modules
import Amplify, {
  Auth
} from 'aws-amplify';

import * as aws from './../config/aws';

import {
  assets
} from './../config/urls';

Amplify.configure({
  Auth: {
    region: aws.AWS_REGION,
    userPoolId: aws.AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: aws.AWS_COGNITO_APP_CLIENT_ID,
    identityPoolId: aws.AWS_COGNITO_IDENTITY_POOL_ID
  }
});

export const signUp = (email, password) => {
  Auth.signUp(email, password)
    .then(() => {
      alert('登録メールアドレスに検証コードを送信しました。\n次の画面で検証コードを入力してください。');
    })
    .catch(() => {
      alert('エラーが発生しました');
      return;
    });
};

export const confirm = (email, code) => {
  Auth.confirmSignUp(email, code)
    .then(() => {
      alert('おめでとうございます。\n無事検証が完了しました');
    })
    .catch(() => {
      alert('残念ですが、検証に失敗しました');
      return;
    });
};

export const signIn = (email, password) => {
  Auth.signIn(email, password)
    .then(() => {
      localStorage.setItem('background-url', assets[Math.floor( Math.random() * 3 )])
    })
    .catch(() => {
      alert('エラーが発生しました');
      return;
    });
};
