import React from 'react';
import { Link } from 'react-router-dom';
import ModalChildrens from '../Modal/ModalChildrens';


function HeroeDetailHtml(props) {
    return (
        <div className="container">
            <div className="col-12">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-danger">
                            {props.heroe.Company}
                        </strong>
                        <h3 className="mb-0">{props.heroe.Name}</h3>
                        <div className="mb-1 text-muted">{props.heroe.Movie}</div>
                        <div>
                            <br />
                            <Link to={`/heroe/${props.heroe.id}/edit`} className="btn btn-warning">Editar</Link>
                            <button onClick={props.onOpenModal} className="btn btn-danger ml-1">Eliminar</button>

                            <ModalChildrens 
                            modalIsOpen={props.modalIsOpen}
                            onCloseModal={props.onCloseModal}
                            onDeleteHero={props.onDeleteHero}
                            type={props.type}
                            raiz={props.handleGoRaiz} />
                        </div>
                    </div>

                    <div className="col-auto d-none d-lg-block">
                        <img
                            src={props.heroe.PhotoUrl}
                            className="bd-placeholder-img"
                            width="200"
                            height="250"
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 text-left">

            </div>
        </div>
    );
}

export default HeroeDetailHtml;