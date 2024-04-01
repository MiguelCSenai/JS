import Table from 'react-bootstrap/Table';
import "./Tabela.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function Tabela() {
    let id_produto_1 = 1;
    let id_produto_2 = 2;
    let id_produto_3 = 3;
    
    let [qtde_1, setQtd1] = useState (5);
    let [qtde_2, setQtd2] = useState (4);
    let [qtde_3, setQtd3] = useState (3);
    let qtde_soma = (qtde_1+qtde_2+qtde_3);
    
    
    let preco_1 = 10;
    let preco_2 = 35;
    let preco_3 = 41;
    let preco_soma = (preco_1 + preco_2 + preco_3);
    
    let total_1 = (preco_1 * qtde_1);
    let total_2 = (preco_2 * qtde_2);
    let total_3 = (preco_3 * qtde_3);
    let total_soma = (total_1+total_2+total_3);

    function BtnQtd1(){

        setQtd1(qtde_1 + 1);

    }
    function BtnQtd2(){

        setQtd2(qtde_2 + 1);

    }
    function BtnQtd3(){

        setQtd3(qtde_3 + 1);

    }
    function BtnSubQtd1(){

        setQtd1(qtde_1 - 1);

    }
    function BtnSubQtd2(){

        setQtd2(qtde_2 - 1);

    }
    function BtnSubQtd3(){

        setQtd3(qtde_3 - 1);

    }

    return (
      <>
      <div class="containerTB">
        <Table striped bordered hover variant='dark'>
      <thead>

        <tr>

            <th colSpan={7} className='text-center'>Vendas</th>

        </tr>
        
      </thead>
      <tbody>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Categoria</th>
          <th class="Qt">Qtde</th>
          <th class="Qt">Preço Unitário</th>
          <th class="Qt">Total</th>
        </tr>
        <tr>
          <th>{id_produto_1}</th>
          <td>Produto {id_produto_1}</td>
          <td>Categoria {id_produto_1}</td>
          <td class="Qt">{qtde_1}</td>
          <td class="Qt">R$ {preco_1},00</td>
          <td class="Qt">R$ {total_1},00</td>
        </tr>
        <tr>
          <th>{id_produto_2}</th>
          <td>Produto {id_produto_2}</td>
          <td>Categoria {id_produto_2}</td>
          <td class="Qt">{qtde_2}</td>
          <td class="Qt">R$ {preco_2},00</td>
          <td class="Qt">R$ {total_2},00</td>
        </tr>
        <tr>
          <th>{id_produto_3}</th>
          <td>Produto {id_produto_3}</td>
          <td>Categoria {id_produto_3}</td>
          <td class="Qt">{qtde_3}</td>
          <td class="Qt">R$ {preco_3},00</td>
          <td class="Qt">R$ {total_3},00</td>
        </tr>

        <tr>

          <td colSpan={3}></td>
          <td class="Qt">{qtde_soma}</td>
          <td class="Qt">R$ {preco_soma},00</td>
          <td class="Qt">R$ {total_soma},00</td>

        </tr>
      </tbody>
    </Table>


    <div class="containerBtn">
        <Button variant="secondary" onClick={BtnQtd1}>Aumentar Quantidade do {id_produto_1}° Produto</Button>{' '}
        <Button variant="secondary" onClick={BtnQtd2}>Aumentar Quantidade do {id_produto_2}° Produto</Button>{' '}
        <Button variant="secondary" onClick={BtnQtd3}>Aumentar Quantidade do {id_produto_3}° Produto</Button>{' '}
        <br/><br/>
        <Button variant="secondary" onClick={BtnSubQtd1}>Diminuir Quantidade do {id_produto_1}° Produto</Button>{' '}
        <Button variant="secondary" onClick={BtnSubQtd2}>Diminuir Quantidade do {id_produto_2}° Produto</Button>{' '}
        <Button variant="secondary" onClick={BtnSubQtd3}>Diminuir Quantidade do {id_produto_3}° Produto</Button>{' '}

    </div>

    </div>
        
      </>
    );
  }
  
  export default Tabela;
  