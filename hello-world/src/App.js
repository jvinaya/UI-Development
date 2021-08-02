import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Greet name='Vinaya' place='Kannur'><p>This is Vinaya Children</p></Greet>
      <Greet name='Shobha' place='Kannur'><button>Action</button></Greet>
      <Greet name='Darshan' place='Kannur'></Greet>
      <Greet name='Jaya' place='Kannur'></Greet>
      <Greet name='Daaki' place='Kannur'></Greet>

      <Welcome name='Vinaya' place='Kannur'><p>This is Vinaya Children</p></Welcome>
      <Welcome name='Shobha' place='Kannur'><button>Action</button></Welcome>
      <Welcome name='Darshan' place='Kannur'></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Greet name='Daaki' place='Kannur'></Greet>
      <Welcome name='Darshan' place='Kannur'></Welcome> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      <UserGreeting></UserGreeting>
      </div>
    );
  }
}

export default App;
