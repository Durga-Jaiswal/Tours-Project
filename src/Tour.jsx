import {useState} from 'react';
const Tour = ({id,image, name, price,info, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="tour-div">
           <img src={image} alt={name}/>
           <div className="tour-info">
                <h4>{name}</h4>
                <h3>${price}</h3>
           </div>
           <p>{readMore?info:`${info.substring(0,200)}...`}
           <button className='readMoreBtn' onClick={()=> {return setReadMore(!readMore)}}>{readMore?"show less": "read more"}</button>
           </p>
           <button className="btn" onClick={() => removeTour(id)}>Not Interested</button>
           <div className="bottom-border"></div>
        </div>
    )
}
export default Tour;