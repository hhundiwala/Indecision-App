console.log("App.js is running");

var app = document.getElementById('app');

let application = {
    title: "Indecision App",
    subtitle: "Let me clear your ambiguity!",
    option: []
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        application.option.push(option);
        e.target.elements.option.value = "";
        render()
    }else{
        //do not run the code
    }
};

const removeAll = () =>{
    application.option = [];
    render();
};

const makeDecision = () =>{
    const num = Math.floor(Math.random() * application.option.length);
    console.log(application.option[num]);

}

const render =  () =>{
    let template = (
        <div>
            <h1>{application.title}</h1>
            <p>{application.subtitle}</p>
            <h3>Option List</h3>
            <p>{application.option.length>0 ? "Here are your options!!" : "You have no options in the list"}</p>
            <ol>
            {
                application.option.map((num) => {
                    return <li key={num}>{num}</li>
                })
            }
            </ol>
            <button disabled={application.option.length==0} onClick={makeDecision}>What should I do?</button>
            <button onClick= {removeAll}> Remove All </button> <br/>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        );

    ReactDOM.render(template,app);
};

render()




