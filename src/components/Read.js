import React, { Component } from 'react';

class Read extends Component {

    state = {};

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://jfddl7-api-b832f.firebaseio.com/cats/${id}.json`)
            .then(response => response.json())
            .then(data => {
                this.setState(data);
            })
    }

    render() {
        return (
            <div>
                <div>
                    Name: {this.state.name}
                </div>
                <div>
                    Age: {this.state.Age}
                </div>
                <div>
                    Color: {this.state.Color}
                </div>

            </div>
        );
    }
}

export default Read;