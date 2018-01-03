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

export const checkSession = () => {
  Auth.currentAuthenticatedUser()
    .then((result) => {
      // console.log(result.username);
      return true;
    })
    .catch((error) => {
      console.log('error');
      return false;
    })
};