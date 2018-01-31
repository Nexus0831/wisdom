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
  isValid,
  initialize
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

// ToDo: スマホ版でヘッダーのフォント
class Archives extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleSearch() {
    await new Promise(resolve => setTimeout(resolve, 6));
    await this.props.archiveSearch(this.props.archive.datas, this.props.formValues.keyword)
  }

  async handleDelete(id, index) {
    await this.props.archiveDelete(id);
    await this.props.modalAction(false, index);
    await this.props.history.push('/');
  }

  async componentWillMount() {
    await this.props.dispatch(initialize('home', { keyword: '' }));
    await this.props.archiveRead(this.props.app.userName);
    await this.props.resultInit(this.props.archive.datas);
  }

  render() {
    const archives = this.props.archive.results.map((item, index) => {
      return (
        <ArchiveCard
          key={index}
        >
          <Link
            to={`/archive/${item.id}`}
          >
            <Title>
              {item.title}
            </Title>
            <CreateDate>
              {item.date}
            </CreateDate>
            <Text>
              {item.text}
            </Text>
          </Link>
          <ButtonContainer>
            <Button
              row="2 / 3"
              column="2 / 3"
              onClick={() => this.props.history.push(`/archive/edit/${item.id}`)}
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
                  No
                </Button>
                <Button
                  danger
                  onClick={() => this.props.modalAction(false, index)}
                >
                  Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </ButtonContainer>
        </ArchiveCard>
      )
    });

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
              onChange={this.handleSearch}
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
            {archives}
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
    archive: state.archive,
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
