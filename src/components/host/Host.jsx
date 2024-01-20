import './host.scss'

export default function Host({name, picture}) { 
    

    return(
        <div className="host-container">
            <div className="name">
               <p>{name.split(' ')[0]}</p>
               <p>{name.split(' ')[1]}</p>
            </div>
            <div className="picture">
                <img src={picture} alt={`profil de ${name}`}/>
            </div>
        </div>
    )
}