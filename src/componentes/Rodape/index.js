import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape-final'>
            <div className='redes-sociais'>

                <a href='https://www.facebook.com/AluraCursosOnline/?locale=pt_BR'>
                    <img src='/img/fb.png' />
                </a>
                <a href='https://twitter.com/AluraOnline'>
                    <img src='/img/tw.png' />
                </a>
                <a href='https://www.instagram.com/aluraonline/'>
                    <img src='/img/ig.png' />
                </a>

            </div>
            <div className='logo'>
                <img src='/img/logo.png' />
            </div>
            <div className='texto'>
                <h3>Desenvolvido por Alura</h3>
            </div>
        </footer>
    )
}

export default Rodape