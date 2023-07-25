import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-96 mx-auto border border-gray-500 p-2">
        <ProductList />
      </div>
    </>
  );
}

export default App;
