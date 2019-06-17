import React, { Component } from 'react';
import DataTable from './DataTable.js';
import Heading from './molecules/Heading';
import IconData from './atoms/IconData';

class Data extends Component {
    render() {

        const selected = this.props.selected;
        let data;

        if ( selected.length > 1 ) {
            data = <DataTable current={this.props.current} selected={this.props.selected}/>;
        } else {
            data = <><p>Select an overlapping shape within the playground to see data.</p></>;
        }

        return (
            <div className="Data">
                <Heading text="Playground data"><IconData/></Heading>
                {data}
            </div>
        )
    }
}

export default Data;