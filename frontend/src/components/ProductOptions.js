import { useContext } from "react";
import { TokenContext } from "./TokenContextProvider";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductOptions = (props) => {
  const [token] = useContext(TokenContext);
  const { id } = useParams();

  const history = useHistory();

  async function deleteProduct() {
    if (window.confirm("¿Seguro que deseas borrar este producto?")) {
      const res = await fetch(`http://localhost:3300/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const data = await res.json();
      console.log(data);

      history.push("/");
    }
  }

  function editProduct() {
    history.push(`/product/${id}/edit-product`);
  }

  return (
    <div id="product-options">
      <button onClick={deleteProduct}>Eliminar producto</button>
      <button onClick={editProduct}>Editar producto</button>
    </div>
  );
};

export default ProductOptions;
