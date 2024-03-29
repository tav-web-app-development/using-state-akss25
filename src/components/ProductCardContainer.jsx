import ProductCard from "./ProductCard.jsx";

export default function ProductCardContainer({ products }) {
  const productsJsx = products.map((product) => (
    <ProductCard product={product} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
