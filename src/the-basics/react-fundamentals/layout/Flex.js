import React from 'react'
import { StyleSheet, Text, View , Image, ScrollView} from "react-native";
/**
 *  A component can specify the layout of its children using the Flexbox algorithm.
 *  Flexbox is designed to provide a consistent layout on different screen sizes.
 */

/**
 * You will normally use a combination of flexDirection,
 * alignItems, and justifyContent to achieve the right layout.
 */
/**
 * In the following example, the red, yellow, and green views are all children in the
 * container view that has flex: 1 set. The red view uses flex: 1 , the yellow view uses flex: 2,
 * and the green view uses flex: 3 . 1+2+3 = 6, which means that 
 * the red view will get 1/6 of the space, the yellow 2/6 of the space, and the green 3/6 of the space.
 * 
 */
const Flex = () => {
    return (
        // <SafeAreaView >
        <ScrollView style = {styles.container}>
            <View >    
                <Ireland></Ireland>
                <Netherlands></Netherlands>
                <Spain></Spain>
            
            </View>
        </ScrollView>
        // </SafeAreaView >

    );
};

const Ireland = ()=>{
    return (
    <View  style={{
        alignSelf: 'center',
        }}>
        <Text style={styles.titleFlag}>Irlanda</Text>
        <View style= {styles.flagVertical}>
            <View style={{ flex: 1, backgroundColor: "green" }} />
            <View style={{ flex: 1, backgroundColor: "white" }} />
            <View style={{ flex: 1, backgroundColor: "orange" }} />
        
        </View>
    </View>
    );
}
const Spain = () =>{
    return (
        <View style={{
            alignSelf:"center"
        }}>
            <Text style={styles.titleFlag}>Espanha</Text>
            <View style= {[styles.flagHorizontal]}> 
                <View style={{ flex: 1, backgroundColor: "crimson" }} />
                <View style={{ flex: 1, backgroundColor: "yellow" }} >
            <Image style={ styles.responsiveImage} source={require('./Spain.png')} />

                </View>
                <View style={{ flex: 1, backgroundColor: "crimson" }} />
            </View>
        </View>
    )
}
const Netherlands = ()=>{
    return  (
        <View style={{
            alignSelf: 'center',
        }}>
            <Text style={styles.titleFlag}>Holanda</Text>
            <View style= {[styles.flagHorizontal]}> 
                <View style={{ flex: 1, backgroundColor: "crimson" }} />
                <View style={{ flex: 1, backgroundColor: "white" }} />
                <View style={{ flex: 1, backgroundColor: "blue" }} />
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create( {
    flagHorizontal:{
        height: 160,
        width: 200,
        borderWidth:  0.5,
        borderColor: "grey",
        //enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around')	
        flexDirection: "column",
    },    
    flagVertical:{
        height: 160,
        width: 200,
        borderWidth:  0.5,
        borderColor: "grey",
        //enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around')	
        flexDirection: "row",

    },
    responsiveImage: {
        width: '40%',
        height: '60%',
        aspectRatio: 200 / 200,
        marginLeft:20,
        marginTop: 10
        // Without height undefined it won't work
        // figure out your image aspect ratio
    },
    titleFlag:{
        fontSize: 18,
        fontFamily: "Cochin",
        marginTop: 10,

    },
    container:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    }
});

export default Flex;