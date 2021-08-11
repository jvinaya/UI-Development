import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounter1 from './components/ClassCounter1';
import ClassMouse from './components/ClassMouse';
import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounter1 from './components/HookCounter1';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ReducerCounter1 from './components/ReducerCounter1';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounter2></HookCounter2> */}
      {/* <HookCounter3></HookCounter3> */}
      {/* <HookCounter4></HookCounter4> */}
      {/* <ClassCounter1></ClassCounter1> */}
      {/* <HookCounter1></HookCounter1> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <IntervalClassCounter></IntervalClassCounter>
      <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      {/* <UserContext.Provider value={"Vinaya"}>
        <ChannelContext.Provider value={'Codevolution'}>
        <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <ReducerCounter1></ReducerCounter1>
    </div>
  );
}

export default App;
