import airbnb from '../images/airbnb-logo.png';
export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} alt='logo' className='bnb-logo'></img>
        </nav>
    )
}