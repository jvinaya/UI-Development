import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import { Component, PureComponent } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import ForwardInputParent from './components/ForwardInputParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';
import ComponentE from './components/ComponentE';
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
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline></Inline> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <PureComp></PureComp> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <Input></Input> */}
      {/* <FocusInput></FocusInput> */}
      {/* <ForwardInputParent></ForwardInputParent> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <ErrorBoundary>
        <Hero heroName='Batman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName='Spiderman'></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName='Joker'></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter name="Vinaya"></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn) => isLoggedIn? 'Vinaya' : 'Guest'}></User> */}
      {/* <CounterTwo>{(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)}</CounterTwo>
      <CounterTwo>{(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>)}</CounterTwo> */}

      <UserProvider value="Vinaya">
        <ComponentC></ComponentC>
        <ComponentF></ComponentF>
        <ComponentE></ComponentE>
      </UserProvider>
      </div>
    );
  }
}

export default App;
