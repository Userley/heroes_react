import { useState } from "react";
import React from 'react';
import HeroeForm from '../components/Heroe/HeroeForm';
import HeroePreview from '../components/Heroe/HeroePreview';
import LoaderPage from '../components/Loader/LoaderPage';
import { navigate } from "@reach/router";
// import api from '../utils/api';

const HeroeNew = () => {

  const [OpenModal, setOpenModal] = useState(false);
  const [LoadingState, setLoadingState] = useState(false);
  const [ErrorState, setErrorState] = useState(null);
  const [HeroesState, setHeroesState] = useState({
    heroes:
    {
      Company: '',
      Name: '',
      Movie: '',
      PhotoUrl: '',
    }
  });

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     type: 'Create',
  //     vacio: false,
  //     loading: false,
  //     error: null,
  //     form: {
  //       Company: '',
  //       Name: '',
  //       Movie: '',
  //       PhotoUrl: '',
  //     },
  //   };
  // }


  if (LoadingState) {
    return <LoaderPage />;
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="row">
        <HeroeForm
          //onChangeInput={this.handleChange}
          formValues={HeroesState}
          onBack={handleGoBack}
          //onSave={this.handleCreateHeroe}
          errorForm={ErrorState}
          //vacio={this.state.vacio}
          modalIsOpen={OpenModal}
        //type={this.state.type}
        //raiz={this.handleGoRaiz}

        />
        <HeroePreview
          company={HeroesState.heroes.Company || 'COMPANY NAME'}
          name={HeroesState.heroes.Name || 'HEROE NAME'}
          movie={HeroesState.heroes.Movie || 'MOVIE NAME'}
          photoUrl={HeroesState.heroes.PhotoUrl || 'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'}
        />
      </div>
    </div>
  );



  // render() {
  //   if (this.state.loading) {
  //     return <LoaderPage />;
  //   }
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <HeroeForm
  //           onChangeInput={this.handleChange}
  //           formValues={this.state.form}
  //           onBack={this.handleGoBack}
  //           onSave={this.handleCreateHeroe}
  //           errorForm={this.state.error}
  //           vacio={this.state.vacio}
  //           modalIsOpen={this.state.modalIsOpen}
  //           type={this.state.type}
  //           raiz={this.handleGoRaiz}

  //         />
  //         <HeroePreview
  //           company={this.state.form.Company || 'COMPANY NAME'}
  //           name={this.state.form.Name || 'HEROE NAME'}
  //           movie={this.state.form.Movie || 'MOVIE NAME'}
  //           photoUrl={
  //             this.state.form.PhotoUrl ||
  //             'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
  //           }
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  // handleCreateHeroe = async () => {
  //   let state = false;

  //   try {

  //     Object.values(this.state.form).forEach(element => {
  //       if (element === '') {
  //         state = true;
  //       }

  //     });

  //     if (state) {
  //       this.setState({ loading: false, error: null, vacio: state });

  //     } else {
  //       this.setState({ loading: true, error: null });
  //       await api.heroes.createHeroe(this.state.form);
  //       this.setState({ loading: false, error: null, vacio: state, modalIsOpen: true });
  //       //this.props.history.push('/');
  //     }

  //   } catch (error) {
  //     this.setState({ loading: false, error: error, vacio: state });
  //   }
  // };

  // handleChange = (e) => {
  //   let state = false;
  //   Object.values(this.state.form).forEach(element => {
  //     if (element === '') {
  //       state = true;
  //     }
  //   });

  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //     vacio: state,
  //   });
  // };

  // handleGoBack = () => {
  //   this.props.history.goBack();
  // };

  // handleGoRaiz = () => {
  //   this.setState({ modalIsOpen: false });
  //   this.props.history.push('/');
  // };
}


export default HeroeNew;