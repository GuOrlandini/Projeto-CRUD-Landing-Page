// endpoint para mostrar o status do sistema. request trata do que entra na função e o response trata do quero responder
function status(request, response) {
  // o objeto response possui um método chamado status, que define o status code da resposta, onde por convensão o 200 é o statuscode para tudo OK
  response.status(200).send("tudo OK");
}
