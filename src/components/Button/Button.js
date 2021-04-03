import React from 'react'
import { Button } from '@material-ui/core'

import "./Button.scss";

const CustomButton = ({ text, icon, width, textDisplay, isDownload, href, justifyText }) => {

    return (
        <>
            {isDownload ?
                (<Button
                    href={href}
                    download
                    className='my_custom_btn'
                    style={{ width: width }}
                    endIcon={
                        icon ? (
                            <div className='my_custom_btn_icon'>{icon}</div>
                        ) : (
                            null
                        )
                    }>
                    <div
                        className='my_custom_btn_text'
                        style={{ display: textDisplay, justifyContent: justifyText }}>
                        {text}</div>
                </Button>)
                :
                (<Button
                    className='my_custom_btn'
                    href={href}
                    target='_blank'
                    style={{ width: width }}
                    endIcon={
                        icon ? (
                            <div className='my_custom_btn_icon'>{icon}</div>
                        ) : (
                            null
                        )
                    }>
                    <div
                        className='my_custom_btn_text'
                        style={{ display: textDisplay, justifyContent: justifyText}}>
                        {text}</div>
                </Button>)
            }       
        </>
    )
}

export default CustomButton
