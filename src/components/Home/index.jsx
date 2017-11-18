// node_modules
import React from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  withRouter,
} from 'react-router';

import {
  NavLink
} from 'react-router-dom';

import {
  Grid,
  Modal,
  Header
} from 'semantic-ui-react';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid
} from 'redux-form';

// components
import Background from './../Common/Background';

import Input from './../Common/Form/Input';

// styles
import {
  SearchForm,
  MyContainer,
  ArchiveCard,
  Title,
  CreateDate,
  Text,
  ButtonContainer,
  Button,
  MyGrid
} from './cssinjs';

import * as actions from './../../actions/app';
import HeaderMenu from "../Common/HeaderMenu/index";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Background/>
        <HeaderMenu
          defaultTransparent
          style={{
            gridRow: "1 / -1",
            gridColumn: "1 / 2"
          }}
        />
        <MyContainer>
          <SearchForm>
            <Field
              name='keyword'
              placeholder='search...'
              component={Input}
            />
          </SearchForm>

          <MyGrid>

            {/*<NavLink*/}
            {/*to="/signin"*/}
            {/*>*/}

            <ArchiveCard>
              <Title>
                Pythonインストール
              </Title>
              <CreateDate>
                {/*2017年12月24日 13時35分*/}
                2017/12/24 13:35
              </CreateDate>
              <Text>
                #Python

                ## 準備
                Pythonのインストール方法を記録しておく
                ちなみにmac版である。
                この圧倒的Pythonista力！！
                映画インターンシップを見たい
                Amazonビデオで視聴しようと思う。
              </Text>
              <ButtonContainer>
                <Button>
                  edit
                </Button>
                <Modal
                  trigger={
                    <Button
                      danger
                    >
                      delete
                    </Button>
                  }
                  basic
                  size="small"
                >
                  <Header content="confirmation"/>
                  <Modal.Content>
                    <p>このアーカイブはあなたの重要な知見です本当に削除しますか？</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      danger
                    >
                      yes
                    </Button>
                  </Modal.Actions>
                </Modal>

              </ButtonContainer>
            </ArchiveCard>

            {/*</NavLink>*/}


            <ArchiveCard>
              <Title>
                Pythonインストール
              </Title>
              <CreateDate>
                {/*2017年12月24日 13時35分*/}
                2017/12/24 13:35
              </CreateDate>
              <Text>
                #Python

                ## 準備
                Pythonのインストール方法を記録しておく
                ちなみにmac版である。
                この圧倒的Pythonista力！！
                映画インターンシップを見たい
                Amazonビデオで視聴しようと思う。
              </Text>
              <ButtonContainer>
                <Button>
                  edit
                </Button>
                <Button
                  danger
                >
                  delete
                </Button>
              </ButtonContainer>
            </ArchiveCard>

            <ArchiveCard>
              <Title>
                Pythonインストール
              </Title>
              <CreateDate>
                {/*2017年12月24日 13時35分*/}
                2017/12/24 13:35
              </CreateDate>
              <Text>
                #Python

                ## 準備
                Pythonのインストール方法を記録しておく
                ちなみにmac版である。
                この圧倒的Pythonista力！！
                映画インターンシップを見たい
                Amazonビデオで視聴しようと思う。
              </Text>
              <ButtonContainer>
                <Button>
                  edit
                </Button>
                <Button
                  danger
                >
                  delete
                </Button>
              </ButtonContainer>
            </ArchiveCard>
          </MyGrid>
        </MyContainer>
      </div>
    );
  }
}

Home = connect(
  state => ({
    formValues: getFormValues('home')(state),
    valid: isValid('home')(state)
  })
)(Home);

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'home',
  })(Home)));
