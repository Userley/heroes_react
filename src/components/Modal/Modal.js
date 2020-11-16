import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/Modal.css';

function Modal(props) {
    if (!props.modalIsOpen) {
        return null;
    }
    const containerModal = document.getElementById('modal');
    return ReactDOM.createPortal(
        (
            <React.Fragment>
                <div className="modal">
                    <div className="modal-container">
                        {props.type === 'Delete' && (
                            <button className="modal-close-button" onClick={props.onCloseModal}><small>x</small></button>
                        )}
                        {props.children}
                    </div>
                </div>

            </React.Fragment>
        )
        , containerModal);
}

export default Modal;