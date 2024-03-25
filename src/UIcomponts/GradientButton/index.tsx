import React, { FC } from 'react'
import MagicWand from '../../images/magic-wand.png'
import './styles.css'

interface Props {
    buttonText:string
}

const GradientButton:FC<Props> = ({
    buttonText,
}) => {

    return(
        <button className="btn-donate">
            {buttonText}
            <img className=' w-1/5' src={MagicWand}/>
        </button>
    )
}
export default GradientButton