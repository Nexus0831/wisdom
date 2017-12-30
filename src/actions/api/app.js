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
      alert('登録メールアドレスに検証コードを送信しました。\n次の画面で検証コードを入力してください。');
    })
    .catch((err) => {
      alert('エラーが発生しました');
      return;
    });
};

export const confirm = (email, code) => {
  Auth.confirmSignUp(email, code)
    .then((data) => {
      alert('おめでとうございます。\n無事検証が完了しました');
    })
    .catch((err) => {
      alert('残念ですが、検証に失敗しました');
      return;
    });
};

export const signin = (email, password) => {
  Auth.signIn(email, password)
    .then((data) => {
      alert('成功');
    })
    .catch((err) => {
      alert('エラーが発生しました');
      return;
    });
};