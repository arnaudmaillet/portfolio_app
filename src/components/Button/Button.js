import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

import "./Button.scss";

const style = makeStyles(theme => ({
    color: {
        color: theme.palette.info.light
    }
}))

const CustomButton = ({ text, icon, width, color, outlined, textDisplay, justifyText, isDownload, href, onClick}) => {
    const classes = style()
    return (
        <>
            {isDownload ?
                (<Button
                    onClick={onClick}
                    variant={outlined ? 'outlined' : 'contained'}
                    color={color}
                    href={href}
                    download
                    className='my_custom_btn'
                    style={{ width: width }}
                    endIcon={
                        icon ? (
                            <div className={outlined ? 'my_custom_btn_icon' : ['my_custom_btn_icon', classes.color].join(' ')}>{icon}</div>
                        ) : (
                            null
                        )
                    }>
                    <div
                        className={['my_custom_btn_text', classes.color].join(' ')}
                        style={{ display: textDisplay, justifyContent: justifyText }}>
                        {text}</div>
                </Button>)
                :
                (<Button
                    onClick={onClick}
                    variant={outlined ? 'outlined' : 'contained'}
                    color={color}
                    className='my_custom_btn'
                    href={href}
                    target='_blank'
                    style={{ width: width }}
                    endIcon={
                        icon ? (
                            <div className={outlined ? 'my_custom_btn_icon' : ['my_custom_btn_icon', classes.color].join(' ')}>{icon}</div>
                        ) : (
                            null
                        )
                    }>
                    <div
                        className={['my_custom_btn_text', classes.color].join(' ')}
                        style={{ display: textDisplay, justifyContent: justifyText}}>
                        {text}</div>
                </Button>)
            }       
        </>
    )
}

export default CustomButton
