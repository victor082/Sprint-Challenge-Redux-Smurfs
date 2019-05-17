import React from 'react';
import { getSmurfs, deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }
    
    deleteSmurf = e => {
        this.props.deleteSmurf(e.target.id)
    }

    render() {
        return(
            <div className="smurfsCard">
                {this.props.smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <h1>{smurf.name}</h1>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                        <button onClick={this.deleteSmurf}>Delete Smurf</button>
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
    {getSmurfs, deleteSmurf})(SmurfList)