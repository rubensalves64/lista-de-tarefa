let participantes = [
  {
    nome: "Rubens",
    email: "rubens@gmail.com",
    dataInscriçao: new Date(2024, 2, 22, 19, 20),
    dataInscriçao: new Date(2024, 2, 25, 19, 20),
  },
];

const criarNovoParticipante = (participante) => {
  return `
    <tr>
  <td>
    <strong>${participante.nome}</strong>
    <br />
    <small>${participante.email}</small>
  </td>
  <td>${participante.dataInscriçao}</td>
  <td>${participante.dataInscriçao}</td>
</tr>`;
};

const atualizarlista = (participante) => {
  document.querySelector("tbody").innerHTML =
    criarNovoParticipante(participante);
};
atualizarlista(participantes);
