import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowForm from './ShowForm';

class EditPost extends Component {

  state = {};

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

export default EditPost;
