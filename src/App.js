import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {

  state = {
    text: '',
    textLength: 0
  }

  onChangeListener = (event) => {
    let enteredText = event.target.value;
    this.setState(
      {
        text: enteredText,
        textLength : enteredText.length
      }
    );
  }

  deleteText = (index) => {
    console.log("index : " + index);
    // Get the current text
    let prevTextArray = [...this.state.text]
    prevTextArray.splice(index,1);
    this.setState({
      text : prevTextArray.join("")
    });

  }

  render() {
    // For rendering ValidationComponent
    let output = null;
    if(this.state.textLength > 5){
      output = "Length seems correct";
    }
    else{
      output = "Length too short";
    }

    let printthis = (    
            [...this.state.text].map((c,index) => 
              <CharComponent ch={c} click = {() => this.deleteText(index)} key={index}/>
            )
    );

    return (
      <div className="App">
        <ol>
          <li> <strike>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph). </strike></li>
          <li> <strike>Create a new component (=> ValidationComponent) which receives the text length as a prop</strike></li>
          <li> <strike>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length) </strike></li>
          <li> <strike>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black). </strike></li>
          <li> <strike>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop. </strike></li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" id="text-id" onChange={this.onChangeListener} value={this.state.text}/>
        <p> The length of the text entered : {this.state.textLength}</p>
        <ValidationComponent output={output}/>
        {printthis}    
      </div>
    );
  }
}

export default App;
