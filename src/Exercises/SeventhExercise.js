import axios from "axios";
import "./FifthExercise.css"
import { Alert, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function SeventhExercise() {

    let [coin, setCoin] = useState([]);
    let [val, setVal] = useState();
    let [result , setResult] = useState();
    let [convertido, setConvertido] = useState("USD");

    let [status, setStatus] = useState({

        "variant": "",
        "message": "",
        "aviso": "false"

    });
    
    
    function changeNum(val){
        
        setVal(val.target.value);
        
    }

    axios.get('https://economia.awesomeapi.com.br/json/last/'+convertido)
    .then(function (response) {
        setCoin(response.data[convertido+'BRL'].bid);
        
    })
    
    function converter(){
        
        setStatus({
            
            "variant": "success",
            "message": "Convertido!",
            "aviso": "true"
            
        });
        setResult(coin*val)

    }

    function firstSel(selOne){

        setConvertido(selOne.target.value);

    }

    return (
      <>

        <div className="body">

            <div className="container col-sm-4 col-md-6 col-lg-8">

                <div className="card p-5">

                    <InputGroup  className="w-50">

                        <InputGroup.Text>
                        
                        <Form.Select aria-label="Default select example" onChange={firstSel}>
                            <option>-</option>
                            <option value="USD">USD</option>
                            <option value="BTC">BTC</option>
                            <option value="EUR">EUR</option>
                        </Form.Select>
                        
                        </InputGroup.Text>
                        <Form.Control type="number" placeholder="Insira o valor a ser convertido" maxLenght={8} onChange={changeNum}/>

                    </InputGroup>

                    <br/>

                    <Button onClick={converter} variant="dark" className="w-25">Converter {convertido} para BRL</Button>

                </div>

                <Alert className="w-75 mt-3" variant={status.variant} show={status.aviso}>
                                
                    {status.message}
                                
                </Alert>

            </div>

            <Table className="tb2">

                    <tr>

                        <th>{convertido}</th> <td>{val}</td>

                    </tr>
                    <tr>

                        <th>BRL</th> <td>{result}</td>

                    </tr>
                    

                </Table>
      
        </div>
      </>
    );
  }
  
  export default SeventhExercise;
  