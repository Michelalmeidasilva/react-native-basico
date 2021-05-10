import React, {useState} from 'react';
import {View, Text, Form, StyleSheet} from 'react-native';


const FormScreen = ()=> {
    const [name, setName] = useState("");
    return (
        <View>
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name: 
                    <Input type="text" value={this.name} onChange={this.setName}>  </Input>
                </Label>
                <Input type="submit" value={"Submit"} >  </Input>
            </Form>
        </View>
    );
}


export default FormScreen;



