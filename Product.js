export default function Product(props) {
  const { products } = props;
  return (
    <div>
      <h3>
        {products.productName} {products.productPrice}
      </h3>
      <button>Add To Cart</button>
    </div>
  );
}
