import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShowForm from './ShowForm';
import { addPost } from '../../store/actions';

class AddPost extends Component {

  state = {};

  onFieldChange = (evt) => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value,
    });
  }

  onSubmitForm = () => {
    this.props.addPost(this.state, this.props.history);
  }

  render () {

    return (
      <div className="animated fadeIn">
        <ShowForm
          onFieldChange={this.onFieldChange}
          onSubmitForm={this.onSubmitForm}
          // history={this.props.history}
        />
      </div>
    )
  }
}


export default connect(null, { addPost })(AddPost);
