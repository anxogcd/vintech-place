import { Link } from "react-router-dom";
import PhotoIcon from "@material-ui/icons/Photo";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ReactTimeAgo from "react-time-ago";
import "../css/products-gallery.css";

const HistoryList = (props) => {
  const { data } = props;

  console.log(data);

  let arrayData;
  data
    ? (arrayData = data.map((product, index) => (
        <li key={index} className="product">
          {console.log(index)}
          <Link to={`/product/${product.id_product}`}>
            <div className="div-img">
              {product.img ? (
                <img
                  src={`http://localhost:3300/uploads/imgs/${product.img.img}`}
                  alt="foto de producto"
                />
              ) : (
                <PhotoIcon />
              )}
            </div>
            <h2>{product.price}</h2>
            <p className="time-ago">
              <ReactTimeAgo date={product.modification_date} locale="es-ES" />
            </p>
            <p className="product-title">{product.title}</p>
            <p className="product-ubication">
              <LocationOnOutlinedIcon />
              {product.ubication}
            </p>
          </Link>
        </li>
      )))
    : (arrayData = "No hay productos");

  return <ul id="products">{arrayData}</ul>;
};

export default HistoryList;
