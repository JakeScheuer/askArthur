import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
    render() {
        return;
    }
}

const mapStateToProps = state => {
    return { decision: state.decisionInfo };
};

export default connect(mapStateToProps)(Results);