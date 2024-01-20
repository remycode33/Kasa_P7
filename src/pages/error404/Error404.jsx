import './error404.scss'
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"

function Error404() {

    return(
        <div className="errorPage">
            <Header />
            <h2>404</h2>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <Link  to='/'>
                <div>Retourner sur la page d’accueil</div>
            </Link> 
            <Footer/>  
        </div>
    )

}

export default Error404