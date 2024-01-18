import React, { useEffect, useState } from "react";

const Data = () => {
    const [users, setUsers] = useState('')
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data)=>{ 
            data.users[0].address.number = "usa"
            return setUsers(data.users[0].address)
        })
      }, []);
      
      console.log(users)

  return (
    <div className="text-center">
        {/* {users.map((user)=> (
            <div className="flex flex-row justify-center gap-4" key={user.id}>
            <p> {user.id}</p>
            <p> {user.firstName}</p>   
            <p> {user.lastName}</p>   
            </div>
        ))} */}
        {users.address}

        {users.number}
    </div>
  );
};

export default Data;
