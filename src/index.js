import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Main from './Components/Main';
import './assets/stylesheets/style.css'

const tasks = ["finish react tutorial", "eat something great", "sleep well tonight"];

const tasklist = <Fragment>
    <h1>Task List</h1>
    <ol>
        {tasks.map((task, index) => 
            <li key = {index}>{task}</li>
        )}
    </ol>
</Fragment>

class List extends Component {

    render(){
        return(
            <ol>
                {this.props.tasks.map((task, index) => 
                    <li key = {index}>{task}</li>
                )}
            </ol>
        )
    }
}

class Title extends React.Component {
    render(){
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

class Main2 extends React.PureComponent {
    render(){
        return (
            <React.Fragment>
                <Title title = {"Tasks List"}/>
                <List tasks = {tasks}/>
            </React.Fragment>           
        )
    }
}

//ReactDOM.render(tasklist, document.getElementById('root'));

process.env.URL = "";
ReactDOM.render(
    <BrowserRouter><Main /></BrowserRouter>, 
    document.getElementById('root')
);
