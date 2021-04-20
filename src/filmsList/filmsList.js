import React from "react";
// import film from "../fixtures.json";
import FilmInfo from "../filmInfo/filmInfo";
import axios from 'axios';


class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  async componentDidMount() {
    let data = await axios.get('https://ghibliapi.herokuapp.com/films')
    this.setState({
      films: data.data,
    });
  }

  render() {
    return (
      <div>
        {this.state.films.map((film) => (
          <FilmInfo
            id={film.id}
            title={film.title}
            director={film.director}
            description={film.description}
            release_date={film.release_date}
          />
        ))} 
      </div>
    );
  }
}
export default FilmsList;
