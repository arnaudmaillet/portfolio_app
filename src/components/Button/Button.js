import React from 'react'
import { Button } from '@material-ui/core'

import "./Button.scss";

const CustomButton = ({text, icon}) => {
    return (
        <Button 
            className='my_custom_btn'
            endIcon={
                icon ? (
                    <div className='my_custom_btn_icon'>{icon}</div>
                ) : (
                    null
                )
            }>
            <span className='my_custom_btn_text'>{text}</span>
        </Button>
    )
}

export default CustomButton
