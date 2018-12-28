import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/start';
import TitleInput from './components/titleInput';
import ImpactInput from './components/impactInput';
import OptionsInput from './components/optionsInput';
import CreateOption from './components/CreateOption';



const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="start" component={StartPage} title="PET ME!!!" initial/>
                <Scene key="decsion" component={TitleInput} title="What is troubling you?" />
                <Scene key="impact" component={ImpactInput} title="What is the importance of this?"  />
                <Scene key="options" component={OptionsInput} title="What are your options?" />
                <Scene key="addOption" component={CreateOption} title="So what ya thinking?" />
            </Scene>
        </Router>
    );
};
export default RouterComponent;