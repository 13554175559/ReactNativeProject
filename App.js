import React, { Component} from 'React';
import { StyleSheet, Text, View } from 'react-native';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  componentDidMount(){
        alert("blink 默认属性是"+JSON.stringify(this.props))
  }
  render() {

    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Greeting extends React.Component {

testFunc(){
  setInterval(()=>{this.setState((previousState, props)=>{return {"statusKey1":"哈哈哈哈"}})},500)
}

  render() {
    console.log('hshhshsh')
  return (<View>
     <Text >Hello, {this.props.name}</Text>
     <Blink name= {this.props}/>
     </View>);
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Greeting name = 'hahhahah'/>
        <Blink sex = '女'/>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
