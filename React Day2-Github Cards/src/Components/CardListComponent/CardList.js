import React from "react";
import Card from "../CardComponent/Card";

class CardList extends React.Component{
    
    render()
    {
        return(
            <div>
                {this.props.profiles.map(t => <Card data={t}></Card>)}
            </div>
        );
    }
}

export default CardList;