/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
// import '../Assets/Sass/components/login.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import H2 from "./Home";
import LoginHooks from "../hooks/LoginHooks";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Forms =  styled.form`
  border-radius:0px 50px 0px 50px;
  box-shadow: 10px 10px 10px 5px #080808;
  margin-top:10px;  
`;

export const Input = styled.input`
    padding: 10px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "palevioletred" : "#9b59b6" };
    color: #fff;
    margin: 20px;
    font-weight: bold;
`; 

function Login() {
	const { handleLogin, handleEmail, handlePassword, error } = LoginHooks();

	return (
		<div className="container d-flex mt-5 flex-column align-items-center">
			<img src="logo.png" width={180} alt="Codivas" className="mb-3" />
			<Forms onSubmit={handleLogin} className=" d-flex flex-column border p-5 " style={{ height: "450px", textAlign: "center" }}>
				<div class="form-group d-flex flex-column justify-content-between" style={{ height: "450px", border: "1px solid transparent" }}>
					<p className="text-muted">Bem Vinda CODIVAS!</p>
					<input className="form-control" type="email" name="" placeholder="E-mail" onChange={handleEmail} required />
					<input className="form-control" type="password" name="" placeholder="Password" onChange={handlePassword} required />
					<a className="nav-link" href="#">
						Esqueceu a senha?
					</a>
					<Input type="submit" name="" value="Login" />
					<p className="mb-3">Não tem conta? <Link to="/registro" className="nav-link d-inline">Registe-se agora</Link></p>
				</div>

				<ul className="social-network social-circle d-flex mt-2 justify-content-around">
					<li>
						<a href="https://github.com/Codivas" className="icoGitHub" title="Github">
							<FontAwesomeIcon icon={["fa", "code-branch"]} />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/as.codivas/" className="icoInstagram" title="Instagran">
							<FontAwesomeIcon icon={["fa", "camera-retro"]} />
						</a>
					</li>
				</ul>
			</Forms>
		</div>
	);
}

export default Login;
