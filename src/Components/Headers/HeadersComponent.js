import { useEffect } from "react";
import "../../Style/Components/HeadersStyle.css";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ appName }) => {
  const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
      navigate('/register');
  };

    const handleHomeClick = () => {
      navigate('/')
    }
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="logo">
          <span className="h3" onClick={handleHomeClick}>{appName}</span>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
        </nav>
        <aside>
          <button className="btn-login" onClick={handleLoginClick}>Login</button>
          <button className="btn-register" onClick={handleRegisterClick}>Register</button>
        </aside>
      </div>
    </header>
  );
};
