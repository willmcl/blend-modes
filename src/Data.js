import React, { Component } from 'react';
import DataTable from './DataTable.js';
import DataInstructions from './DataInstructions.js';
import Heading from './molecules/Heading';
import IconSpecifics from './atoms/IconSpecifics';

class Data extends Component {
    render() {

        const selected = this.props.selected;
        let data;

        if ( selected.length > 1 ) {
            data = <DataTable current={this.props.current} selected={this.props.selected}/>;
        } else {
            data = <DataInstructions />;
        }

        return (
            <div className="Data">
                <Heading text="Playground data"><IconSpecifics/></Heading>
                {data}
            </div>
        )
    }
}

export default Data;