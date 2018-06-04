import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const ShowForm = ({ onFieldChange, onSubmitForm, post, history }) => {

  return (
    <Row>
      <Col xs="12" md="6">
        <Card>
          <CardHeader>
            <strong>Edit Post</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Title</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Text"
                    onChange={onFieldChange}
                    value={post.title}
                  />
                  <FormText color="muted">This is a help text</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Categories</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="categories"
                    name="categories"
                    placeholder="Text"
                    onChange={onFieldChange}
                    value={post.categories}
                  />
                  <FormText color="muted">This is a help text</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">Content</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="textarea"
                    name="content"
                    id="content"
                    rows="9"
                    placeholder="Put here your content..."
                    onChange={onFieldChange}
                    value={post.content}
                  />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary" onClick={onSubmitForm}>
              <i className="fa fa-dot-circle-o"></i>
              Submit
            </Button>
            <Button
              type="reset"
              size="sm"
              color="danger"
              onClick={() => history.push('/dasboard')}>
              <i className="fa fa-ban"></i>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(ShowForm);
