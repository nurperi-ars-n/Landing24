import './App.css';
import {Nav} from "./Nav";
import {BlockOne} from "./BlockOne";
import {Main} from "./Main";
import {BlockTwo} from "./BlockTwo";
import {Block3} from "./BlockThree";
import {Main1} from "./Main1";
import {Block4} from "./BlockFour";
import {Main2} from "./Main2";
import {Block5} from "./BlockFive";
import {Block6} from "./BlockSix";
import {Block7} from "./BlockSeven";
import {Nav1} from "./Nav1";
export const App = () => {
  return (
    <div className="App">
      <div  className="container">
           <Nav/>
           <BlockOne/>
           <Main/>
           <BlockTwo/>
           <Block3/>
           <Main1/>
           <Block4/>
           <Main2/>
           <Block5/>
           <Block6/>
           <Block7/>
           <Nav1/>
      </div>
    </div>
  );
}


