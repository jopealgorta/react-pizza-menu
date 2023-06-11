import './style.css';
import pizzasData from '../../data/pizzas';
import Pizza from '../Pizza';

const Menu = () => {

    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {pizzasData.length > 0 ?
                <ul className='pizzas'>
                    {pizzasData.map((pizza, i) =>
                        <li key={i}>
                            <Pizza name={pizza.name} ingradients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut} />
                        </li>
                    )}
                </ul>
                : 'No pizzas available!'}
        </main>
    );
}

export default Menu;