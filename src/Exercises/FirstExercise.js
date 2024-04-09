import "./SecondExercise.css"

function FirstExercise() {

    let velocidade = 10;
    let distancia = 100;

    let resultado = distancia/velocidade;

    return (
      <>

          <div className="body">

            <h2>Execicio 1</h2>
            <br/>
            
            <div className="bigcontainer">

                <h1>O resultado é {resultado}</h1>

            </div>
      
          </div>
      </>
    );
  }
  
  export default FirstExercise;
  