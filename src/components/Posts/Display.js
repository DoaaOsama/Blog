import React, { Component } from 'react';
import axios from 'axios';
import PostCard from './Card';

class PostDisplay extends Component {

    state = {
        data: {}
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
            <PostCard {...data}></PostCard>
        )
    }
}

export default PostDisplay;