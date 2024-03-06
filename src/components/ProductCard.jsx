// ProductCard.jsx
import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handleAddToCartClick = () => {
    setProductCount(prevCount => prevCount + 1);
    alert(`You have ${productCount + 1} item(s) added to your cart`);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.imageUrls.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + product.imageUrls.length) % product.imageUrls.length);
  };

  const handleToggleDescription = () => {
    setShowDescription(prevState => !prevState);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
          alt={product.name}
        />
        <button onClick={handleNextImage} disabled={product.imageUrls.length <= 1}>Next</button>
        <button onClick={handlePreviousImage} disabled={product.imageUrls.length <= 1}>Previous</button>
      </div>

      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <button onClick={handleToggleDescription}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && <div>The product is out of stock</div>}
    </>
  );
}
