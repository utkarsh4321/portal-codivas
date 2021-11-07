const isNotAutenticate = ({ isAuth, isPrivate}) => {
/**
 * @isAuth (bolean) - autenticado
 * @isPrivate (bolean) - pagina privada
 * @return (bolean) - true  NÃO-antenticado, false autenticado
 * caso queira alterar a regra de negocio da autenticação, modificar AuthProviderHooks.js
 **/
    if (!isPrivate) return false  // rota publica
    
    if (isAuth) return false // autorizado
     
    return /* setar para false, caso queira ignorar as regras de autenticação para developer mode -> */ true 
}

export default isNotAutenticate