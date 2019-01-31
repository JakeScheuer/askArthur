import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/Start';
import TitleInput from './components/TitleInput';
import ImpactInput from './components/ImpactInput';
import OptionScreen from './components/OptionScreen';
import OptionForm from './components/OptionForm';
import Results from './components/Results';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="start" component={StartPage} initial/>
                <Scene key="decsion" component={TitleInput} />
                <Scene key="impact" component={ImpactInput}  />
                <Scene key="options" component={OptionScreen} />
                <Scene key="addOption" component={OptionForm} />
                <Scene key="ask" component={Results} />
            </Scene>
        </Router>
    );
};
export default RouterComponent;