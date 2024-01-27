import { useEffect } from "react";
import "../../Style/Components/HeadersStyle.css";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ appName }) => {
  const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleHomeClick = () => {
      navigate('/home')
    }
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="logo">
          <span className="h3" onClick={handleHomeClick}>{appName}</span>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <aside>
          <button className="btn-login" onClick={handleLoginClick}>Login</button>
          <button className="btn-register">Register</button>
        </aside>
      </div>
    </header>
  );
};
