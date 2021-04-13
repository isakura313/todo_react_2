import "./App.css";
import Sli from './slider/sliderTest'
const slogans = ['Отличный денек',
                'Я так люблю JSX',
                'React это жизнь']
let index_r = Math.floor(Math.random() * slogans.length)

function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      <h3>{slogans[index_r]}</h3>
      <Sli />
    </div>
  );
}

export default App;
