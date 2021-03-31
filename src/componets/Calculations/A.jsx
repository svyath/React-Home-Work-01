import React from 'react';
import B from './B';
import '../Input/Input.css';

//  2. Створити 3 компонента крізь які будемо передавати функцію з рандомним числом та повертати в головний компонент  
//  де отримане значення з компонента  С будемо множити на 1000 та записувати в стейт . (А -> B -> C > B > A)

class A extends React.Component{
    constructor(props){
        super(props);
        this.state = {randNumb: 'Click button to get a random number'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({randNumb: Math.floor(Math.random() * 1000)});
    }

    render(){
        return(
            <div>
                <hr/>
                <div className="inputContainer">
                <h2>Get random number</h2>
                <div>
                    <i>{this.state.randNumb}</i>
                </div>
                <B getNumber = {this.handleClick}/>
            </div>
                <hr/>
            </div>
        )
    }
}

export default A;