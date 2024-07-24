import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/header-user'
import BodyPrincipal from './components/BodyPrincipal/BodyPrincipal-user';

function App() {
 
  return (
    
    <div className='app'>

      <Header/>   
      <BodyPrincipal/>
      <Footer/>

    </div>

  );
}

export default App;
