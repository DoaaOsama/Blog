import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './Card'

class UsersList extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        const self = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
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
        return this.state.data.map((user) =>
            <UserCard key={user.id} {...user} ></UserCard>
        );
    }
}

export default UsersList;