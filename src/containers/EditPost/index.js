import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectPost, makeSelectPosts } from '../../selectors/global_reducer_selector';
import ShowForm from './ShowForm';
import { getPosts } from '../../store/actions';

class EditPost extends Component {

  state = {};

  componentDidMount () {
    const { match } = this.props;
    this.props.getPosts();
  }

  render () {

    return (
      <div className="animated fadeIn">
        <ShowForm
          onFieldChange={this.onFieldChange}
          onSubmitForm={this.onSubmitForm}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  post: makeSelectPost(ownProps.match.params.id),
})

export default connect(mapStateToProps, { getPosts })(EditPost);
