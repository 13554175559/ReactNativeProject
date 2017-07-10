import React, { Component} from 'React';
import {
StyleSheet,
Text,
View,
Image
} from 'react-native';

export class RightNavigationItem extends Component {
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

