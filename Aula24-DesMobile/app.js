const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const db = require('.config/db');

app.use(express.json());


app.get('/', (req, res) => {
	res.send('Olá mundo!');
});

app.get('/testabanco', (req, res) => {
    db.query('select * from usuario', (err, results)=>{
        if(err){
            console.error('Erro na consulta', err);
            res.status(500).send('Erro na consulta');
        }
        else{
            res.status(200).json(results);
        }
    })
});

app.get('/api/usuarios', (req, res)=>{
	const data = {
		id: 1,
		login: 'usuario_teste',
		senha: '123456',
		nome: 'Fulano de tal'
	}

	const usuarios = require('./usuarios.json');
	
    db.query('select * from usuario', (err, results)=>{
        if(err){
            console.error('Erro na consulta', err);
            res.status(500).send('Erro na consulta');
        }
        else{
            res.status(200).json(results);
        }
    })
});

app.delete('api/usuario:pId', (req, res) =>{
    const id = req.params.pId;

    if(id){
        console.log("removendo Id: ", id);
        const query = "Delete from usuario where id = ?"
        db.query(query, id, (err, result)=>{
            if(err){
                console.error("Error ao apagar registro");
                res.status(500).json({message: 'erro ao remover usuário'})
            }
            else{
                res.status(200).json({message: 'usuário removido com sucesso'})
            }
        })
    }
})

app.put('api/usuario', (res, req)=> {
    const {id, user_name, email, login, avatarURL, passwd} = req.body;

    if(id){
        const query = 'update usuario set id = ?, user_name = ?, email = ?, login = ?, avatarURL = ?, passwd = ? where id = ?'
        db.query(query, [user_name, email, login, passwd, avatarURL, id], (err, result) => {
            if(err){
                console.error("Error ao apagar registro");
                res.status(500).json({message: 'erro ao atualizar registro'})
            }
            else{
                res.status(200).json({message: 'usuário atualizado com sucesso'})
            }
        })
    }
})

app.post('/api/usuario', (req, res) =>{
	//const dados = req.body;
	
    const {id, user, name, login, avatarURL, email, passwd} = req.body

    if(id){
        //Update
        console.log("Está atualizando");
        const query = 'Update usuario set user_name = ?, email = ?, login = ?, passwd = ?, avatarURL = ? where id = ?'
        db.query(query, [user_name, email, login, passwd, avatarURL, id], (err, response) =>{
            if(err){
                console.log("Erro ao executar consulta no SGBD:", err);
                res.status(500).json({message: 'erro na consulta'});
            }
            else{
                res.status(200).json({message: 'Dados atualizados com sucesso!'});
            }
        })

    }
    else{
        //Insert
        console.log("Está inserindo")
        const query = 'Insert into usuario() values (?, ?, ?, ?, ?)'
        db.query(query, [user_name, email, login, passwd, avatarURL], (err, result) =>{
            if(err){
                console.log("Erro ao executar consulta no SGBD:", err);
                res.status(500).json({message: 'erro na consulta'});
            }
            else{
                res.status(200).json({message: 'Dados atualizados com sucesso!'});
            }
        })

    }

    console.log('Dados de usuários recebidos:', dados);
    res.status(200).json({mensagem: 'POST realizado'});
});

app.listen(port, ()=>{
	console.log(`Servidor funcionando na porta: ${port}`);
})