import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    addSmurf = e => {
        e.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.addSmurf(newSmurf);

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div className="smurfForm">
                <form onSubmit={this.addSmurf}>
                    <input
                        onChange={this.handleChanges}
                        placeholder="name"
                        name="name"
                        type='text'
                        value={this.state.name}
                    />
                    <input
                        onChange={this.handleChanges}
                        placeholder="age"
                        name="age"
                        type='number'
                        value={this.state.age}
                    />
                    <input
                        onChange={this.handleChanges}
                        placeholder="height"
                        name="height"
                        type='text'
                        value={this.state.height}
                    />
                    <button type="submit">Add smurf</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    {addSmurf})
    (SmurfForm);