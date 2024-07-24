import './cuerpo.css'
import Card from '../Productos/productos-user'
import HeroScroll from '../Container/container-user';
import HeroParallaxDemo from '../Parallax/parallax-user';



const Body = () => {
    return (
    
    <div className='productos'>
        
        
            <div className="servicios font-serif text-black dark:text-white" >
                <h1 className="text-3xl  ">
                    <span className=" md:text-[5rem] font-bold leading-none">
                        Servicios<br /> 
                    </span>
                    Grabado y corte en: 
                </h1>

                <Card material="MDF/madera" imagen='/img/materiales/mmadera.png'/>
                <Card material="Acrílico" imagen='/img/materiales/acrilico.png'/>
                <Card material="Cristal" imagen='/img/materiales/cristal.png'/>
                <Card material="Acero" imagen='/img/materiales/acero.png'/>
                <Card material="Cuero" imagen='/img/materiales/cuero.png'/>
                <Card material="Mezclilla" imagen='/img/materiales/mezclilla.png'/>
            </div>
    
        <HeroParallaxDemo/>
        <HeroScroll/>
        
    </div>
)};

export default Body