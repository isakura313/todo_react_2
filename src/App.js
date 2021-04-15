import "./App.css";
import Sli from './slider/sliderTest'
// import Greet from './greet/greet'
import FilmsList from './filmsList/filmsList'

async function data (){
  let url = 'https://ghibliapi.herokuapp.com/films'
  let response = await fetch(url);
  let json = await response.json();
  // console.table(json[0])
  return json
}
(async ()=>{
let info = await data()
// console.log(info[0])
})()

function App() {
  return (
    <div className="App">
      <h1> Фильмы студии Гимли </h1>
      <Sli />
      {/* <Greet /> */}
      <FilmsList/>
    </div>
  );
}

export default App;
