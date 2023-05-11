import React from "react";
import {BsArrow90DegLeft } from "react-icons/bs"; 
import { HiBars3 } from "react-icons/hi2";
import {FaGlassCheers } from "react-icons/fa";
import { MdOutlineAddComment,MdSearch,MdHome } from "react-icons/md";
import { useState } from "react";
import quote from "./assets/quote.jpeg";


function App() {
  const[followingPage,setFollowingPage]=useState(false)
  const [followers, setFollowers] = useState(0);

  
  const addFollowers=() =>  { 
    console.log(followingPage)
    if (followingPage===false) 
    {setFollowers(followers+1)
      setFollowingPage(true)}
      else if (followingPage===true) 
      {setFollowers(followers-1)
        setFollowingPage(false)}};








        const posts = [
          // type:"0" is identified as image and type:1 as text
          {
            id: 1,
            src: quote,
            caption: "Fact",
            type:"0"
          },
          {
            id: 2,
            src: "Some times you forget how awesom you are, so this is your reminder",
            caption: "Truth",
            type:"1"
          },

   
      
        ];





  return (
    <div className="flex flex-col bg-black text-white  ">
    {/* nav bar */}
      <div className="w-full flex flex-row bg-black justify-between fixed items-center ">

        <div className="flex flex-row bg-black" >
          {/* back button */}
          <button className="text-2xl p-3 active:bg-white active:text-black"> <BsArrow90DegLeft /></button>
          {/* App title */}
          <h1 className=" text-3xl p-2 font-signature" > Buddybuzz</h1>
        </div>
        {/* Menu button */}
        <div>
          <button className="text-3xl p-3 active:bg-white active:text-black"> <HiBars3 /></button>
        </div>

      </div>





{/* profile info */}
  <div className="flex flex-col bg-black mt-14 item  lg:items-center justify-around   w-full">
        <div className="   flex flex-row justify-around  pl-4 pr-4 p pt-1  lg:w-3/5 ">
          <img className="w-20 h-20 lg:w-32 lg:h-auto rounded-full" src="heroImage.png" alt="Italian Trulli"/>
        
          <div className=" flex flex-col  h-fit ml-4 items-center ">
            <p className="w-fit  font-bold text-xl" >{"2"}</p>
            <p>Posts</p>
          </div>
          <div className=" flex flex-col  h-fit ml-4 items-center ">
            <p className="w-fit  font-bold text-xl"  >{followers}</p>
            <p>Followers</p>
          </div>
          <div className=" flex flex-col  h-fit ml-4 items-center ">
            <p className="w-fit  font-bold text-xl" >{"0"}</p>
            <p>Following</p>
          </div>

        </div >
        <div className="  flex flex-col p-2 ">
          {/* name of the user */}
          <p className="text-sm font-bold">Debabrata Halder</p>
          {/* bio */}
          <p className="text-sm "> This is my blockchain page</p>
          <div className="flex flex-col items-center m-2">
            {/* follow button */}
            
              {followingPage===false
                ?<button   className=" justify-between bg-sky-700 h-8 w-2/4 rounded-md hover:bg-sky-200 hover:text-black " 
                onClick={addFollowers}>
                  Follow
                </button>
                :<button   className=" justify-between bg-slate-700 h-8 w-2/4 rounded-md hover:bg-slate-300 hover:text-black " 
                onClick={addFollowers}>
                  Unfollow
                </button>
              }
              
             
                        

          </div>
        </div>
  </div>




      {/* posts */}


    <div className="pb-16 " >
    {posts.map(({ id, src, caption,type }) => (
      <div>
        <div className=" flex flex-col  items-center">
          <div className=" flex flex-row items-center p-2  w-full ">
            <img className=" w-auto h-8 rounded-full m-1" src="heroImage.png" alt="Italian Trulli border border-sky-500"/>
            <p className="m-1 ">Debabrata Halder</p>
          </div>
          <hr class="w-8/12 h-px  bg-gray-800 border-0 "></hr>
          
          <div key={id} className="flex flex-col items-center  w-full">
              {type==="0"
                ?<img className=" w-auto  " src={src} alt="Italian Trulli"/>
                :<p className="text-left  p-5">{src}</p>
              }



            <button className=" text-2xl p-4 mt-1 active:bg-amber-100 active:rounded-full active:h-fit active:text-black  hover:text-yellow-300 hover:cursor-pointer w-fit " ><FaGlassCheers/></button>
            <p className=" pl-3 text-xs">Cheered by 0 people</p>
            <p className=" pl-3 font-semibold">{caption}</p>
          </div>
          

        </div>
      </div>
      ))}
    </div>


    {/* bottom nav bar  */}
      <div className="flex flex-row items-center justify-between w-full h-14 bg-black p-4 fixed bottom-0 ">
        <div>
          <img className=" w-8 h-8 rounded-full m-1" src="user1.jpeg" alt="Italian Trulli border border-sky-500"/>
        </div>        
        <div className=" ">
          <button className="text-3xl p-3 active:bg-white active:text-black"> <MdOutlineAddComment/></button>
          <button className="text-3xl p-3 active:bg-white active:text-black"> <MdHome/></button>
          <button className="text-3xl p-3 active:bg-white active:text-black"> <MdSearch/></button>
        </div>
      </div>


</div>

  );
}

export default App;
