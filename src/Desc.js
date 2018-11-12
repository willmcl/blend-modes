import React, { Component } from 'react';
import IssueReportingInfo from './IssueReportingInfo.js';

class Desc extends Component {
    render() {
        return (
            <div className="Desc">
                <h3>{this.props.current.displayName}</h3>
                {this.props.current.description.map(paragraph => (
                    <p>{paragraph}</p>
                ))}
                <IssueReportingInfo />
            </div>
        )
    }
}

export default Desc;