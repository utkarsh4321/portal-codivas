import { useEffect, useState } from "react";
import { client } from "../auth/api";
import  CONSTANTS  from "../constants/index";

const RegisterHook = () => {
  const [userName, setUserName] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const [userPassword, setUserPassword] = useState(false);

  useEffect(() => {
    client
      .post(`${CONSTANTS.API.REGISTRO}`, {
        user_name: "camis21",
        password: "senha",
        email: "email@email43.com.br",
      })
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }, []);

  return {
    userName,
    userEmail,
    userPassword,
  };
};

export default RegisterHook;
