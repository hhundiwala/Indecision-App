let count = 0;
const addOne = () => {
    count++;
    console.log("Count!" + count);
    renderCounter();
};

const minusOne = () => {
    count--;
    console.log("Count!" + count);
    renderCounter();
};

const resetCount = () => {
    count=0;
    console.log("Count!" + count);
    renderCounter();
};
const test_trmplate = (
    <div>
        <p>This is just the template </p>
        <h1> Counter : {count}</h1>
        <button onClick={addOne}> +1 </button>
        <button onClick={minusOne}> -1 </button>
        <button onClick={resetCount}> Reset </button>
    </div>
);

console.log(test_trmplate);

ReactDOM.render(test_trmplate,app);

const renderCounter = () => {
    const test_trmplate = (
        <div>
            <p>This is just the template </p>
            <h1> Counter : {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={resetCount}> Reset </button>
        </div>
    );
    
    ReactDOM.render(test_trmplate,app);

}