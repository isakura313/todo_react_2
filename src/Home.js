import Sli from './slider/sliderTest'
import BitcoinCourse from './Crypto/Crypto'
function Home(){
    return(
        <div className = "home">
            <BitcoinCourse/>
            <h1> Главная страница</h1>
            <Sli />
            <p> Тут мы расскажем про нашу любимую студию 
                Gimli
            </p>
        </div>
    )
}

export default Home