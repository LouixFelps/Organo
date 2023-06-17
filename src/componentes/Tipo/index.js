import Item from "../Item"
import "./Tipo.css"

const Tipo = (props) => {
    return(
        (props.itens.length > 0) ?<section className="tipo" style={{ backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className="itens">
            {props.itens.map(item => <Item corDeFundo={props.corSecundaria} key={item.nome} nome={item.nome} componente={item.componente} imagem={item.imagem} />)}
            </div>
        </section>:''
    )
}


export default Tipo