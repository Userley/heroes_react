import React from 'react';
import HeroeForm from '../components/Heroe/HeroeForm';
import HeroePreview from '../components/Heroe/HeroePreview';
import LoaderPage from '../components/Loader/LoaderPage';
import api from '../utils/api';

export default class HeroeEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'Edit',
            heroeId: props.match.params.heroeId,
            loading: false,
            error: null,
            form: {
                Company: '',
                Name: '',
                Movie: '',
                PhotoUrl: '',
            },
        };
    }

    componentDidMount() {
        this.getDataHeroes();
    }

    getDataHeroes = async () => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            const dataheroe = await api.heroes.getHeroe(this.state.heroeId);

            this.setState({
                loading: false,
                form: dataheroe,
                error: null
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render() {
        if (this.state.loading) {
            return <LoaderPage />;
        }
        return (
            <div className="container">
                <div className="row">
                    <HeroeForm
                        onChangeInput={this.handleChange}
                        formValues={this.state.form}
                        onSave={this.handleEditHeroe}
                        onBack={this.handleGoBack}
                        errorForm={this.state.error}
                        modalIsOpen={this.state.modalIsOpen}
                        type={this.state.type}
                        raiz={this.handleGoRaiz}
                    />
                    <HeroePreview
                        company={this.state.form.Company || 'COMPANY NAME'}
                        name={this.state.form.Name || 'HEROE NAME'}
                        movie={this.state.form.Movie || 'MOVIE NAME'}
                        photoUrl={
                            this.state.form.PhotoUrl ||
                            'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
                        }
                    />
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleGoRaiz = () => {
        this.setState({ modalIsOpen: false });
        this.props.history.push('/');
    };

    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleEditHeroe = async () => {
        try {
            await api.heroes.updateHeroe(this.state.heroeId, this.state.form);
            this.setState({ loading: false, error: null, modalIsOpen: true});
            //this.props.history.push('/');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }
}
