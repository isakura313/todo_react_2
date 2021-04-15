import React from "react";
import film from "../fixtures.json";
import FilmInfo from "../filmInfo/filmInfo";

console.log(film);
class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: film,
    };
  }

  componentDidMount() {
    this.setState({
      films: film,
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
