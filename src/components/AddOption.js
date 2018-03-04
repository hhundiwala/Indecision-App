import React from "react";

export default class AddOption extends React.Component{
    state =  {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const ip = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(ip);

        this.setState(()=> ({error : error}));
        if(!error){
            e.target.elements.option.value = "";
        }

    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}