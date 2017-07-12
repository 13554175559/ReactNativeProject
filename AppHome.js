import React, {Component,PropTypes} from 'React'
import {
  StackNavigator,
} from 'react-navigation';
import {View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Button,
    NavigatorIOS,
} from 'react-native' 

export default class AppHome extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
          <App />  
        );
    }
}

class Navigation extends Component {


    static navigationOptions = {
    title:this.state.navigationTitle,
  }

  constructor(props){
      super(props)
      this.state={
          navigationTitle:'工作台'
      }
  }

    _onPress(index){
        var title = '',
        switch(index) {
            case 0:
                title="工作台"
                break
            case 1:
                title="企信"
                break
            case 2:
                title ='分享'
                break
            case 3:
                title = '通讯录'
                break

        }
        this.setState({navigationTitle:title})
    }
    render(){
        const{navigate} = this.props.navigation
        return(
        <View style = {styles.workConsoleContainer}>
        <View style = {styles.contents}>

        </View>
         <View style={styles.consoleTab}>
            <View style = {styles.tabitem}><TouchableHighlight onPress={this._onPress.bind(0)}><Text style={styles.tabTitle}>工作台</Text></TouchableHighlight></View>
            <View style = {styles.tabitem}><TouchableHighlight onPress={this._onPress.bind(1)}><Text style={styles.tabTitle}>企信</Text></TouchableHighlight></View>
            <View style = {styles.tabitem}><TouchableHighlight onPress={this._onPress.bind(2)}><Text style={styles.tabTitle}>分享</Text></TouchableHighlight></View>
            <View style = {styles.tabitem}><TouchableHighlight onPress={this._onPress.bind(3)}><Text style={styles.tabTitle}>通讯录</Text></TouchableHighlight></View>
         </View>
        </View>
        );
    }

}

class WorkConsole extends Component {

    render(){
        return(
            <View><Button title='企信'/></View>
        );
    }

}

const App = StackNavigator({
    Home:{screen: Navigation},
    profile:{screen:WorkConsole}
})


const styles = StyleSheet.create({
    workConsoleContainer : {
        width:'100%',
        height:'100%',
    },
    contents:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    consoleTab:{
        width:'100%',
        height:56,
        backgroundColor:'white',
        flexDirection:'row',
        justfyContent:'space-around',
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:'#e6e6e6',
    },
    tabitem:{
        flex:1,
        alignItems:'center',
    },
    tabTitle:{
        fontSize:16,
        color:'#289bf0',
    }
    ,

})