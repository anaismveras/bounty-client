function Poster (props) {
    let status = props.bounty.captured ? 'In Custody' : 'At Large'
    return(
        <div className="Poster">
            <h2>{status}</h2>
            <h3>{props.bounty.name}</h3>
            <h4>{props.bounty.reward}</h4>
            <button onClick={() => props.changeCurrent(props.bounty)}>More Info</button>
        </div>
        )
}

export default Poster