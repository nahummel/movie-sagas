import React, { Component } from 'react';
import { connect } from 'react-redux'

class Edit extends Component {

    state = {
        title: '',
        description: ''
    }

    handleChange = (event, property) => {
        switch (property) {
            case 'title':
                return this.setState({
                    [property]: event.target.value
                });
            case 'description':
                return this.setState({
                    [property]: event.target.value
                });
        }
    }

    handleCancel = () => {
        this.props.history.push('/details');
    }

    handleSave = () => {
        this.props.dispatch({ type: "SAVE", payload0: this.props.reduxState.detailsReducer.id, payload1: this.state.title, payload2: this.state.description});
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.handleSave}>Save</button>
                <input type="text" placeholder="Title" onChange={(event) => this.handleChange(event, 'title')}></input>
                <input type="text" placeholder="Description" onChange={(event) => this.handleChange(event, 'description')}></input>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Edit);