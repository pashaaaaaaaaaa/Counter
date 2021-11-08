import React from "react"
import Button from './Component/Button/Button'
import './App.css';

class App extends React.Component {
  state = {
    value:1,
    arr : [],
    saveArr: []

  }
  click=()=>{
    if(this.state.value <= 19){
      this.setState({value:++this.state.value})
    }
  }
  click2=()=>{
    if(this.state.value > 0){
      this.setState({value:--this.state.value})
    }
  }
  click3=()=>{
    const number = this.state.value
    
    const newArr = []
    const cloneSA = [...this.state.saveArr]
    
    
    for(let i=0; i < number; i++){
      newArr.push(1+Math.round(Math.random() * 5))
    }
      cloneSA.push(newArr)
      this.setState({
        arr: newArr,
        saveArr: cloneSA
      })
    console.log(this.state.saveArr)
  }
  render(){
  return (
    <div className="App">
        <p>{this.state.value}</p>
        <Button text="Add" click={this.click}/>
        <Button text="Remove" click={this.click2}/>
        <p className="p">{this.state.arr}</p>
        <Button text="Throw" click={this.click3}/>
    </div>
  );
 }
}
export default App;
