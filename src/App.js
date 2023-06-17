import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tipo from './componentes/Tipo';
import Rodape from './componentes/Rodape';


function App() {
  const [itens, setItens] = useState([])

  const aoNovoItemAdicionado = (item) => {
    debugger
    console.log(item)
    setItens([...itens, item])
  }

  const tipos = [
      {
          nome: 'Hardware',
          corPrimaria: '#D9F7E9',
          corSecundaria: '#57C278'
      },
      {
          nome: 'Software',
          corPrimaria: '#E8F8FF',
          corSecundaria: '#82CFFA'
      },
      {
          nome: 'Perifericos',
          corPrimaria: '#F0F8E2',
          corSecundaria: '#A6D157'
      },
      {
          nome: 'Monitores',
          corPrimaria: '#FDE7E8',
          corSecundaria: '#E06B69'
      },
      {
          nome: 'Video Games',
          corPrimaria: '#FAE9F5',
          corSecundaria: '#DB6EBF'
      },
      {
          nome: 'Rede e Wireless',
          corPrimaria: '#FFF5D9',
          corSecundaria: '#FFBA05'
      },
      {
          nome: 'Cadeiras e Mesas Gamer',
          corPrimaria: '#FFEEDF',
          corSecundaria: '#FF8A29'
      }

  ]


  return (
    <div className="App">
      <Banner />
      <Formulario aoItemCadastrado={item => aoNovoItemAdicionado(item)} tipos={tipos.map(tipo => tipo.nome )} />

      {tipos.map(tipo =>  
        <Tipo  
          key={tipo.nome} 
          nome={tipo.nome} 
          corPrimaria={tipo.corPrimaria} 
          corSecundaria={tipo.corSecundaria}
          itens={itens.filter(item => item.tipo === tipo.nome)} />)
      }

      <Rodape />

    </div>
  );
}

export default App;
