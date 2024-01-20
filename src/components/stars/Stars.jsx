import './stars.scss'

export default function Stars({rating}) {
// on veut créer un tb de 5 etoile avec soit etoile rouge soit etoile grise

    let listStars = []

    function fillListStars() {

        for(let i=1; i<=5; i++) {

                (i<= rating)? listStars.push("#FF6060") : listStars.push("#E3E3E3");
            
        }
        return listStars
    }

    fillListStars()

    return(
        <div className="stars">
           {listStars.map( (etoile,index) => {
            return (
                <svg key={etoile+"-"+index} className="grey" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={listStars[index]}/>
                </svg>   
            )
           })}
        </div>
    )
}


/* <svg className="grey" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
</svg> */