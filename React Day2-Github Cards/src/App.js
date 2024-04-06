import './App.css';
import React from 'react';
import CardList from './Components/CardListComponent/CardList';
import Form from './Components/FormComponent/Form';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      profiles : testData,
    };
  }
  handlProfileAdd = (profileToAdd) =>{
    console.log("profileToAdd : ",profileToAdd);
    this.state.profiles.push(profileToAdd);
    console.log("profiles , ",this.state.profiles);
   this.setState({profiles : this.state.profiles})
  }
  render()
  {
   
    return(
    <div className="header">
      {this.props.title}
      <Form handlProfileAdd={this.handlProfileAdd}/>
      <CardList profiles={this.state.profiles}></CardList>
    </div>
    );
  }
}


export default App;
