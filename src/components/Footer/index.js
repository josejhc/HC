import './footer.css'

const Footer = () => {
    return<footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
            <div className="redes">

                <strong>¡Síguenos en redes!</strong>
                <a href='https://www.aluracursos.com/'> 
                    <img src="/img/facebook.png" alt="Facebook"/>
                </a>
                <a href='https://www.aluracursos.com/'> 
                    <img src="/img/twitter.png" alt="twitter" />
                </a>
                <a href='https://www.aluracursos.com/'> 
                    <img src="/img/instagram.png" alt="instagram" />
                </a>

            </div>

            <div className ='logo'>
            {/* <img  src='/img/Logo.png' alt='org' />  */}
            </div>
            <strong>&copy;HC copyright </strong>
            
        </footer>
}

export default Footer