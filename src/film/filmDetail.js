// import { ReactComponent } from "react";
import React from "react";
// async function data() {
//   let url = "https://ghibliapi.herokuapp.com/films";
//   let response = await fetch(url);
//   let json = await response.json();
//   // console.table(json[0])
//   return json;
// }
// (async () => {
//   let info = await data();
//   console.log(info[0]);
// })();

function Film(props) {
    return (
      <div key={props.id}>
        <h1>{props.title}</h1>
        <h3> {props.director}</h3>
        <p> {props.description}</p>
        <span>{props.release_date} </span>
      </div>
    );
}

export default Film;
