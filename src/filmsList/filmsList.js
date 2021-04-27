import React from "react";
// import film from "../fixtures.json";
import FilmInfo from "../filmInfo/filmInfo";
import axios from 'axios';


class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      posters: [],
    };
  }

  async componentDidMount() {
    let data = await axios.get('http://localhost/3000/films', {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    // const posters_data = []
    // let posters = await data.data.map( async (film)=>{
    //   // console.log(film.title)
    //   return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=daf505c5946495d627705675649bad8f&query=${film.title}`)
    // })
    // Promise.all(posters).then(responses => responses.forEach(
    //      response => posters_data.push(response)  

    // // http://image.tmdb.org/t/p/w500/

    this.setState({
      films: data.data,
    });
  }
 

  render() {
    return (
      <div>
         {this.state.posters.length}
        {this.state.films.map((film, index) => (
          <FilmInfo
            id={film.id}
            title={film.title}
            poster={this.state.posters[index]}
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
