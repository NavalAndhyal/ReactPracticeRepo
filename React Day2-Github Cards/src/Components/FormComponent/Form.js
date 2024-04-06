import React from "react";
import axios from 'axios'

class Form extends React.Component{
    state = {userName : ''};
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
        axios.get('https://api.github.com/users/'+this.state.userName).then(resp => 
        {
        console.log(resp);
        if(resp && resp.data)
            this.props.handlProfileAdd(resp.data);
        }
    );
        //console.log(response);
    }
render(){
    return(
        <form onSubmit = {this.handleSubmit} action="">
            <input type="text"
            value={this.state.userName}
            onChange={event => this.setState({userName : event.target.value})}
            placeholder="GitHub username"/>
            <button>Add card</button>
        </form>
    );
}

}

export default Form;