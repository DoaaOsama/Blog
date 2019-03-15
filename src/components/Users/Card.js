import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../App.css';


const UserCard = (users) => {

    const {id, name, username, email, address, phone, website, company} = users;
    return (
        <Container className="post-card" my={2}>
            <Row noGutters="true">
                <Col xs={1}>
                    <Image  thumbnail src={id%2 ? require('../../assets/images/girl.png'):require('../../assets/images/boy.png')} roundedCircle />
                </Col>
                <Col>
                    <Link to={"/users/"+ id}><h3>{username}</h3></Link>
                    <p>name: {name}</p>
                    <p>email: {email}</p>
                    <p>address: {address.street}, {address.city}</p>
                    <p>phone: {phone}</p>
                    <p>website: {website}</p>
                    <p>company: {company.name}</p>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default UserCard;