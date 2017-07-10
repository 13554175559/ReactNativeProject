import React, { Component} from 'React';
import {
StyleSheet,
Text,
View,
TouchableWithoutFeedback,
Image
} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    top:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        height:64,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#e6e6e6'
    },
    content:{
        backgroundColor : '#f5f5f5',
    }
    ,
    bottom : {
        borderTopColor:'#e6e6e6',
        borderTopWidth:1,
        flexDirection:'row',
        height:50,
        backgroundColor: 'white',
        justifyContent: 'space-around',
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

class RightNavigationItem extends Component {
    render(){
        content = null
        navigatorView = {content}
        switch (this.props.fatherValue.selectedIndex) {
            case 0:
                content= <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:15,marginRight:10,width:100}}>
                            <Image style ={{width:26,height : 26,marginRight:6}} source={require('./images/baoquan.png')}></Image>
                            <Image style ={{width:26,height : 26}} source={require('./images/bianbian.png')}></Image>
                        </View>
                break;
            case 1:
                content= <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:15,marginRight:10,width:100}}>
                            <Image style ={{width:26,height : 26}} source={require('./images/biequ.png')}></Image>
                        </View>
                break;
            case 2:
                content= <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:15,marginRight:10,width:100}}>
                            <Image style ={{width:26,height : 26}} source={require('./images/bishi.png')}></Image>
                        </View>
                break
        }
        return(
            content
        );
    }
}

export default class ParentElemet extends Component {
    constructor(props){
        super(props)
        this.state= {
            navigationTitle: "工作台",
            selectedIndex : 0
        }
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
        this.setState(previousState => {
            return {navigationTitle:title,selectedIndex:selected}
        });
    }   
    render() {
        return (
        <View style={styles.container}>
            <View style= {styles.top}>
                <View style= {styles.leftNaviItem}><View style = {styles.avatar}></View></View>
                <View ><Text style={{fontSize:18,marginTop:20,fontWeight:'bold',marginLeft:15}}>{this.state.navigationTitle}</Text></View>
                <RightNavigationItem style={styles.rightNaviItem} fatherValue = {this.state}></RightNavigationItem>
             </View>
            <View style={styles.content}>
            </View>
            <View style = {styles.bottom}>
                <TouchableWithoutFeedback id = 'hahha' onPress={() => this._onPressButton(0)} >
                    <View style={styles.consoles} ><ConsoleItem  name = '工作台' id = '工作台' itemIndex = {0} fatherValue = {this.state}/></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this._onPressButton(1)}>
                    <View style={styles.consoles} ><ConsoleItem  name = '企信' id = '企信' itemIndex = {1} fatherValue = {this.state}/></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this._onPressButton(2)}>
                    <View style={styles.consoles}><ConsoleItem  name = '分享' id = '分享' itemIndex = {2} fatherValue = {this.state}/></View>
                </TouchableWithoutFeedback>
            </View>
        </View>
     );
    }

}


