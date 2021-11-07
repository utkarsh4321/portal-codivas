/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import '../Assets/Sass/components/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RegisterHook from "../hooks/RegisterHook";

function Register() {
  const {
    handleUserName,
    handlePassword,
    handleEmail,
    handleRegister
} = RegisterHook()

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <img src="logo.png" width={110} alt="" />
            <div className="card">
              <form onSubmit={handleRegister} className="box">
                <h2>Cadastre - se </h2><br/>
                <p className="text-muted"> Bem Vinda!</p>
                <input type="email" name="email" placeholder="Email" required onChange={handleEmail} />
                <input type="text" name="username" placeholder="Username" required onChange={handleUserName} />
                <input type="password" name="password" placeholder="Password" required onChange={handlePassword} />
                {/* <a className="forgot text-muted" href="#">
                  Esqueceu a senha?
                </a> */}
                <input type="submit" name="submit" value="Register" />
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
    </>
  );
}

export default Register;
