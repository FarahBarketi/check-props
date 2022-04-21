
const GetsData  = ({el}) => {  
     
    const showAlert=()=> alert (` user : ${el.fullName}`); 
    return (
        <div className="Name">
            <h1 className='profil'>MyProfil</h1>
            <h2 className="name">FullName :{el.fullName}</h2> 
            <h2 className="bio">Bio :{el.Bio}</h2>
            <h2 className="prof">Profession :{el.Profession}</h2>
            {showAlert()}
             </div>
    );
     
};
export default GetsData ;