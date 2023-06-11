import './style.css'

const Pizza = ({ name, ingradients, price, soldOut, photoName }) => {
    return (
        <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingradients}</p>
                <span>{soldOut ? "SOLD OUT" : price}</span>
            </div>
        </div>
    );
};

export default Pizza;