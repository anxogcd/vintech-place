import { useContext } from "react";
import { TokenContext } from "../components/TokenContextProvider";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const UploadButton = (props) => {
  const [token] = useContext(TokenContext);
  let route;
  if (token) {
    route = "/product";
  } else {
    route = "/login";
  }

  const location = useLocation();
  let fill;
  if (location.pathname === "/product") {
    fill = "#d07017";
  } else {
    fill = "#828282";
  }

  return (
    <Link to={route}>
      <svg
        id="upload-button"
        width="149"
        height="149"
        viewBox="0 0 149 149"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99.3333 149H49.6667C36.4942 149 23.8613 143.767 14.547 134.453C5.23272 125.139 0 112.506 0 99.3333V49.6667C0 36.4942 5.23272 23.8613 14.547 14.547C23.8613 5.23272 36.4942 0 49.6667 0H99.3333C112.506 0 125.139 5.23272 134.453 14.547C143.767 23.8613 149 36.4942 149 49.6667V99.3333C149 112.506 143.767 125.139 134.453 134.453C125.139 143.767 112.506 149 99.3333 149V149ZM49.6667 11.037C39.4215 11.037 29.5959 15.1069 22.3514 22.3514C15.1069 29.5959 11.037 39.4215 11.037 49.6667V99.3333C11.037 109.579 15.1069 119.404 22.3514 126.649C29.5959 133.893 39.4215 137.963 49.6667 137.963H99.3333C109.579 137.963 119.404 133.893 126.649 126.649C133.893 119.404 137.963 109.579 137.963 99.3333V49.6667C137.963 39.4215 133.893 29.5959 126.649 22.3514C119.404 15.1069 109.579 11.037 99.3333 11.037H49.6667Z"
          fill={fill}
        />
        <path
          d="M74.4997 112.412C73.0361 112.412 71.6325 111.831 70.5975 110.796C69.5626 109.761 68.9812 108.357 68.9812 106.894V42.1064C68.9812 40.6428 69.5626 39.2392 70.5975 38.2042C71.6325 37.1693 73.0361 36.5879 74.4997 36.5879C75.9633 36.5879 77.367 37.1693 78.4019 38.2042C79.4368 39.2392 80.0182 40.6428 80.0182 42.1064V106.894C80.0182 108.357 79.4368 109.761 78.4019 110.796C77.367 111.831 75.9633 112.412 74.4997 112.412Z"
          fill={fill}
        />
        <path
          d="M43.5686 73.5894C42.4364 73.5905 41.3312 73.2433 40.403 72.5949C39.4748 71.9466 38.7686 71.0284 38.3799 69.965C37.9913 68.9016 37.9392 67.7444 38.2306 66.6503C38.5221 65.5563 39.143 64.5783 40.0091 63.8492L70.9404 37.8845C72.0601 36.9405 73.5089 36.4799 74.9681 36.6041C76.4273 36.7283 77.7775 37.4271 78.7215 38.5468C79.6655 39.6664 80.1261 41.1152 80.0019 42.5745C79.8777 44.0337 79.1789 45.3839 78.0593 46.3279L47.1004 72.2925C46.1114 73.1252 44.8614 73.5841 43.5686 73.5894V73.5894Z"
          fill={fill}
        />
        <path
          d="M105.431 73.5894C104.138 73.5841 102.888 73.1252 101.899 72.2925L70.9405 46.3279C69.8209 45.3839 69.1221 44.0337 68.9979 42.5745C68.9364 41.8519 69.0178 41.1244 69.2375 40.4333C69.4572 39.7422 69.8109 39.1012 70.2783 38.5468C70.7458 37.9924 71.3178 37.5355 71.9618 37.2021C72.6058 36.8688 73.3092 36.6656 74.0317 36.6041C75.491 36.4799 76.9398 36.9405 78.0594 37.8845L108.991 63.8492C109.857 64.5783 110.478 65.5563 110.769 66.6503C111.061 67.7444 111.009 68.9016 110.62 69.965C110.231 71.0284 109.525 71.9466 108.597 72.5949C107.669 73.2433 106.563 73.5905 105.431 73.5894Z"
          fill={fill}
        />
      </svg>
    </Link>
  );
};

export default UploadButton;