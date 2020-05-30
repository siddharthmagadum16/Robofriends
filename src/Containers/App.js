import React from 'react';
import CardList from '../Components/CardList';
// import {Robots} from './Robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';
class App extends React.Component  {
    constructor(){
        super()
        this.state={
            Robots:  [],
            Searchfield:'' 
        }
        // console.log("constructor");
    }  


    componentDidMount(){
        // console.log("check")
        // this.setState({Robots:Robots});
        // console.log ("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users=> {this.setState({Robots: users})})
    }

    OnSearchChange=(event) =>{
        // console.log(event.target.value);
        this.setState({ Searchfield: event.target.value })
        // console.log("OnSearchChange");
    }

    render() {
        const { Robots,Searchfield } = this.state;
        // console.log("render");
        const Robotfriend = Robots.filter(robot=>{
            return  robot.name.toLowerCase().includes(Searchfield.toLowerCase())
        })
        // console.log(Robotfriend);
        return !Robots.length? <h1>Loading</h1>: (
            <div className='tc'>
                <div>
                    <h1  className='heading f1'>Robofriends</h1>
                    <SearchBox SearchChange= {this.OnSearchChange}/>
                </div>
            
                <Scroll>
                    <ErrorBoundary>
                        <CardList Robots={ Robotfriend }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;

/*
Explanation->
Wolfgang is right, there is no magic here. To answer your first question, when we add event-listener 'onChange' in searchBox, we tell the browser to keep an eye on input box. The moment we edit the input box (either we add the character or delete the character), browser triggers the 'onSearchChange' function from input object. This function immediately changes the state (searchField) of the App to current string in the input box. Thanks to the setState() method, React now knows that state of the App component has been changed and hence it calls the render method of the same (App) component. Finally in the render method, we filter the robots based on the this.state.searchField (which is now equal to current string in input box). Once the robot list is filtered, App component returns the updated JSX to the index.js and ReactDOM.render renders it on the screen. The moment we make another edit in the search box, this whole cycle repeats again. This is how robot list is filtered as we type.

One thing to note here is that if we directly change the state (this.state.searchField = 'Foo') instead of using setState({searchField : 'Foo'}) method, React would have no idea that state has been changed and hence won't call render method of the App. Hence, in this case, actual state would have changed but we won't be able to see it. Hence, use of setState() method to change the state is always highly recommended.

I would recommend this tutorial here for anyone struggling with state and life-cycle in react.*/