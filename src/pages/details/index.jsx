import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../api/movies';


function Details()  {
    const [details, setDetails] = useState({});
    const {id}  =useParams();

    useEffect(() => {
        getDetails(id)
            .then(data => setDetails(data));

    },[id])

    function createDetaislSummary(){
        return {__html: details.summary}
    }

    function detailsSummary(){
        return <div dangerouslySetInnerHTML={createDetaislSummary()}/>
    }


    return <div className="details">

        <h1 data-testid='detais-name'>{details.name}</h1>
        <p data-testid='detais-type'><i>{details.type}</i></p>
        <p data-testid='detais-summary'>{detailsSummary()}</p>
    
    </div>
    
    
}

export default Details; 