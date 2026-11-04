function Card({ id, name, imageUrl, handleClick }) {
    return (
        <div className="card" onClick={() => handleClick(id)}>
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Card;
