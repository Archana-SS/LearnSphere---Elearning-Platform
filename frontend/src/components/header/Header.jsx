import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Header = () => {
  const { user, isAuth } = UserData(); 

  return (
    <header>
      <div className="logo">LearnSphere - An Interactive E-learning Platform</div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        {isAuth && (<Link to={"/courses"}>Courses</Link>)}
        <Link to={"/about"}>About</Link>

        {/* Static Read Articles Page */}
        {isAuth && (
        <a
          href="/news-app/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Articles
        </a>
        )}

        {isAuth && (<Link to={"/youtube-playlists"}>Video Playlists</Link>)}

        {isAuth && (
        <a 
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flashcards
        </a>
        )}

        {isAuth && (
          <a
            href={`http://localhost:5174/?token=${localStorage.getItem("token")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Interview Prep
          </a>
        )}

        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
