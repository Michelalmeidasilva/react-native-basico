


# React Native(RN)
    React Native é a versão do React para o Desenvolvimento Mobile, o RN é uma lib que permite a criação de interfaces para o dispositivo móvel para Android e iOS. Ele é multiplataforma, então podemos escrever o mesmo código para iOS e para Android, e podemos ainda manipular algumas particularidades entre os SO. O React Native pega toda a interface construída e converte para Java e Objective-C, ou seja, você usa os c omponentes nativos do sistema operacional que estiver utilizando.

## METRO
    Como o RN consegue converter o código JS em interface nativa?
    O código Javascript passa para uma ferramenta chamada Metro Bundler (packager) que fica monitorando todo o código javascript e ele pega todo o nosso código, e gera o bundle.js. O Metro Bundler é comparado ao Webpack da Web. O Bundle gerado é repassado para a Bridge, que é a ponte de comunicação entre o código javascript e o código javascript, a Bridge vai transformar o que precisa da interface do bundle para Android e iOS, Java para Objective-C.

# Running

### Rodar uma device virtual android

 *  `npx react-native run-android`
### Rodar o js server
 *  `npx react-native start`


## iniciar um projeto / com vesão predefinida / com template

    npx react-native init AwesomeProject 
    npx react-native init AwesomeProject --version X.XX.X
    npx react-native init AwesomeTSProject --template react-native-template-typescript


# Introduction

## Function components e class components
    React utiliza Functions e classes para criar  componentes, originalmente class components podem ter estado. Mas desde a introdução do React hooks API voce pode adicionar estados em functions componentes.


## VIEW
    -> view is the basic building block of UI:
      -> Some kinds of views can contain other views

## Native Components
    In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components

## CORE COMPONENTS

    React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.

    <View>              --- <div>
    <Text>              --- <p>
    <Image>             --- <img>
    <ScrollView>        --- <div>
    <TextInput>         --- <input type="text">

# React Fundamentals
    React Native runs on React, a popular open source library for building user interfaces with JavaScript. To make the most of React Native, it helps to understand React itself. This section can get you started or can serve as a refresher course.

    We’re going to cover the core concepts behind React:

    components
    JSX
    props
    state

##  JSX
    React and React Native use JSX, a syntax that lets you write elements inside JavaScript like so: <Text>Hello, I am your cat!</Text>. The React docs have a comprehensive guide to JSX you can reference to learn even more. Because JSX is JavaScript, you can use variables inside it. Here you are declaring a name for the cat, name, and embedding it with curly braces inside <Text>.

    Because JSX is included in the React library, it won’t work if you don’t have import React from 'react' at the top of your file!

## Components
    Whatever a function component returns is rendered as a React element.

## Custom-components
   
   - Layout 
    On Android, you usually put your views inside LinearLayout, FrameLayout, RelativeLayout, etc. to define how the view’s children will be arranged on the screen. In React Native, View uses Flexbox for its children’s layout. You can learn more in our guide to layout with Flexbox.

   - Multiple components
    Any component that renders other components is a parent component. Here, Cafe is the parent component and each Cat is a child component.

# layout

    Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. The defaults are different, with flexDirection defaulting to column instead of row, alignContent defaulting to flex-start instead of stretch, flexShrink defaulting to 0 instead of 1, the flex parameter only supporting a single number.

 

## PROPS

    Props is short for “properties.” Props let you customize React components. 
    Most of React Native’s Core Components can be customized with props, too. For example, when using Image, you pass it a prop named source to define what image it shows

## State
    While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

    As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time.

    example with class:
    class Example extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            count: 0
            };
        }

        render() {
            return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                Click me
                </button>
            </div>
            );
        }
    }

    example with hook:

    function Example() {
    // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);
        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        );
    }

## HOOK

    What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.
    -- rules: 

    * Only Call Hooks at the Top Level
    Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

    * Hooks don’t work inside classes. But you can use them instead of writing classes.


    -- ARRAY DESTRUCTURING
    const [ fruit, setfruit] = useState('banana');

    This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

    var fruitStateVariable = useState('banana'); // Returns a pair
    var fruit = fruitStateVariable[0]; // First item in a pair
    var setFruit = fruitStateVariable[1]; // Second item in a pair


    You might’ve noticed that although count is a const, it is seemingly reassignable! What is happening is when a state-setting function like setCount is called, its component will re-render. In this case the Example function will run again—and this time, useState will give us the next value of count.


    ## handling text input 

    TextInput is a Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.

     -- using form 


    
    ## TOUBLESHOOTING