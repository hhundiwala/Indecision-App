class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: props.count
        }
    }

    addOne(){
       this.setState((prevState) => {
            return {
                count : prevState.count +1
            };
       });
    }

    subtractOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count -1
            };
        });
    }

    reset(){
        this.setState(() => {
            return{
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                <p>This is a Counter Application</p>
                <h1> Counter : {this.state.count}</h1>
                <button onClick={this.addOne}> +1 </button>
                <button onClick={this.subtractOne}> -1 </button>
                <button onClick={this.reset}>  Reset </button>
            </div>
        );
    }
}

Counter.defaultprops = {
    count : 0
}

ReactDOM.render(<Counter count={3}/>,document.getElementById('app'));













// let count = 0;
// const addOne = () => {
//     count++;
//     console.log("Count!" + count);
//     renderCounter();
// };

// const minusOne = () => {
//     count--;
//     console.log("Count!" + count);
//     renderCounter();
// };

// const resetCount = () => {
//     count=0;
//     console.log("Count!" + count);
//     renderCounter();
// };
// const test_trmplate = (
//     <div>
//         <p>This is just the template </p>
//         <h1> Counter : {count}</h1>
//         <button onClick={addOne}> +1 </button>
//         <button onClick={minusOne}> -1 </button>
//         <button onClick={resetCount}> Reset </button>
//     </div>
// );

// console.log(test_trmplate);

// ReactDOM.render(test_trmplate,app);

// const renderCounter = () => {
//     const test_trmplate = (
//         <div>
//             <p>This is just the template </p>
//             <h1> Counter : {count}</h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={resetCount}> Reset </button>
//         </div>
//     );
    
//     ReactDOM.render(test_trmplate,app);

// }