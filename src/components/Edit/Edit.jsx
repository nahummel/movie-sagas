import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';

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
            default:
                return this.state
        }
    }

    handleCancel = () => {
        this.props.history.push('/details');
    }

    handleSave = () => {
        if (this.state.title === '' && this.state.description === '') {
            this.props.dispatch({ type: "SAVE", payload0: this.props.reduxState.detailsReducer.id, payload1: this.props.reduxState.detailsReducer.title, payload2: this.props.reduxState.detailsReducer.description });
        } else if (this.state.description === ''){
            this.props.dispatch({ type: "SAVE", payload0: this.props.reduxState.detailsReducer.id, payload1: this.state.title, payload2: this.props.reduxState.detailsReducer.description});
        } else if (this.state.title === '') {
            this.props.dispatch({ type: "SAVE", payload0: this.props.reduxState.detailsReducer.id, payload1: this.props.reduxState.detailsReducer.title, payload2: this.state.description });
        } else {
        this.props.dispatch({ type: "SAVE", payload0: this.props.reduxState.detailsReducer.id, payload1: this.state.title, payload2: this.state.description});
        }
        this.props.history.push('/details');
    }

    render() {
        return (
            <div className="edit">
                <h1>Edit</h1>
                <div>
                    <Button onClick={this.handleCancel} variant="contained" size="medium" style={{ marginRight: 10 }}>Cancel</Button>
                    <Button onClick={this.handleSave} variant="contained" size="medium">Save</Button>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Title" onChange={(event) => this.handleChange(event, 'title')} className="titleInput"></input>
                    <textarea type="text" placeholder="Description" onChange={(event) => this.handleChange(event, 'description')} className="descriptionInput"></textarea>
                </div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Edit);