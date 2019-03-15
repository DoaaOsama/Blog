import React, { Component } from 'react';
import axios from 'axios';
import CommentCard from './Card';

class CommentDispaly extends Component {

    state = {
        data: {}
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then( (response)=>  {
                // handle success
                const data = response.data;
                this.setState({ data });
                console.log({data})
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;
        return (
            <CommentCard {...data}></CommentCard>
        )
    }
}

export default CommentDispaly;