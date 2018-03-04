
import React from 'react';
import Option from './Option';


const Options = (props) => (
        <div>

            <button onClick={props.handleDeleteOption} disabled={!props.options.length}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText = {option} handleDeleteOptionSingular={props.handleDeleteOptionSingular}/>)
            }
            {props.options.length === 0 && <p>Please add data to get started</p>}
        </div>
    );
export default Options;