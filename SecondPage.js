import "./styles.css";

export default function SecondPage(props) {
  const { products } = props;
  return (
    <main>
      <div className="row">
        {products.map((product) => (
          <Product key={product.productName} product={product}></Product>
        ))}
      </div>
    </main>
  );
}
