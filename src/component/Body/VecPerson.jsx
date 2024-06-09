import React from "react";
import person1 from "../../assets/person (1).png";
import person2 from "../../assets/person (2).png";
import person3 from "../../assets/person (3).png";
import person4 from "../../assets/person (4).png";

const VecPerson = () => {
  return (
    <div className="flex ">
      <img className="w-40 h-40" src={person1} />
      <img className="w-40 h-40" src={person2} />
      <img className="w-40 h-40" src={person3} />
      <img className="w-40 h-40" src={person4} />
    </div>
  );
};

export default VecPerson;
