import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {toggleLoaded } from "../redux/reducers/schedule";

const Header = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [location]);

  const goHome = () => {
    dispatch(toggleLoaded());
  }

  return (
    <div className="header" style={{backgroundImage: "url(/images/header_background.png)"}}>
      {loaded && (
        <div className="back-btn">
          <Link to="/" onClick={goHome}>
            <img src="icons/arrow_back_ios.svg" alt="back" />
          </Link>
        </div>
      )}
      <h2> SUPER FILM</h2>
    </div>
  );
};

export { Header };
