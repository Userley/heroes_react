import React, { Component } from 'react';
import LoaderPage from '../components/Loader/LoaderPage';
import HeroeDetailHtml from '../components/Heroe/HeroeDetailHtml';
import api from '../utils/api';

export default class HeroeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'Delete',
            heroeId: props.match.params.heroeId,
            loading: true,
            heroe: undefined,
            error: null,
            modalIsOpen: false
        };
    }


    onOpenModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    onCloseModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    componentDidMount() {
        this.getDataHeroe();
    }

    getDataHeroe = async () => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            const dataheroe = await api.heroes.getHeroe(this.state.heroeId);
            this.setState({
                loading: false,
                heroe: dataheroe,
                error: null
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    };

    handleGoBack = () => {
        this.props.history.goBack();
    };

    deleteHero = async () => {
        try {
            this.setState({ loading: true, error: null });
            await api.heroes.removeHeroe(this.state.heroeId);
            this.props.history.push('/');
            this.setState({ loading: false, error: null });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    handleGoRaiz = () => {
        this.setState({ modalIsOpen: false });
        this.props.history.push('/');
      };

    render() {

        if (this.state.loading) {
            return <LoaderPage></LoaderPage>
        }

        return (
            <HeroeDetailHtml
                heroe={this.state.heroe}
                modalIsOpen={this.state.modalIsOpen}
                onOpenModal={this.onOpenModal}
                onCloseModal={this.onCloseModal}
                onDeleteHero={this.deleteHero}
                modalIsOpen={this.state.modalIsOpen}
                type={this.state.type}
                raiz={this.handleGoRaiz}
                />
        );
    }
}


{/* <div className="btn-group">
<Link to={`/heroe/${props.heroe.id}/edit`} className="btn btn-dark" >Editar</Link>
</div> */}