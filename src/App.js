import { useState} from 'react';
import './App.css';

let initialState = [
  {
      id: 1,
      descricao : "Primeira atividade"
    },
    {
      id: 2,
      descricao: "Segunda atividade"
    }
];

function App() {
  const [atividades, setAtividades] = useState(initialState);
  
  function addAtividade(e){
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    };
    setAtividades([...atividades, {atividade}]);
  }
  return (
    <>

      <form className="row g-3">
          <div className="col-md-6">
              <label for="inputEmail4" className="form-label">ID</label>
              <input id='id' type="text" className="form-control" placeholder="id"/>
          </div>  
          <div>
              <label for="inputEmail4" className="form-label">Descrição</label>
              <input id='descricao' type="text" className="form-control" placeholder="descricao"/>
          </div>
          <hr/>
          <div className="col-12">
            <button className="btn btn-outline-success" onClick={addAtividade}>+ atividade</button>
          </div>
      </form>

      <div className="mt-3">
          {atividades.map(ativ => (
              <div key={ativ.id} className="card mb-2 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className='card-title'></h5>
                  

                  </div>
                    <p className="card-text">
                      {ativ.id}-{ativ.descricao}
                    </p>
                </div>
              </div>


          ))}
      </div>
    </>
  );
}

export default App;
