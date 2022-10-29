/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RegisterHook from "../hooks/RegisterHook";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Forms =  styled.div`
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


function Register() {
  const {
    handleUserName,
    handlePassword,
    handleEmail,
    handleRegister
} = RegisterHook()

  return (
    <div className="container d-flex mt-5 flex-column align-items-center">
			<img src="logo.png" width={180} alt="Codivas" className="mb-3" />
			<Forms onSubmit={handleRegister} className=" d-flex flex-column border p-5 " style={{ height: "450px", textAlign: "center" }}>
				<div class="form-group d-flex flex-column justify-content-between" style={{ height: "450px", border: "1px solid transparent" }}>
					<p className="text-muted">Bem Vinda CODIVAS!</p>
					<input type="email" name="email" placeholder="E-mail" required onChange={handleEmail} />
                <input type="text" name="username" placeholder="Username" required onChange={handleUserName} />
                <input type="password" name="password" placeholder="Password" required onChange={handlePassword} />
                <Input type="submit" name="submit" value="Register" />
				</div>
        <p className="mb-3">Já tem uma conta? <Link to="/" className="nav-link d-inline">Login</Link></p>
				<ul className="social-network social-circle d-flex mt-2 justify-content-around">
					<li>
						<a href="https://github.com/Codivas" className="icoGitHub" title="Github">
							<FontAwesomeIcon icon={["fa", "code-branch"]} />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/coletivo.codivas/" className="icoInstagram" title="Instagran">
							<FontAwesomeIcon icon={["fa", "camera-retro"]} />
						</a>
					</li>
				</ul>
			</Forms>
		</div>
  );
}

export default Register;
