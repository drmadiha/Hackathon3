import Header from "./component/header";
import Header2 from "./component/header2";
import Header3 from "./component/header3";
import Herosection from "./component/herosection";
import Bestproduct from "./component/bestproduct";
import Baneer from "./component/banner";

import Flight from "./component/flight";
import Esentials from "./component/esentials";
import Silp from "./component/silp";
import Gear from "./component/gear";
export default function Home(){
  return(
    <div>
      <Header />
      <Header2/>
      <Header3 />
      <Herosection />
      <Bestproduct />
      <Baneer />
      <Gear />
      <Flight />
      <Esentials />
      <Silp />
      
    </div>
  )
}