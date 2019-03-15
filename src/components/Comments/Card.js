import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../App.css';


const CommentCard = (comment) => {

    const {postId ,id, name, email, body} = comment;
    return (
        <Container className="post-card" my={2}>
            <Row noGutters="true">
                <Col xs={1}>
                    <Image  thumbnail src="http://icons.iconarchive.com/icons/designbolts/seo/256/Review-Post-icon.png" alt="comment" />
                </Col>
                <Col>
                    <h3>{name}</h3>
                    <p>postId: {postId}</p>
                    <p>comment id: {id}</p>
                    <p>email: {email}</p>
                    <p>{body}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CommentCard;