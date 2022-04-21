import { Data } from './Profile/Data';
import Acc from './Profile/Acc';
import Photo from './Profile/Photo';


function App() {
  
  return (
    <div className="App">
      <Acc Data={Data}/>
      <Photo/>
    </div>
  );
}

export default App;