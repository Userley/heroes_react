import React, { useState, useEffect } from 'react';
import HeroeList from '../components/Heroe/HeroeList';
import MessageWarning from '../components/Messages/MessageWarning';
import ButtonNewHero from '../components/Button/ButtonNewHero';
import LoaderHeroes from '../components/Loader/LoaderHeroes';
import api from '../utils/api';

const Heroes = () => {

  const [LoadingState, setLoadingState] = useState(true);
  const [ErrorState, setErrorState] = useState(null);
  const [HeroesState, setHeroesState] = useState(undefined);


  useEffect(() => {
    dataHeroes();
  }, [])

  const dataHeroes = async () => {

    try {
      const data = await api.heroes.listHeroes();
      setLoadingState(false);
      setHeroesState(data);
    } catch (error) {
      setLoadingState(false);
      setErrorState(error);
    }
  };


  if (LoadingState) {
    return (<React.Fragment>
      <ButtonNewHero />
      <br />
      <LoaderHeroes />
    </React.Fragment>);
  }

  if (ErrorState) {

    return (<React.Fragment>
      <MessageWarning message={ErrorState} />

    </React.Fragment>);
  }


  if (!HeroesState || HeroesState.length === 0) {
    return (<React.Fragment>
      <ButtonNewHero />
      <br />
      <MessageWarning message="No existe información." />;
    </React.Fragment>);

}

  console.log(HeroesState);
return (<div>
    <ButtonNewHero />
    <br />
    <HeroeList heroes={HeroesState} />
  </div>);




  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     error: null,
  //     heroes: undefined,
  //   };
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.getDataHeroes();
  //   }, 500);
  // }

  // getDataHeroes = async () => {
  //   this.setState({ loading: true, error: null });
  //   try {
  //     const dataHeroes = await api.heroes.listHeroes();
  //     this.setState({ loading: false, heroes: dataHeroes });
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };

  // render() {
  //   if (this.state.loading) {
  //     return (
  //       <React.Fragment>
  //         <ButtonNewHero />
  //         <br />
  //         <LoaderHeroes />
  //       </React.Fragment>
  //     );
  //   }

  //   if (this.state.error) {
  //     return <MessageWarning message={this.state.error.message} />;
  //   }

  //   if (!this.state.heroes || this.state.heroes.length === 0) {
  //     return (
  //       <div>
  //         <ButtonNewHero />
  //         <br />
  //         <MessageWarning message="No existe información." />;
  //       </div>
  //     );
  //   }

  //   return (
  //     <div>
  //       <ButtonNewHero />
  //       <br />
  //       <HeroeList heroes={this.state.heroes} />
  //     </div>
  //   );
  // }
}

export default Heroes;