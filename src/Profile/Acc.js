import GetsData from "./Profil";

function Acc({Data}) {
    return (
      <div className='Acc'>
        {Data.map((el)=>(<GetsData el={el}/>))}
      </div>
    );
  }
  
  export default Acc;