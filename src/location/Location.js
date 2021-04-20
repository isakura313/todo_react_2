import React from 'react'

class Location extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            locations: ["Город которого нет"]
        }
    }
    render(){
        return(
            <div>
                <h1> Позже здесь будет инфа </h1>
                <p>{this.state.locations[0]} </p>
            </div>
        )
    }
}
export default Location