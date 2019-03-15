import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';


class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            id: '',
            title: '',
            body: '',
            errors:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { userId, id, title, body } = this.state;
        const validationContext = new SimpleSchema({
            userId: {
                type: SimpleSchema.Integer,
                optional: false,
                min: 0,
            },
            id: {
                type: SimpleSchema.Integer,
                optional: false,
                min: 0
            },
            title: {
                type: String,
                optional: false,
            },
            body: {
                type: String,
                optional: false
            }
        }).newContext();
        validationContext.validate({ userId: +userId, id: +id, title, body });
        if (validationContext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: +userId, id: +id })
                .then((response) => {
                    // handle success
                    console.log(response);
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                });
        }
        this.setState({ error: validationContext.validationErrors() });
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="UserId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control name="userId" type="text" placeholder="Enter user id" onChange={this.handleChange} value={this.state.userId} />
                            </Form.Group>

                            <Form.Group controlId="PostId">
                                <Form.Label>Post Id</Form.Label>
                                <Form.Control name="id" type="text" placeholder="Enter post id" onChange={this.handleChange} value={this.state.id} />
                            </Form.Group>

                            <Form.Group controlId="PostTitle">
                                <Form.Label>Post Title</Form.Label>
                                <Form.Control name="title" type="text" placeholder="Enter post title" onChange={this.handleChange} value={this.state.title} />
                            </Form.Group>

                            <Form.Group controlId="PostTitle">
                                <Form.Label>Post</Form.Label>
                                <Form.Control name="body" type="text" placeholder="Write your Post Here" onChange={this.handleChange} value={this.state.body} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddPost;