import { useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState();
  const [nome, setNome] = useState('');
  const [nota01, setnota01] = useState('');
  const [nota02, setnota02] = useState('');
  const [nota03, setnota03] = useState('');
  const [lista, setLista] = useState([]);


  function salvar() {
    console.log('salvar ');

    if (id) {
      const index = lista.findIndex(n => n.id === id);
      lista[index].nome = nome;
      lista[index].nota01 = parseFloat(nota01);
      lista[index].nota02 = parseFloat(nota02);
      lista[index].nota03 = parseFloat(nota03);
      lista[index].media = ((lista[index].nota01 + lista[index].nota02 + lista[index].nota03) / 3).toFixed(2);
  
      setLista([...lista]);
    } else {
      let nota = {
        id: Math.random().toString(36),
        nome: nome,
        nota01: parseFloat(nota01),
        nota02: parseFloat(nota02),
        nota03: parseFloat(nota03),
        media: 0
      };
  
      nota.media = ((nota.nota01 + nota.nota02 + nota.nota03)).toFixed(2);
  
      lista.push(nota);
      setLista([...lista]);
    }

    

    setId('');
    setNome('');
    setnota01('');
    setnota02('');
    setnota03('');
  }

  function editar(id) {
    console.log('editar ', id);
    const nota = lista.find(n => n.id === id);
    setId(nota.id);
    setNome(nota.nome);
    setnota01(nota.nota01);
    setnota02(nota.nota02);
    setnota03(nota.nota03);

  }

  function excluir(id) {
    console.log('excluir ', id);
    const index = lista.findIndex(n => n.id === id);
    lista.splice(index, 1);
    setLista([...lista]);
  }
  

  return (
    
    <div className="container">
      <h1>Controle de Notas</h1>
      <center>
        <form className="row">
        <div id='dados' className="mb-3 col-4">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)} />
          </div>

          <div id='dados' className="mb-3 col-4">
            <label className="form-label">Nota 01</label>
            <input type="text" className="form-control" value={nota01} onChange={(event) => setnota01(event.target.value)} />
          </div>

          <div id='dados' className="mb-3  col-4">
            <label className="form-label">Nota 02</label>
            <input type="text" className="form-control" value={nota02}  onChange={(event) => setnota02(event.target.value)} />
          </div>

          <div id='dados' className="mb-3  col-4">
            <label className="form-label">Nota 03</label>
            <input type="text" className="form-control" value={nota03}  onChange={(event) => setnota03(event.target.value)} />
          </div>

          <div className='col-md-12'>
          <button id='b_salvar' type="button" onClick={salvar}>Salvar</button>
          </div>
          
        </form>
      </center>

      <table className="table">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Nota 01</th>
            <th>Nota 02</th>
            <th>Nota 03</th>
            <th>Média</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            lista.map((n, index) => {
              return (
                <tr key={index}>
                  <td>{n.nome}</td>
                  <td>{n.nota01}</td>
                  <td>{n.nota02}</td>
                  <td>{n.nota03}</td>
                  <td>{n.media}</td>
                  <td>
                    <button className='col-md-12' id='b_editar' onClick={() => editar(n.id)}>Editar</button>
                  </td>
                  <td>
                    <button className='col-md-12' id='b_excluir' onClick={() => excluir(n.id)}>Excluir</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
  <footer id="rodape">
    <p><b>Grupo: Lucas Rocha Schreiner & Arthur da Silva</b></p>
  </footer>
</div>
    </div>
  );
}

export default App;
