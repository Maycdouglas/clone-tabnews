function status(request, response) {
  // response.status(200).send("Enviado!"); //o método send não define o charset
  response.status(200).json({ mensagem: "Enviado" }); //assume o charset como utf-8
}

export default status;
