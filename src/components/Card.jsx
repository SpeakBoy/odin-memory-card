function Card({ name, imageUrl, handleClick }) {
    return (
        <div className="card" onClick={() => handleClick(false)}>
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Card;
