import React from "react";
import "./../styles/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <BackIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <Link to="/">
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
        </Link>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.iconscout.com/icon/free/png-512/tinder-7-226557.png"
          alt="logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
