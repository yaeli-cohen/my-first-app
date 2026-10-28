import { useState } from 'react';

function AddProductForm({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      name: name.trim(),
      price: Number(price),
      description: description.trim(),
      features: features
        .split(',')
        .map((f) => f.trim())
        .filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />    
      <input
        type="text"
        placeholder="Features (comma separated)"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
      
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;