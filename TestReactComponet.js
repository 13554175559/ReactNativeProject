import React, { Component} from 'React';
import {
AppRegistry,
StyleSheet,
Text,
View,
Button,
Image,
ScrollView,

} from 'react-native';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    _clickButton(i) {
        alert(i)
        // this.setState({ liked: !this.state.liked });
    }

    render(){
       return( 
        <View style={{height:'100%', width:'100%'}}>
        <View style={{height:64,margin:0,backgroundColor:'orange',alignItems:'center'}}><Text>hshshshh</Text></View>
        <ScrollView style={{flex:1,backgroundColor:'#f5f5f5'}}>

            {this.props.items.map((item, i)=>{
                return (
                    <Button onPress={this._clickButton.bind(this,i)} key={i} title = {item}>{item}</Button>
                );
            })}
        </ScrollView>
        <View style={{height:56,backgroundColor:'pink',bottom:0,margin:0}}><Text>hshshshh</Text></View>
    </View>
        );

    }

}
const styles = StyleSheet.create({
    clickText:{
        margin : 100,
    }

})


export default class APP extends Component {
    render(){
        return(
            <TestComponent items={['hahah','sefer','aefaerf']}/>
        );
    }
}