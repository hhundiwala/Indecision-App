import React from 'react';

const Option = (props) => (
        <div>
            Option : {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOptionSingular(props.optionText)
            }}>Delete</button>
        </div>
    );

export default Option;