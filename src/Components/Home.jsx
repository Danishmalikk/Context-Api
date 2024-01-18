import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Context'

const Home = () => {
    const navigate = useNavigate()
    const context =  useContext(UserContext)
    const { setfirstName, setlastName} = context
   
  return (
    <div className='text-center'>
      <h1> Practice useContext Hook Here : Sending data from home component to login Component. </h1>
      <input className="border border-black p-2" onChange={(e)=>setfirstName(e.target.value)} type="text" placeholder="firstName" />
      <input className="border border-black p-2" onChange={(e)=>setlastName(e.target.value)} type="text" placeholder="lastName" />
      <button className="border border-black p-2" onClick={()=> navigate('/login')}> Submit </button>
    </div>
  );
};

export default Home;
