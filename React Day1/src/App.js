import './App.css';
import React, { useState } from 'react';
import MyComponent from './MyComponent/MyComponent';
import DisplayComponent from './DisplayComponent/DisplayComponent';

class App extends React.Component
{
  render()
  {
    
  }
}

function App({title}) {
 /* var isAdmin = false
  let users = [{user : "Naval Andhyal"},
  {user : "Bhavana Andhyal"},
  {user : "Onkar Andhyal"},
  {user : "Navin Andhyal"}];*/
  //var customElement = React.createElement("div",null,"Test Div");
  const [counter, setCounter] = useState(0);
  const onClickFunction = (incrementValue) => {setCounter(counter+incrementValue)};
  return (
    <div className="header">
      {title}
      
    <MyComponent clickFunction={onClickFunction} increment={1}/>
    <MyComponent clickFunction={onClickFunction} increment={5}/>
    <MyComponent clickFunction={onClickFunction} increment={10}/>
    <MyComponent clickFunction={onClickFunction} increment={20}/>
    <MyComponent clickFunction={onClickFunction} increment={30}/>
    <MyComponent clickFunction={onClickFunction} increment={40}/>


    <DisplayComponent message={counter}/>
    </div>
  );
}

export default App;
