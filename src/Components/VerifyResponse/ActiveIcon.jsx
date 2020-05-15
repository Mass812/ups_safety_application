import React, {Fragment} from 'react'
import './VerifyResponse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUps } from '@fortawesome/free-brands-svg-icons'


 const ActiveIcon =( )=>{
    return (  
        <Fragment>
        <div className='loader'>
            <div className='inner one' />
            <div className='inner two' />
            <div className='inner three' />
        </div>

        <div className='spinner-container'>
            <FontAwesomeIcon icon={faUps} className='ups-spinner' />
        </div>
    </Fragment>
    )
};
export default ActiveIcon ;