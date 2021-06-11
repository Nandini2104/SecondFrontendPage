import Header from "./Header";
import SecondPage from "./SecondPage";
import Data from "./Data";

export default function App() {
  const { products } = Data;
  return (
    <div className="App">
      <Header></Header>
      <SecondPage products={products}></SecondPage>
    </div>
  );
}
