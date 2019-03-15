import React, { Component } from 'react';
import axios from 'axios';
import PostCard from '../Posts/Card';

class UserDisplay extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const self = this;
        const id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                // handle success
                const data = response.data;
                self.setState({ data });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;
        return data.map(post => {
            return (
                
                <PostCard key={post.id} {...post}></PostCard>
            )
        });
    }
}

export default UserDisplay;