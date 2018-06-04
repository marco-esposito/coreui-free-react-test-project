import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowForm from './ShowForm';
import { addPost } from '../../store/actions';

class AddPost extends Component {

  state = {};

  handleFieldChange = (evt) => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmitForm = () => {
    this.props.addPost(this.state, this.props.history);
  }

  render () {
    return (
      <div className="animated fadeIn">
        <ShowForm
          onFieldChange={this.handleFieldChange}
          onSubmitForm={this.handleSubmitForm}
        />
      </div>
    )
  }
}


export default connect(null, { addPost })(AddPost);
