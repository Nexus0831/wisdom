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
import Background from '../Common/Background/index';

import Input from '../Common/Form/Input/index';

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
} from './cssinjs/index';

import * as actions from '../../actions/app';
import HeaderMenu from "../Common/MyHeaderMenu/index";

class Archives extends React.Component {
  render() {
    return (
      <div id="home">

        <HeaderMenu
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
                <Button
                  row="2 / 3"
                  column="2 / 3"
                >
                  edit
                </Button>
                <Modal
                  trigger={
                    <Button
                      danger
                      row="2 / 3"
                      column="4 / 5"
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
                <Button
                  row="2 / 3"
                  column="2 / 3"
                >
                  edit
                </Button>
                <Modal
                  trigger={
                    <Button
                      danger
                      row="2 / 3"
                      column="4 / 5"
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
                <Button
                  row="2 / 3"
                  column="2 / 3"
                >
                  edit
                </Button>
                <Modal
                  trigger={
                    <Button
                      danger
                      row="2 / 3"
                      column="4 / 5"
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

          </MyGrid>
        </MyContainer>
      </div>
    );
  }
}

Archives = connect(
  state => ({
    formValues: getFormValues('home')(state),
    valid: isValid('home')(state)
  })
)(Archives);

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
  })(Archives)));
