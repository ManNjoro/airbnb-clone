import star from '../images/star.png';
// import katie from '../images/katie-zaferes.png';

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} alt='alt' className='katie'></img>
            <div className='card-stats'>
                    <img src={star} alt='star' className='star'></img>
                    {props.item.stats.rating}
                    <span className='grey'>({props.item.stats.reviewCount}) . {props.item.location}</span>
            </div>
                <p>{props.item.title}</p>
            <p><span className='price'>from ${props.item.price}<span className='grey'>/ person</span></span></p>  
        </div>
    )
}