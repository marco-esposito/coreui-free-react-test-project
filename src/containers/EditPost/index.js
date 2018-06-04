import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectPost, makeSelectPosts } from '../../selectors/global_reducer_selector';
import ShowForm from './ShowForm';
import { getPost, editPost } from '../../store/actions';

class EditPost extends Component {

  state = {
    title: '',
    categories: '',
    content: '',
  };

  componentDidMount () {
    const { post, getPost, match: {params: {id}} } = this.props;
    !post && getPost(id);
  }

  componentWillReceiveProps ({ post }) {
    this.setState(post);
  }

  handleFieldChange = (evt) => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmitForm = () => {
    this.props.editPost(this.state, this.props.history);
  }

  render () {
    return (
      <div className="animated fadeIn">
        <ShowForm
          onFieldChange={this.handleFieldChange}
          onSubmitForm={this.handleSubmitForm}
          post={this.state}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  post: makeSelectPost(ownProps.match.params.id),
})

export default connect(mapStateToProps, { getPost, editPost })(EditPost);
