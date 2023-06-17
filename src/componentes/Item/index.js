import './Item.css'

const Item = ({nome, imagem, componente, corDeFundo}) => {
    return(
        <div className='item'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={`imagem de ${nome}`} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{componente}</h5>
            </div>
        </div>
    )
}

export default Item