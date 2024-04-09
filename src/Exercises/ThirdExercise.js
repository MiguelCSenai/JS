import { useState } from "react";
import "./SecondExercise.css";
import { Button } from "react-bootstrap";

function ThirdExercise() {

    let [clube, setClube] = useState();
    let [win, setWin] = useState();
    let [draw, setDraw] = useState();
    let [pontos, setPontos] = useState();
    if (Number.isNaN(pontos)){
        pontos = 0;
    }
    
    function alterarClube(clube){

        setClube(clube.target.value);

    }

    function alterarWin(win){

        setWin(win.target.value);

    }

    function alterarDraw(draw){

        setDraw(draw.target.value);

    }
    
    /*setPontos(parseInt(win*3)+parseInt(draw.target.value));*/

    function AcaoBotao(){

        setPontos(parseInt(win*3)+parseInt(draw));
        console.log(pontos);

    }

    

    return (
      <>

        <div className="body">

            <h2>Execicio 3</h2>
            <br/>

            <div className="bigcontainer">

                <div class="container reddit-mono-fonte">

                    <label>Clube:</label><input type="text" name="name" id="nome" onChange={alterarClube}/>
                    <label>Vitórias:</label><input type="number" name="payment" id="salario" onChange={alterarWin} disabled={!clube}/>
                    <label>Empates:</label><input type="number" name="payment" id="salario" onChange={alterarDraw} disabled={!win}/>
                    <Button className="primary" onClick={AcaoBotao} disabled={!draw}>Calcular</Button>

                </div>

                <div class="container2 reddit-mono-fonte">
                    Clube: {clube}<br/>
                    Pontos: {pontos}<br/>
                </div>

            </div>


        </div>
      
      </>
    );
  }
  
  export default ThirdExercise;
  