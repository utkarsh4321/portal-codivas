/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
// import '../Assets/Sass/components/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H2 from './Home'
import LoginHooks from '../hooks/LoginHooks'

function Login() {
  const {
    handleLogin,
    handleEmail,
    handlePassword,
    error
} = LoginHooks()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="logo.png" width={110} alt="" />
          <div className="card">
            <form onSubmit={handleLogin} className="box">
              <H2>Login</H2><br />
              <p className="text-muted"> Bem Vinda!</p>
              <input type="email" name="" placeholder="seuemail@domain.com" onChange={handleEmail} required />
              <input type="password" name="" placeholder="Password" onChange={handlePassword} required />
              <a className="forgot text-muted" href="#">
                Esqueceu a senha?
              </a>
              <input type="submit" name="" value="Login" />
              <div className="col-md-12">
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <FontAwesomeIcon icon={["fa", "bell"]} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoGoogle" title="Google +">
                      <FontAwesomeIcon icon={["fa", "user-alt"]} />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
