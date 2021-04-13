function Film(props) {
    return(
    <div>
        <h1>{props.title}</h1>
        <h3> {props.director}</h3>
        <p> {props.description}</p>
        <span>{props.release_date} </span>
    </div>
    )
  }

export default Film