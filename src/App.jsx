import { useEffect, useState } from 'react';
import FavoriteButton from './components/FavoriteButton';
import ContactForm from './components/ContactForm';
import AddProductForm from './components/AddProductForm';

const initialProducts = [
  {
    id: 1,
    name: 'סט כוסות',
    price: 25,
    description: 'סט של שישה כוסות זכוכית עמידות.',
    features: ['זכוכית עמידה', 'מתאימות למדיח', 'שישה בסט'],
  },
  {
    id: 2,
    name: 'חבילת מפיות',
    price: 6.3,
    description: 'חבילת 20 מפיות נייר איכותיות.',
    features: ['נייר איכותי', 'מתאימות לאירועים', '20 במארז'],
  },
  {
    id: 3,
    name: 'צלחות חגיגיות',
    price: 11,
    description: 'צלחות חגיגיות לאירועים.',
    features: ['חזקות במיוחד', 'עיצוב יפה', 'מתאימות לאירועים'],
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);

  // ברירת מחדל: לפי העדפת מערכת ההפעלה
  const [mode, setMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  // החלת המצב על <html> כדי שה-CSS יגיב
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <div>
      <h1>החנות שלי</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>
              מחיר: {product.price} ש"ח
            </p>
            <p>{product.description}</p>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <FavoriteButton name={product.name} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setShowForm(!showForm)}>
        הוסף מוצר
      </button>

      {showForm && (
        <AddProductForm
          onAdd={(product) => {
            setProducts([...products, { ...product, id: Date.now() }]);
            setShowForm(false);
          }}
        />
      )}

      <button type="button" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        {mode === 'light' ? 'מצב כהה' : 'מצב בהיר'}
      </button>

      <ContactForm />
    </div>
  );
}

export default App;
