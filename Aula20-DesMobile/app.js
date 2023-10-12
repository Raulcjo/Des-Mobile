const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
	res.send('Olá mundo!');
});

app.get('/api/usuarios', (req, res)=>{
	const data = {
		id: 1,
		login: 'usuario_teste',
		senha: '123456',
		nome: 'Fulano de tal'
	}

	const usuarios = require('./usuarios.json');
	
	res.json(usuarios);
});

app.post('/api/usuario', (req, res) =>{
	const dados = req.body;
	
	console.log('Dados recebidos: ', dados);
	
	res.json({mensagem: 'Dados recebidos com sucesso!'});
});

app.listen(port, ()=>{
	console.log(`Servidor funcionando na porta: ${port}`);
})