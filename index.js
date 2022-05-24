const express = require("express");

const app = express();
app.use(express.json());

// GET /instrutores <= OK

const listaDeInstrutores = [
  {
    id: 1,
    nome: "Junior",
    idade: 22,
    areaDeAtuacao: "Back-end",
  },
  {
    id: 2,
    nome: "Fernando",
    idade: 28,
    areaDeAtuacao: "Back-end",
  },
  {
    id: 3,
    nome: "Felipe",
    idade: 28,
    areaDeAtuacao: "Front-end",
  },
  {
    id: 4,
    nome: "Júlio",
    idade: 40,
    areaDeAtuacao: "FullStack",
  },
  {
    id: 5,
    nome: "Luis",
    idade: 30,
    areaDeAtuacao: "Back-end",
  },
  {
    id: 6,
    nome: "Alex",
    idade: 20,
    areaDeAtuacao: "Front-end",
  },
];

let proximoId = 5;

app.get("/instrutores", (req, res) => {
  res.json(listaDeInstrutores);
});

app.get("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listaDeInstrutores.find(
    (instrutor) => instrutor.id === Number(req.params.idConsultado)
  );
  res.json(instrutor);
});

app.post("/instrutores", (req, res) => {
  console.log(req.body);

  const novoInstrutor = {
    id: proximoId,
    nome: req.body.nome,
    idade: req.body.idade,
    areaDeAtuacao: req.body.areaDeAtuacao,
  };

  listaDeInstrutores.push(novoInstrutor);

  proximoId += 1;

  res.json(novoInstrutor);
});

app.listen(8000);
