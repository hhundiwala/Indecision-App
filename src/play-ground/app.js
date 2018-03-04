class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        };
    }

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

    componentWillUnmount(){

    }

    handlePick(){
        let random = Math.floor((Math.random() * this.state.options.length));
        alert(this.state.options[random]);
    }

    handleDeleteOption(){
        this.setState(() => ({options : []}));
    }

    handleDeleteOptionSingular(optionToRemove){
        this.setState((prevState) => ({options : prevState.options.filter((option) => {
            return optionToRemove !== option;
        })
        }));
    }
    handleAddOption(option){
        if(!option){
            return 'Enter Valid String';
        }else if(this.state.options.indexOf(option)> -1 ){
            return 'This is option is already in the list';
        }

        this.setState((prevState) => (
            {options : prevState.options.concat([option])}
        ));
        
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in hands of the computer!!!";
        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick}/>
                <Options options={this.state.options} handleDeleteOption = {this.handleDeleteOption} handleDeleteOptionSingular = {this.handleDeleteOptionSingular}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header =  (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

const Action = (props) => {
    return(
        <div>
        <button onClick={props.handlePick} disabled ={!props.hasOptions}>What should I do?</button>
        </div>
    );
}


const Options = (props) => {
    return(
        <div>

        <button onClick={props.handleDeleteOption} disabled={!props.options.length}>Remove All</button>
        {
            props.options.map((option) => <Option key={option} optionText = {option} handleDeleteOptionSingular={props.handleDeleteOptionSingular}/>)
        }
        {props.options.length == 0 && <p>Please add data to get started</p>}
        </div> 
    ); 
}


const Option = (props) => {
        return(
            <div>
                Option : {props.optionText}
                <button onClick={(e) => {
                    props.handleDeleteOptionSingular(props.optionText)
                }}>Delete</button>
            </div>
        );   
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const ip = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(ip);
        
        this.setState(()=> ({error : error}));
        if(!error){
            e.target.elements.option.value = "";
        }

    }
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






ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

console.log('Test');