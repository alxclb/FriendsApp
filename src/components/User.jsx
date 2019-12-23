import React from "react";

const User = props => {
  let {data} = props;
 let {handleClick} = props;
  return (
    <button className = "userdata" onClick={handleClick} friends={data.friends} style={{border:"1px solid black", cursor: "pointer", outlineColor:"red"}}>
      <label className="id">ID:{data.id}   </label>
      <p >{data.firstName} {data.surname}</p><br/>
      <p>Age {data.age}</p>
      <p>Gender {data.gender}</p>
    </button>
  );
};
export { User };
