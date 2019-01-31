import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/Astart';
import TitleInput from './components/BtitleInput';
import ImpactInput from './components/CimpactInput';
import OptionScreen from './components/DOptionScreen';
import OptionForm from './components/EOptionForm';
import SimpleOptionForm from './components/SimpleOptionForm'
import ComplexOptionForm from './components/ComplexOptionForm'
import Results from './components/FResults';



const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="start" component={StartPage} initial/>
                <Scene key="decsion" component={TitleInput} />
                <Scene key="impact" component={ImpactInput}  />
                <Scene key="options" component={OptionScreen} />
                <Scene key="simpleOption" component={SimpleOptionForm} />
                <Scene key="complexOption" component={ComplexOptionForm} />
                <Scene key="addOption" component={OptionForm} />
                <Scene key="ask" component={Results} />
            </Scene>
        </Router>
    );
};
export default RouterComponent;