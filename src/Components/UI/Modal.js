import Classes from './Modal.module.css';
import {Fragment} from 'react' ;
import ReactDOM from 'react-dom' ;
import React from 'react';



const Backdrop = props => {
    return <div onClick={props.onClose} className={Classes.backdrop} />
};

const ModalOverlay = props => {
    return <div className={Classes.modal} >
        <div className={Classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays') ;

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} /> , portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
    </Fragment>
};

export default Modal ;