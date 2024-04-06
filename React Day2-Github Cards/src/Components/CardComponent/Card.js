import React from 'react';
import './Card.css';


class Card extends React.Component
{
    render(){
        return(
        <div className="github-profile">
    	  <img src={this.props.data.avatar_url} alt={this.props.data.name} />
            <div className="info">
                <div className="name">{this.props.data.name}</div>
                <div className="company">{this.props.data.company}</div>
            </div>
    	</div>
        );
    }
}

    
    export default Card;
    