import React, { Component } from 'react';
import axios from 'axios';
import PostCard from './Card'

class PostsList extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        const self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                const data = response.data;
                self.setState({ data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return this.state.data.map((post) =>
            <PostCard key={post.id} {...post} ></PostCard>
        );
    }
}

export default PostsList;