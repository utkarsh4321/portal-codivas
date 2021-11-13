/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
// import '../Assets/Sass/components/login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import H2 from "./Home";
import LoginHooks from "../hooks/LoginHooks";

function Login() {
	const { handleLogin, handleEmail, handlePassword, error } = LoginHooks();

	return (
		<div className="container d-flex mt-5 flex-column align-items-center">
			<img src="logo.png" width={180} alt="Codivas" className="mb-3" />
			<form onSubmit={handleLogin} className=" d-flex flex-column border p-5 " style={{ height: "450px", textAlign: "center" }}>
				<div class="form-group d-flex flex-column justify-content-between" style={{ height: "250px", border: "1px solid transparent" }}>
					<p className="text-muted">Bem Vinda!</p>
					<input className="form-control" type="email" name="" placeholder="seuemail@domain.com" onChange={handleEmail} required />
					<input className="form-control" type="password" name="" placeholder="Senha" onChange={handlePassword} required />
					<a className="nav-link" href="#">
						Esqueceu a senha?
					</a>
					<input className="btn btn-primary" type="submit" name="" value="Login" />
				</div>

				<ul className="social-network social-circle d-flex mt-2 justify-content-around">
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
			</form>
		</div>
	);
}

export default Login;
