import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class List extends Component {

    state = {
        data: []
    }

    fetchData = () => {
        fetch('https://jfddl7-api-b832f.firebaseio.com/cats.json')
            .then(response => response.json())
            .then(responseData => {
                const data = [];
                Object.entries(responseData).forEach(elem => {
                    data.push({
                        id: elem[0],
                        ...elem[1]
                    });

                    // data.push({
                    //   id: elem[0],
                    //   name: elem[1].name,
                    //   age: elem[1].age,
                    //   color: elem[1].color,
                    // });

                });
                this.setState({ data: data });
                // this.setState({ data });
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    handleRemove = (id) => {
        fetch(`https://jfddl7-api-b832f.firebaseio.com/cats/${id}.json`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    this.fetchData();
                }
            });
    }

    render() {
        return (
            <div>
                {this.state.data.map(elem => (
                    <div key={elem.id}>
                        <Link to={'/read/&{elem.id}'}>{elem.name}</Link> <button onClick={() =>
                            this.handleRemove(elem.id)}>Remove</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default List;