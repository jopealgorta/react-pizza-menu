import './style.css';
import pizzasData from '../../data/pizzas';
import Pizza from '../Pizza';

const Menu = () => {

    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {pizzasData.length > 0 ?
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All
                        from our stone oven, all organic, all delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzasData.map((pizza, i) =>
                            <li key={i}>
                                <Pizza name={pizza.name} ingradients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut} />
                            </li>
                        )}
                    </ul>
                </>
                : "We're still working on our menu. Please come back later :)"}
        </main>
    );
}

export default Menu;