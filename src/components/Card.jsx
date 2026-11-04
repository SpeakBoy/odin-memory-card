function Card({ name, image_url }) {
    return (
        <div className="card">
            <img src={image_url} alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export default Card;
