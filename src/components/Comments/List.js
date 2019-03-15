import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.postId,
            Comments: []
        }
    }

    componentDidMount() {
        const { postId } = this.state;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => {
                // handle success
                const Comments = response.data;
                this.setState({ Comments });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return this.state.Comments.map((comment) => {
            return (
                <Container>
                    <Row noGutters="true">
                        <Col xs={1}>
                            <img className="post-comment__img" src="http://icons.iconarchive.com/icons/designbolts/seo/256/Review-Post-icon.png" alt="comment"></img>
                        </Col>
                        <Col>
                            <Link to={"/comments/" + comment.id}>
                                <p className="comment">{comment.name}</p>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            );
        });
    }
}

export default CommentList;