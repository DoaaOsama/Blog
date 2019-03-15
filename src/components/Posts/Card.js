import React from 'react';
import CommentList from '../Comments/List'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../App.css';


const PostCard = (posts) => {

    const { userId, id, title, body } = posts;
    return (
        <Container className="post-card" my={2}>
            <Row noGutters="true">
                <Col xs={1}>
                    <Image thumbnail src={userId % 2 ? require('../../assets/images/girl.png') : require('../../assets/images/boy.png')} roundedCircle />
                </Col>
                <Col>
                    <Link to={"/posts/" + id}><h2 className="post-title">{title}</h2></Link>
                    <p className="post-body">{body}</p>
                </Col>
            </Row>
            <Row noGutters="true">
                <Col>
                    <CommentList postId={id}></CommentList>
                </Col>
            </Row>
        </Container>
    )
}

export default PostCard;