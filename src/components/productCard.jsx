import { props } from 'react';

const QuantityCounter = ({ count, setCount }) = useState(0);

const [addedToCart, setAddedToCart] = useState(false);

const ProductCard = ({ product }) => {

    return (
        //<div className="product-card">
        <li key={product.id}>
            <h2>{product.name}</h2>
            <p>מחיר: {product.price} ש"ח</p>
            <p>{product.description}</p>
            <ul>
                {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>סה"כ {product.price * count} שח</p>


            {addedToCart ? (
                <p> {count} יחידות נוספו לעגלה</p>
            ) : (
                <button disabled={count === 0} onClick={() => setAddedToCart(true)}>הוסף לעגלה</button>
            )}

        </li>
        //  <div/>
    );
};

export default ProductCard;