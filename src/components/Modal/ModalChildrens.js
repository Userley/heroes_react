import React from 'react';
import Modal from './Modal';
import '../../styles/ModalDeleteHeroe.css';

function ModalChildrens(props) {
    return (
        <Modal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal} raiz={props.raiz} type={props.type}>
            <div className="ModalDeleteHeroe">
                {props.type === 'Delete' && (
                    <div>
                        <h3>¿Estás seguro?</h3>
                        <p>Estás apunto de eliminar un pesonaje.</p>
                        <div>
                            <button className="btn btn-danger" onClick={props.onDeleteHero}>Aceptar</button>
                            <button className="btn btn-secondary ml-2" onClick={props.onCloseModal}>Cancelar</button>
                        </div>
                    </div>
                )}
                {props.type === 'Edit' && (
                    <div>
                        <p>Se ha editado exitosamente.</p>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={props.raiz}>Aceptar</button>
                        </div>
                    </div>
                )}
                {props.type === 'Create' && (
                    <div>
                        <p>Se ha guardado exitosamente.</p>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={props.raiz}>Aceptar</button>

                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
}

export default ModalChildrens;