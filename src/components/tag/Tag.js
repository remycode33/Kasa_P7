import './tag.scss'

export default function Tag({tags}) {

    return(
        <div className="tags-container">
           { 
           tags.map( (tag) => {return  <span key={tag} className="tag">{tag}</span>})
           } 
        </div>
    )
}