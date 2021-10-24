const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const cursos = ['Fullstack Master','Desenvolvimento de games', 'viver de youtube'];

//retorna um curso
app.get('/cursos/:index',(req,res)=>{
    const {index} = req.params;

    return res.json(cursos[index]);
});

//Retorna todos os cursos
app.get('/cursos',(req,res)=>{
    return res.json(cursos);
});

//criar um novo curso
app.post('/cursos',(req,res)=>{
    const{name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//atualizar um curso
app.put('/cursos/:index',(req,res)=>{
    const{ index } = req.params;
    const{ name } = req.body;
    cursos[index] = name;

    return res.json(cursos);
});

//excluindo um curso
app.delete('/cursos/:index',(req,res)=>{
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({message: 'o curso foi deletado'});
});



app.listen(PORT);
console.log(`servidor rodando na porta ${PORT}`);