import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <h1>Products</h1>
      <label name="productname">Product Name</label>
      <br />
      <input type="text" required />
      <br />
      <br />
      <label name="productPrice">Product Price</label>
      <br />
      <input type="text" required />
      <br />
      <br />
      <button type="Submit">Save</button>
    </div>
  );
}
