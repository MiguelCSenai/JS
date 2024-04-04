import { useState } from "react";
import "./SecondExercise.css"

function SecondExercise() {

    let [nome, setNome] = useState();
    let [salario, setSalario] = useState();
    let [reajuste, setReajuste] = useState();

    function alterarNome(elemento){

        setNome(elemento.target.value)

    }
    function alterarSalario(valor){

        setSalario(valor.target.value)

    }
    function alterarReajuste(porcento){

        setReajuste((porcento.target.value)/100)

    }

    let novo_salario = parseFloat(salario)+(parseFloat(salario)*reajuste);

    if (Number.isNaN(novo_salario)){
        novo_salario = 0;
    }
    return (
      <>

        <h2>Execicio 2</h2>
        <br/>
        
        <div class="bigcontainer">
        
        <div class="container reddit-mono-fonte">
        <label>Nome:</label><input type="text" name="name" id="nome" onChange={alterarNome}/>
        <label>Salario atual:</label><input type="number" name="payment" id="salario" onChange={alterarSalario}/>
        <label>Reajuste(%)</label><input type="number" name="payment" id="salario" onChange={alterarReajuste}/>
        </div>
        <div class="container2 reddit-mono-fonte">
        Nome: {nome}<br/>
        Salario: {salario}<br/>
        <br/>Novo Salario: {novo_salario}
        </div>

        </div>
      </>
    );
  }
  
  export default SecondExercise;
  