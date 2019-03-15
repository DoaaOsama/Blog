import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';


class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: '',
            website: '',
            // company: {
            //     name: '',
            //     catchPhrase: '',
            //     bs: ''
            // },
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website } = this.state;
        const validationContext = new SimpleSchema({
            id: {
                type: SimpleSchema.Integer,
                optional: false,
                min: 0
            },

        }).newContext();
        validationContext.validate({ id: +id });
        if (validationContext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/users', { id: +id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website })
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
                        <Form>
                            <Form.Group controlId="PostId">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control name="id" type="text" placeholder="Enter user id" onChange={this.handleChange} value={this.state.id} />
                            </Form.Group>
                            <Form.Group controlId="Name">
                                <Form.Label>User Full Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter Your name" onChange={this.handleChange} value={this.state.name} />
                            </Form.Group>
                            <Form.Group controlId="UserName">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control name="username" type="text" placeholder="Write your username" onChange={this.handleChange} value={this.state.username} />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Write your email" onChange={this.handleChange} value={this.state.email} />
                            </Form.Group>
                            <Form.Group controlId="Street">
                                <Form.Label>Street</Form.Label>
                                <Form.Control name="address.street" type="text" placeholder="Write your street" onChange={this.handleChange} value={this.state.address.street} />
                            </Form.Group>
                            <Form.Group controlId="Suite">
                                <Form.Label>Suite</Form.Label>
                                <Form.Control name="address.suite" type="text" placeholder="Write your suite" onChange={this.handleChange} value={this.state.address.suite} />
                            </Form.Group>
                            <Form.Group controlId="City">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="address.city" type="text" placeholder="Write the city you live in" onChange={this.handleChange} value={this.state.address.city} />
                            </Form.Group>
                            <Form.Group controlId="Zip-code">
                                <Form.Label>Zip-code</Form.Label>
                                <Form.Control name="address.zipcode" type="text" placeholder="Write your zip-code" onChange={this.handleChange} value={this.state.address.zipcode} />
                            </Form.Group>
                            <Form.Group controlId="Geo-Lat">
                                <Form.Label>Geo: latitude</Form.Label>
                                <Form.Control name="address.geo.lat" type="text" placeholder="Write your geographical latitude" onChange={this.handleChange} value={this.state.address.geo.lat} />
                            </Form.Group>
                            <Form.Group controlId="Geo-Lng">
                                <Form.Label>Geo: longtitude</Form.Label>
                                <Form.Control name="address.geo.lng" type="text" placeholder="Write your geographical longtitude" onChange={this.handleChange} value={this.state.address.geo.lng} />
                            </Form.Group>
                            <Form.Group controlId="Phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control name="phone" type="text" placeholder="Write your phone number" onChange={this.handleChange} value={this.state.phone} />
                            </Form.Group>
                            <Form.Group controlId="WebSite">
                                <Form.Label>website</Form.Label>
                                <Form.Control name="website" type="text" placeholder="Write your website" onChange={this.handleChange} value={this.state.website} />
                            </Form.Group>
                            {/* <Form.Group controlId="CompanyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control name="company.name" type="text" placeholder="Write your company name" onChange={this.handleChange} value={this.state.company.name} />
                            </Form.Group>
                            <Form.Group controlId="catchphrase">
                                <Form.Label>Street</Form.Label>
                                <Form.Control name="company.catchPhrase" type="text" placeholder="Write your company's catchphrase" onChange={this.handleChange} value={this.state.company.catchPhrase} />
                            </Form.Group>
                            <Form.Group controlId="bs">
                                <Form.Label>Bs</Form.Label>
                                <Form.Control name="company.bs" type="text" placeholder="Write your company bs" onChange={this.handleChange} value={this.state.company.bs} />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default AddUser;