import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { optionsFetch } from '../actions/OptionActions';
import ListItem from './ListItem';
import { Button, CardSection } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class OptionInput extends Component {
    onButtonPress() {
        Actions.addOption();
    }  

    // componentWillMount() {
    //     this.props.optionsFetch();
    //     this.createDataSource(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ options }) {
    //     const ds = new ListView.DataSource({
    //       rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    
    //     this.dataSource = ds.cloneWithRows(options);
    //   }

    // renderRow(option) {
    //     return <ListItem option={option} />;
    // }

    render() {
        return (
          <View>
            {/* <ListView 
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            /> */}
            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                 Add Option
              </Button>
            </CardSection>
          </View>
        );
      }
    }

    // const mapStateToProps = state
    // => {
    //     const options = _.map(state.employees, (val, uid));
    //       return { ...val, uid }
    //     };
      
   export default OptionInput;