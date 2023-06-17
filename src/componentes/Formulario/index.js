import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [componente, setComponente] = useState('');
    const [imagem, setImagem] = useState('');
    const [tipo, setTipo] = useState('');

    const limparFormulario = () => {
        setNome('')
        setComponente('')
        setImagem('')
        setTipo('')
    }
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoItemCadastrado({
            nome,
            componente,
            imagem,
            tipo
        })
        limparFormulario()
        
    }
    
    return (
        <section className='secao-form'>
            <form onSubmit={aoSalvar} className='formulario'>
                <h2>Preencha os dados para criar o card do item.</h2>
                <CampoTexto
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                />
                <CampoTexto
                    valor={componente}
                    aoAlterado={valor => setComponente(valor)}
                    obrigatorio={true} label="Componente"
                    placeholder="Digite o componente" 
                 />
                <CampoTexto
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem" 
                 />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Categoria" 
                    itens={props.tipos} 
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />
                <Botao texto="Criar card" />
            </form>
        </section>
    )
}

export default Formulario