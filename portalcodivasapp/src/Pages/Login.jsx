/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
// import '../Assets/Sass/components/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H2 from './Home'
import { Context } from '../context/AuthProvider'

function Login() {
  const { handleLogin } = useContext(Context)
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="logo.png" width={110} alt="" />
          <div class="card">
            <form onsubmit="event.preventDefault()" class="box">
              <H2>Login</H2><br />
              <p class="text-muted"> Bem Vinda!</p>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <a class="forgot text-muted" href="#">
                Esqueceu a senha?
              </a>
              <input type="button" name="" value="Login" onClick={handleLogin} />
              <div class="col-md-12">
                <ul class="social-network social-circle">
                  <li>
                    <a href="#" class="icoFacebook" title="Facebook">
                      <FontAwesomeIcon icon={["fa", "bell"]} />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icoGoogle" title="Google +">
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
