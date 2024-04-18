import axios from "axios";
import "./FifthExercise.css"
import Form from 'react-bootstrap/Form';
import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

function SixthExercise() {

    let [endereco, setEndereco] = useState([]);

    let [status, setStatus] = useState({

        "variant": "",
        "message": "",
        "aviso": "false"

    });

    function buscarCep(){

        axios.get('https://viacep.com.br/ws/'+cep+'/json/').then(function(response){
            console.log(JSON.stringify(response.data));
            setStatus({

                "variant": "success",
                "message": "CEP valido",
                "aviso": "true"

            });
            setEndereco(response.data);
        }).catch(function(error){

            console.log(error);
            setStatus({

                "variant": "danger",
                "message": "CEP invalido",
                "aviso": "true"

            });

        });

    }

    let [cep, setCep] = useState();

    function changeCep(cep){

        setCep(cep.target.value);

    }

    return (
      <>

          <div className="body">

            <div className="container col-sm-4 col-md-6 col-lg-8">

                <div className="card p-5">

                    <Form.Control type="number" placeholder="Insira seu CEP" maxLenght={8} onChange={changeCep}/>

                    <br/>

                    <Button onClick={buscarCep} variant="dark">Buscar Cep</Button>

                </div>

                <Alert className="w-75 mt-3" variant={status.variant} show={status.aviso}>
                                
                    {status.message}
                                
                </Alert>

                <Table className="tb">

                    <tr>

                        <th>Rua:</th> <td>{endereco.logradouro}</td>

                    </tr>
                    <tr>

                        <th>Bairro:</th> <td>{endereco.bairro}</td>

                    </tr>
                    <tr>

                        <th>Estado:</th> <td>{endereco.uf}</td>

                    </tr>
                    <tr>

                        <th>Cidade:</th> <td>{endereco.localidade}</td>

                    </tr>
                    <tr>

                        <th>DDD:</th> <td>( {endereco.ddd} ) x xxxx-xxxx</td>

                    </tr>

                </Table>
                     
                     
                     
                     
                     

            </div>
      
          </div>
      </>
    );
  }
  
  export default SixthExercise;
  