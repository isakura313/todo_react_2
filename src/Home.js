import Sli from './slider/sliderTest'

function Home(){
    return(
        <div className = "home">
            <h1> Главная страница</h1>
            <Sli />
            <p> Тут мы расскажем про нашу любимую студию 
                Gimli
            </p>
        </div>
    )
}

export default Home