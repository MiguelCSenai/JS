import Table from 'react-bootstrap/Table';
import "./Tabela.css";
function Tabela() {

let produto1 = {

    id: 1,
    qtde: 5,
    preco: 10.00,
    total: (produto1.preco * produto1.qtde)

}
let produto2 = {

    id: 2,
    qtde: 3,
    preco: 35.00,
    total: (produto2.preco * produto2.qtde)

}
let produto3 = {

    id: 3,
    qtde: 4,
    preco: 41.00,
    total: (produto3.preco * produto3.qtde)

}
let produtoSomas = {

    qtde: (produto1.qtde+produto2.qtde+produto3.qtde),
    preco: (produto1.preco+produto2.preco+produto3.preco),
    total: (produto1.total+produto2.total+produto3.total)

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
          <th>{produto1.id}</th>
          <td>Produto {produto1.id}</td>
          <td>Categoria {produto1.id}</td>
          <td class="Qt">{produto1.qtde}</td>
          <td class="Qt">R$ {produto1.preco}</td>
          <td class="Qt">R$ {produto1.total}</td>
        </tr>
        <tr>
          <th>{produto2.id}</th>
          <td>Produto {produto2.id}</td>
          <td>Categoria {produto2.id}</td>
          <td class="Qt">{produto2.qtde}</td>
          <td class="Qt">R$ {produto2.preco}</td>
          <td class="Qt">R$ {produto2.total}</td>
        </tr>
        <tr>
          <th>{produto3.id}</th>
          <td>Produto {produto3.id}</td>
          <td>Categoria {produto3.id}</td>
          <td class="Qt">{produto3.qtde}</td>
          <td class="Qt">R$ {produto3.preco}</td>
          <td class="Qt">R$ {produto3.total}</td>
        </tr>

        <tr>

          <td colSpan={3}></td>
          <td class="Qt">{produtoSomas.qtde}</td>
          <td class="Qt">R$ {produtoSomas.preco}</td>
          <td class="Qt">R$ {produtoSomas.total}</td>

        </tr>
      </tbody>
    </Table>

    </div>
        
      </>
    );
  }
  
  export default Tabela;
  