export default function Joke(props) {
    return (
        <div>
            {props.setup && <h5>{props.setup}</h5>}
            {props.punchline}
            <hr></hr>
        </div>
    )
}