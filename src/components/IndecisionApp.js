import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
    };
    //below are some lifecycle methods
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options:options}));
            }
        }catch (e){
            //do nothing
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption : undefined}));
    };
    handlePick = () => {
        let random = Math.floor((Math.random() * this.state.options.length));
        const selected = this.state.options[random]
        this.setState( () => ({selectedOption: selected} ));
    };

    handleDeleteOption = () => {
        this.setState(() => ({options : []}));
    };

    handleDeleteOptionSingular = (optionToRemove) =>{
        this.setState((prevState) => ({options : prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter Valid String';
        }else if(this.state.options.indexOf(option)> -1 ){
            return 'This is option is already in the list';
        }

        this.setState((prevState) => (
            {options : prevState.options.concat([option])}
        ));

    };

    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in hands of the computer!!!";
        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick}/>
                    <Options options={this.state.options} handleDeleteOption = {this.handleDeleteOption} handleDeleteOptionSingular = {this.handleDeleteOptionSingular}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption = {this.state.selectedOption} handleClearSelectedOption = {this.handleClearSelectedOption}/>
            </div>
        );
    }
}
