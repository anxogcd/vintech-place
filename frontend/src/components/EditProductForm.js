import { useContext, useState } from "react";
import { TokenContext } from "./TokenContextProvider";
import { useHistory, useParams } from "react-router";
import "../css/edit-forms.css";

const EditProductForm = (props) => {
  const { product } = props;
  const { id } = useParams();

  const [token] = useContext(TokenContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ubication, setUbication] = useState("");

  const history = useHistory();

  const [error, setError] = useState("");

  const info = {
    title: title || product.title,
    price: price || product.price,
    description: description || product.description,
    ubication: ubication || product.ubication,
  };

  async function editProduct(e) {
    e.preventDefault();

    const res = await fetch(`http://localhost:3300/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(info),
    });

    const data = await res.json();

    if (res.ok) {
      setError("");
      history.push(`/product/${id}`);
    } else {
      setError(data.error);
    }
  }

  return (
    <div className="form-wrapper" id="edit-form">
      <form id="edit-product" onSubmit={editProduct}>
        <label htmlFor="edit-title">
          <p>Título:</p>
          <input
            type="text"
            id="edit-title"
            name="edit-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={product.title}
          />
        </label>

        <label htmlFor="edit-price">
          <p>Precio:</p>
          <input
            type="number"
            id="edit-price"
            name="edit-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={product.price}
          />
        </label>

        <label htmlFor="edit-description">
          <p>Descripción:</p>
          <input
            type="text"
            id="edit-description"
            name="edit-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={product.description}
          />
        </label>

        <label htmlFor="edit-ubication">
          <p>Ubicación:</p>
          <input
            type="text"
            id="edit-ubication"
            name="edit-ubication"
            value={ubication}
            onChange={(e) => setUbication(e.target.value)}
            placeholder={product.ubication}
          />
        </label>

        <input type="submit" value="Editar producto" />

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default EditProductForm;
