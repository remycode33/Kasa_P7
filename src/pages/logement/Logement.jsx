import './logement.scss'
import Slideshow from '../../components/slideshow/Slideshow'
import Header from '../../components/header/Header'
import Error404 from '../error404/Error404'
import Collapse from '../../components/collapse/Collapse'
import Stars from '../../components/stars/Stars'
import datas from '../../data/data'
import Host from '../../components/host/Host'
import Tag from '../../components/tag/Tag'
import Footer from "../../components/footer/Footer"
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Logement() {

    //on récupère un obj comprenant les paramètres dont "id" :
    const params = useParams().id
    
    const [id, updateId] = useState(params)
    
    const annonce = datas.find( item =>  item.id === id )


    useEffect( () => {   
        updateId(params)
    }, [params])
    
// gestion des cas si l'annonce existe OU non :
    if( annonce !== undefined) {
    return(
        <div className='container-logement'>
            <Header />
            <main>
                <Slideshow id={id} annonce={annonce} />
                <div className="box-left">
                    <div className="titles">
                        <h2>{annonce.title}</h2>
                        <h3>{annonce.location}</h3>
                    </div>
                    <Tag className="tag" tags={annonce.tags} />
                </div>
                <div className="box-right">
                    <Host name={annonce.host.name} picture={annonce.host.picture} />
                    <Stars rating={annonce.rating}/>
                </div>
                <Collapse className='collapse collapse_content' title="Description" content={annonce.description} />
                <Collapse className='collapse collapse_content' title="Équipements" content={annonce.equipments} />
            </main>
            <Footer/>
        </div>
    )} return( <Error404 />)
}

export default Logement