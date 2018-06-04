import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
  render () {
    return (
      <div className="animated fadeIn">
        <ShowForm
          onFieldChange={this.onFieldChange}
          onSubmitForm={this.onSubmitForm}
          history={this.props.history}
        />
      </div>
    )
  }
}

export default EditPost;
