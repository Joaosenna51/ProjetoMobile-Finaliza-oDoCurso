//importação do módulo jsonwebtoken
const jwt = require("jsonwebtoken");

/*Verificar se o token foi criado. Assim o usuário poderá acessar alguns conteúdos bloqueados
Se o usuário não tiver token, ele será redirecionar para o login.
*/
function verificarToken(req, res, next) {
    const token_enviado = req.headers.token;
  
    if (!token_enviado) {
      return res.status(401).send({
        retorno: "Não existe token, realize o processo de autenticação",
      });
    }
  
    jwt.verify(token_enviado, "informatica", (erro, resultado) => {
      if (erro) return res.status(500).send({ retorno: `Erro interno ${erro}` });
      req.content = {
        id: resultado.idusuario,
        usuario: resultado.nomeusuario,
        email: resultado.email,
      };
      return next();
    });
  }

  module.exports = verificarToken;