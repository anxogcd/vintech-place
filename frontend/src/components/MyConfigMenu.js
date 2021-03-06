import { Link } from "react-router-dom";

const MyConfigMenu = (props) => {
  const menuOptions = ["edit-profile", "pwd", "delete-user"];

  const menuOptionsArray = menuOptions.map((opt, index) => {
    let title;

    switch (opt) {
      case "edit-profile":
        title = "EDITAR MIS DATOS";
        break;
      case "pwd":
        title = "CAMBIAR CONTRASEÑA";
        break;
      case "delete-user":
        title = "ELIMINAR CUENTA";
        break;
      default:
        title = "OPCION";
    }

    let url = `${opt}`;

    return (
      <li key={index}>
        <Link to={url}>
          <h3>{title}</h3>
        </Link>
      </li>
    );
  });

  return (
    <div id="menu-profile">
      <ul id="user-config-menu">{menuOptionsArray}</ul>
    </div>
  );
};
export default MyConfigMenu;
