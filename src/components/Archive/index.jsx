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

import {
  Link
} from 'react-router-dom';

// styles
import {
  SearchForm,
  MyContainer,
  ArchiveCard,
  ArchiveCreate,
  CreateLink,
  Title,
  CreateDate,
  Text,
  ButtonContainer,
  Button,
  MyGrid
} from './cssinjs/index';

import * as actions from './../../actions/archive';
import HeaderMenu from "../Common/HeaderMenu/index";

// ToDo: スマホ版でヘッダーのフォントとモーダル調整
class Archives extends React.Component {
  render() {
    const testArchive = [
      {title: 'firstTitle', date: '2017/12/24 13:35', text: '#Python\n' +
      '\n' +
      '                ## 準備\n' +
      '                Pythonのインストール方法を記録しておく\n' +
      '                ちなみにmac版である。\n' +
      '                この圧倒的Pythonista力！！\n' +
      '                映画インターンシップを見たい\n' +
      '                Amazonビデオで視聴しようと思う。'},
      {title: 'secondTitle', date: '2017/12/24 13:35', text: '#Python\n' +
      '\n' +
      '                ## 準備\n' +
      '                Pythonのインストール方法を記録しておく\n' +
      '                ちなみにmac版である。\n' +
      '                この圧倒的Pythonista力！！\n' +
      '                映画インターンシップを見たい\n' +
      '                Amazonビデオで視聴しようと思う。'},
      {title: 'therdTitle', date: '2017/12/24 13:35', text: '#Python\n' +
      '\n' +
      '                ## 準備\n' +
      '                Pythonのインストール方法を記録しておく\n' +
      '                ちなみにmac版である。\n' +
      '                この圧倒的Pythonista力！！\n' +
      '                映画インターンシップを見たい\n' +
      '                Amazonビデオで視聴しようと思う。'},
    ];
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
            <Link
              to="/archive/create"
            >
              <ArchiveCreate>
                Create Archive
              </ArchiveCreate>
            </Link>

            {
              testArchive.map((e, index) => {
                return (
                <ArchiveCard
                  key={index}
                >
                  <Title>
                    {e.title}
                  </Title>
                  <CreateDate>
                    {e.date}
                  </CreateDate>
                  <Text>
                    {e.text}
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
                          onClick={() => this.props.modalAction(true, index)}
                        >
                          delete
                        </Button>
                      }
                      basic
                      size="small"
                      open={this.props.archive.isOpens[index]}
                    >
                      <Header content="confirmation"/>
                      <Modal.Content>
                        <p>このアーカイブはあなたの重要な知見です本当に削除しますか？</p>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button
                          style={{
                            marginRight: '20px'
                          }}
                          onClick={() => this.props.modalAction(false, index)}
                        >
                          no
                        </Button>
                        <Button
                          danger
                          onClick={() => this.props.modalAction(false, index)}
                        >
                          yes
                        </Button>
                      </Modal.Actions>
                    </Modal>

                  </ButtonContainer>
                </ArchiveCard>
                )
              })
            }

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
    archive: state.archive
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
