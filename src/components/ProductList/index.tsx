import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";

type Props = {};

const ProductList = (props: Props) => {
  const { products, addProduct, fetchProduct, editProduct, deleteProduct } =
    useContext(ProductContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {products?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}

      <button onClick={() => addProduct({ name: "Product C" })} className="bg-green-400 m-2 p-2">
        Add Product
      </button>
      <button
        onClick={() => editProduct({ name: "Product C update", id: 3 })}
        className="bg-blue-400 m-2 p-2"
      >
        Edit Product
      </button>
      <button
        onClick={() => deleteProduct({ name: "Product C update", id: 3 })}
        className="bg-red-400 m-2 p-2"
      >
        Delete Product
      </button>
    </div>
  );
};

export default ProductList;
