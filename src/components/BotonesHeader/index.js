import './botonHeader.css'

const BotonHeader = (props) => {
    return <li className="nav-pages"><a href={props.url}>{props.titulo}</a></li>
};

    export default BotonHeader