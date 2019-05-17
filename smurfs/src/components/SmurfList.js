import React from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return(
            <div>
                {this.props.smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <h1>{smurf.name}</h1>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                        </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs
})

export default connect(
    mapStateToProps, 
    {getSmurfs})(SmurfList)