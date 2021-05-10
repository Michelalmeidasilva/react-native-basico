import React, {useState} from 'react';
import { View , Button, Text, } from 'react-native';



/**
 * 
 * As a general rule, use props to configure a component when it renders.
 *  Use state to keep track of any component data that you expect to change over time.
 */

const State = () =>{
   return (
    <View>
       <Cafe></Cafe>
       <MultipleVariables></MultipleVariables>
    </View>
   ); 
}


const Cat = (props) => {
    const [isHungry, setIsHungry, ] = useState(true);
    return (
        <View>
            <Text> 
                Hello i'm {props.name} and i'm {isHungry ? "hungry" : "full" } 
            </Text>
            <Button 
                onPress={()=> {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"} 
            />

        </View>
    );
}


const Cafe = () => {
    return (
        <View>
            <Cat name = "josué"> </Cat>
            <Cat name = "Ferdinando"></Cat>
        </View>
    );
}

const MultipleVariables = () =>{
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    return (
        <View>
            <Text> i'm {age} old </Text>
            <Button 
                onPress={()=> setAge(33)}
                title="change my age"
            >

            </Button>
        </View>
    )
}



export default State;