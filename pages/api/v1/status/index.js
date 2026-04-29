function status(request, response) {
  response.status(200).json({ chave: "Tudo Funcionando" });
}

export default status;
