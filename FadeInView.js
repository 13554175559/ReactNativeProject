import React, { Component} from 'React';
import {
Animated,
StyleSheet,
Text,
View
} from 'react-native';

export class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 250,
                duration: 5000,
            }
        ).start();
    }
    render() {
        let {fadeAnim} = this.state;
        return (
            <Animated.View style={{
                                ...this.props.style,
                                width: fadeAnim, 
                            }}>{this.props.children}</Animated.View>
         );
    }
}