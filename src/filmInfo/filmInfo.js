import './filmInfo.css'


function FilmInfo(props) {
    return(
    <div key={props.id} className="film_cont">
        <h1>{props.title}</h1>
        <h3> {props.director}</h3>
        <p> {props.description}</p>
        <span>{props.release_date} </span>
        <a href='#'>  Узнать больше </a>
    </div>
    )
  }

export default FilmInfo