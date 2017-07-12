import React, { Component,PropTypes} from 'React';
import {
AppRegistry,
StyleSheet,
Text,
View,
NavigatorIOS,
TouchableHighlight,
TouchableWithoutFeedback,
} from 'react-native';
import {RightNavigationItem} from './NavigationItem'
import {FadeInView} from './FadeInView'

class ConsoleItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected : false
        }
    }
    render(){
        thisStyle = null
            if (this.props.fatherValue.selectedIndex==this.props.itemIndex) {
               thisStyle = styles.consloeTitle 
            } else {
                thisStyle = styles.unConsloeTitle
            }
        return(
            <Text style={thisStyle}> {this.props.name}</Text>
        );
    }
}

export default class NavigatorIOSApp extends Component {
  componentDidMount(){
     
  }
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '工作台',
          translucent:false,
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }
  constructor(props, context) {
    super(props, context);
     this.state= {
            navigationTitle: "工作台",
            selectedIndex : 0
    }
    this._onForward = this._onForward.bind(this);
    this._onBackward = this._onBackward.bind(this);
  }

  _onForward() {

    this.props.navigator.push({
      title: 'Scene ',
      component:MyScene
    })
   
  }

  _onBackward(){
    this.props.navigator.pop();
  }

  _onPressButton(selected) {
         title = ''
         switch (selected) {
            case 0:
                title = '工作台'
                break
            case 1:
                title = '企信'
                break
            case 2:
                title = '分享'
                break
         }
         alert(this.props.navigator)
        this.setState(previousState => {
            return {navigationTitle:title,selectedIndex:selected}
        });
    } 
    _onPressAvatar(){
        alert('msg')
    }
    render() {
        return (
        <Text onClick= {this._onPressAvatar()}>点击事件定义</Text>
     );
    }

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'stretch',
      
    },
    top:{
        height:1,
        backgroundColor:'pink'
    },
    content:{
    backgroundColor:'blue',
    },
    bottom : {
        justifyContent:'space-around',
        flexDirection:'row',
        borderTopColor:'#e6e6e6',
        borderTopWidth:1,
        height:50,
        backgroundColor: 'yellow',
        
    },
    consoles :{
        width: 60,
        height: 50, 
        alignItems:'center',
        justifyContent:'center'
    },
    consloeTitle:{
        fontSize:16,
        color:'#289bf0',
    },
    unConsloeTitle:{
        fontSize:16,
        color:'#999999',
    },
    touch :{
        backgroundColor: '#289bf0'
    },
    leftNaviItem:{
        width :100
    },
    avatar : {
        marginLeft: 14,
        marginTop: 16,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor : 'pink'
    },
    rightNaviItem: {
        width :100,
         marginRight: 14,
        marginTop: 16
    }
})

