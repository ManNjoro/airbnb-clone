// import photogrid from '../images/photo-grid.png';
export default function Hero() {
    return(
        <div className="hero-container">
            <div className="photogrid">
                <img src='./images/photo-grid.png' alt="heros" className="heros"></img>
            </div>
            <div className='experiences'>
                <h1>Online Experiences</h1>
                <section>
                    Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                </section>
            </div>
        </div>
    )
}