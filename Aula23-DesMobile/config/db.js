const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passoword: '1234',
    database: 'vendas'
});

db.connect((err)=>{
    if(err){
        console.error('Erro ao conectar no banco: ', err);
    }else{
        console.error('Sucesso na conexão');
    }
       
});