
import './ErrorModal.css'
import React from 'react';
import { ReactDOM } from 'react';
import Button from './Button';

const Backdrop= props=>{
    return <div className='backdrop' onClick={props.confirm} />
} ;

const ModalOverlay = props=>{
    return (
    <div className='modal'>
    <header className="header">
        <h2>{props.title}</h2>
    </header>
    <div className="content">
        <p>{props.message}</p>
    </div>
    <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
    </div>
    )

};

const ErrorModal =props=>{
    return (
    <React.Fragment>
    {ReactDOM.createPortal( 
        <Backdrop onConfirm={props.onConfirm}/>,
    document.getElementById('backdrop-root')
    )}
    
    {ReactDOM.createPortal(
    <ModalOverlay
        title= {props.title}
        message= {props.message}
        onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
    )}
    </React.Fragment>
    );
    }
    export default ErrorModal;