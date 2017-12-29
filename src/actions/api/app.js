// node_modules
import Amplify, {
  Auth
} from 'aws-amplify';

import * as aws from './../../config/aws';

Amplify.configure({
  Auth: {
    region: aws.AWS_REGION,
    userPoolId: aws.AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: aws.AWS_COGNITO_APP_CLIENT_ID,
    identityPoolId: aws.AWS_COGNITO_IDENTITY_POOL_ID
  }
});

export const signup = (email, password) => {
  Auth.signUp(email, password)
    .then((data) => {
      alert('登録メールアドレスに検証コードを送信しました。');
    })
    .catch((err) => {
      alert('エラーが発生しました');
      return;
    });
};