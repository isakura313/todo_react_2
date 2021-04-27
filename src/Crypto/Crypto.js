import React from 'react'
import axios from 'axios'

class BitcoinCourse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time:0,
            usd:0,
        }
    }
    componentDidMount(){
        this.course = setInterval(() => this.getData(), 1000);
    }
    async getData(){
        let data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        this.setState({
            time: data.data.time.updated,
            usd: data.data.bpi.USD.rate
        })
    }
    render(){
        return(
            <div>
                <h3> Время курса  {this.state.time} </h3>
                <h3>  Курс биткоина  $ {this.state.usd}</h3>
            </div>
        )
    }
}


export default  BitcoinCourse