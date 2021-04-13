import "./App.css";
// import Sli from './slider/sliderTest'
import Greet from './greet/greet'
import Film from './film/film'

async function data (){
  let url = 'https://ghibliapi.herokuapp.com/films'
  let response = await fetch(url);
  let json = await response.json();
  // console.table(json[0])
  return json
}
(async ()=>{
let info = await data()
console.log(info[0])
})()

function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      <Film props={data()[0]} />
      <Greet />
      {/* <Sli /> */}
    </div>
  );
}

export default App;
