import React from 'react';
import InputFunctional from './InputFunctional';
import './Input.css';

//  1. Створити класовий компонент в якому з допомогою стану компоненту всі дані з інпута в який юзер буде вводити текст - 
//  будуть в режимі реального часу відображатись в функціональному компоненті в h1 тегу. 

class InputClass extends React.Component {
    constructor(props){
        super(props);
        this.state = '';
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render(){
        return (
            <div className = "inputContainer">
                <h2>User Input</h2>
                <input type = "text" placeholder="Type something ..." onChange = {this.handleChange} value = {this.state.inputValue} />
                <InputFunctional value = {this.state.inputValue}/>      
            </div>
        )
    }
}
export default InputClass;