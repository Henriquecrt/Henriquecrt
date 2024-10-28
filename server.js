const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

const db = new sqlite3.Database('./C:\Users\heman\Desktop\AGD BARBEARIA\DataBase\loja.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/agendar', (req, res) => {
  const { nome, data, hora } = req.body;

  const clienteId = 1; // Exemplo: ID do cliente
  const servicoId = 1; // Exemplo: ID do serviço

  const sql = `INSERT INTO agendamentos (cliente_id, servico_id, data, hora) VALUES (?, ?, ?, ?)`;
  db.run(sql, [clienteId, servicoId, data, hora], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao agendar' });
    }
    res.json({ id: this.lastID, data, hora });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});