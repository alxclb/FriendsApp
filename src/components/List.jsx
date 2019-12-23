import React from "react";
import { User } from "./User";
import { useState } from "react";

const List = props => {
  let { data } = props;
  //console.log(data);

  const [directFriends, setDirectFriends] = useState([]);
  const [friendsOfFriends, setfriendsOfFriends] = useState([]);
  const [suggestedFriends, setSuggestedFriends] = useState([]);

  const handleClick = e => {
    //Prijatelji kliknute osobe
    let x = e.target.getAttribute("friends");
    x != null ? x.split(",") : (x = false);
    if (x === false) return;

    //Direktni prijatelji
    let dFriends = data.filter(el => x.includes(el.id));
    setDirectFriends(dFriends);
    console.log(dFriends);

    //Prijatelji prijatelja
    let fFriends;
    for (let element of dFriends) {
      let friends = element.friends;
      fFriends = data.filter(el => friends.includes(el.id));
    }

    fFriends = fFriends.filter(x => !dFriends.includes(x)); //izbacuje direktne prijatelje
    setfriendsOfFriends(fFriends);

    //Preporuceni prijatelji
    let sFriends = fFriends.filter(x => dFriends.includes(x));
    sFriends = fFriends.filter(x => x.friends.length > 1);
    setSuggestedFriends(sFriends);
  };

  let list = data.map(element => {
    return <User className="users" data={element} handleClick={handleClick} />;
  });

  let displayDFriends = directFriends.map(element => {
    return (
      <User className="dfriends" data={element} handleClick={handleClick} />
    );
  });
  let displayFFriends = friendsOfFriends.map(element => {
    return (
      <User className="ffriends" data={element} handleClick={handleClick} />
    );
  });
  let displaySFriends = suggestedFriends.map(element => {
    return (
      <User className="sfriends" data={element} handleClick={handleClick} />
    );
  });

  return (
    <div className="list">
      <div className="item">
        <ul>
          <h4>All Persons</h4>
          {list}
        </ul>
      </div>
      <div className="dfriends">
        <ul>
          <h4>Direct Friends</h4>
          {displayDFriends}
        </ul>
      </div>
      <div className="ffriends">
        <ul>
          <h4>Friends of Friends</h4>
          {displayFFriends}
        </ul>
      </div>
      <div className="sfriends">
        <ul>
          <h4>Suggested Friends</h4>
          {displaySFriends}
        </ul>
      </div>
    </div>
  );
};

export { List };
