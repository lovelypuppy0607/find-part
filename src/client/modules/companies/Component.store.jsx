import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Companies from './Component';
import { actions } from './data';

const CompaniesStore = class CompaniesStore extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(actions.fetch());
  }

  onSaveItem(params) {
    const { dispatch } = this.props;

    dispatch(actions.edit(params));
  }

  onDeleteItem(index) {
    const { dispatch } = this.props;

    dispatch(actions.delete(index));
  }

  render() {
    const { dispatch, ...props } = this.props;

    return <Companies
      {...props}
      onSaveItem={this.onSaveItem.bind(this)}
      onDeleteItem={this.onDeleteItem.bind(this)}
    />;
  }
};

CompaniesStore.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(store => ({ items: store.companies }))(CompaniesStore);
