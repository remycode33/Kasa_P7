import './slideshow.scss'
import chevron_left from '../../assets/chevron_carousel_left.png'
import chevron_right from '../../assets/chevron_carousel_right.png'

import {useState} from 'react'

function Slideshow({id, annonce}) {
    
    const [index, updateIndex] = useState(0)
    
    
    const nextPicture = () => {
        if(index=== (annonce.pictures.length - 1)) { updateIndex(0)} else{updateIndex( index + 1)}
    }

    const prevPicture = () => {
       if(index=== 0) {updateIndex( annonce.pictures.length - 1)} else {updateIndex( index -1)}
    }

    return(
        <section className='slideshow'>
            <img key={id+"-pic"} className='picture' src={`${annonce.pictures[index]}`} alt={annonce.title} />
            <img className={annonce.pictures.length === 1?'chevron chevron-left hidden':'chevron chevron-left'} src={chevron_left} alt={'previous'} onClick={ () => {prevPicture()}} />
            <img className={annonce.pictures.length === 1?'chevron chevron-right hidden':'chevron chevron-right'} src={chevron_right} alt={'next'} onClick={ () => {nextPicture()}} />
            <span>{annonce.pictures.length>1? `${index+1}/${annonce.pictures.length}`:null}</span>
        </section>
    )
}

export default Slideshow