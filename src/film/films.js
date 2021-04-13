import React from "react";
import Film from './filmDetail'

class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {films: [{
            title: 0,
            description: 0,
        }]};
      }
    componentDidMount() {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            films: result
          });
          console.log(this.state.films)
        });
    }
    render() {
      return (
        <div>
            <ul>
          {this.state.films.map(item => (
            <Film id={item.id} title={item.title}  director = {item.director} description = {item.description} 
            release_date ={item.release_date}
            />
          ))}
        </ul>
        </div>
      );
    }
  }
  
  export default Films;