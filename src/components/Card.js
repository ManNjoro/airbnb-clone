// import star from '../images/star.png';
// import katie from '../images/katie-zaferes.png';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`images/${props.coverImg}`} alt='alt' className='katie'></img>
            <div className='card-stats'>
                    <img src="./images/star.png" alt='star' className='star'></img>
                    {props.stats.rating}
                    <span className='grey'>({props.stats.reviewCount}) . {props.location}</span>
            </div>
                <p>{props.title}</p>
            <p><span className='price'>from ${props.price}<span className='grey'>/ person</span></span></p>  
        </div>
    )
}