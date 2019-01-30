import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartPage from './components/Astart';
import TitleInput from './components/BtitleInput';
import ImpactInput from './components/CimpactInput';
import OptionScreen from './components/DOptionScreen';
import OptionForm from './components/EOptionForm';



const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="start" component={StartPage} title="PET ME!!!" initial/>
                <Scene key="decsion" component={TitleInput} title="What is troubling you?" />
                <Scene key="impact" component={ImpactInput} title="What is the importance of this?"  />
                <Scene key="options" component={OptionScreen} title="What are your options?" />
                <Scene key="addOption" component={OptionForm} title="So what ya thinking?" />
            </Scene>
        </Router>
    );
};
export default RouterComponent;