import "./teste.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';


function FifthExercise() {

    let [produto, setProduto] = useState();
    let [preco, setPreco] = useState();
    let [novo_preco, setNovo_preco] = useState();
    let [aviso, setAviso] = useState(false);

    if (Number.isNaN(novo_preco)){
        setNovo_preco("Não informado");
    }


    function alterarProduto(produto){

        setProduto(produto.target.value);

    }

    function alterarPreco(preco){

        setPreco(preco.target.value);

    }

    function AcaoBotao(){

        setNovo_preco(parseFloat(preco)+(parseFloat(preco)*(5/100)));
        setAviso(true);

    }

    function AcaoReset(){

        
        setAviso(false);

    }

    return (
      <>

          <div className="body">

            <div className="card">

                    <div className="cardHeader">

                        Exercicio 5

                    </div>
                    <div className="cardBody">

                    <form>

                        <Form.Group as={Row} className="mb-4 mt-4" controlId="formPlaintextPassword">
                            
                            <div className="col-sm-12 col-md-4 col-lg-4"md={{offset: 0}}>
                                <Form.Label column md={{offset: 0}}>
                                    Produto
                                </Form.Label>
                                <Form.Control type="text" placeholder="Produto" maxLenght={50} onChange={alterarProduto}/>
                            </div>

                            <div className="col-sm-12 col-md-2 col-lg-2"md={{offset: 0}}>
                            <Form.Label column sm="6" md={{offset: 0}}>
                                Preço
                            </Form.Label>
                                <Form.Control type="number" placeholder="Preço" step="0.1" onChange={alterarPreco}/>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 me-5 btn">
                                <Button column className="primary mt-4" onClick={AcaoBotao}>Acréscimo 5%</Button>
                            </div>

                            <div className="col-sm-12 col-md-1 col-lg-1 me-5 btn">
                                <Button type="reset" column className="outline-danger mt-4" onClick={AcaoReset}>Resetar</Button>
                            </div>


                        </Form.Group>

                    </form>

                    </div>

                </div>
                            <Alert className="w-75 mt-3"key="primary" variant="primary" show={aviso}>
                                <b>Produto:</b> {produto}<br/>
                                <b>Novo Preço:</b> {novo_preco}
                                
                            </Alert>
      
          </div>
      </>
    );
  }
  
  export default FifthExercise;