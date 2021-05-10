import React from 'react'
import {Text, View} from 'react-native';


const Props = ()=>{
    return (
        <View>
            <Cafe name = "café de leite" color="brown"></Cafe>
            <Cafe name = "capuccino" color="brown"></Cafe>
            <Cafe name = "café preto" color="black"></Cafe>
        </View>
    );

}


const Cafe = (props)=>{
    return (
    <View>    
        <Text style={{color:props.color, fontSize:24}}>  {props.name}    </Text>
    </View>
    )
}

export default Props;




