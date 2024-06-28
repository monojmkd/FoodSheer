import React from "react";
import person1 from "../../assets/person (1).png";
import person2 from "../../assets/person (2).png";
import person3 from "../../assets/person (3).png";
import person4 from "../../assets/person (4).png";

const VecPerson = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <img
        className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36"
        src={person1}
        alt="person1"
      />
      <img
        className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36"
        src={person2}
        alt="person2"
      />
      <img
        className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36"
        src={person3}
        alt="person3"
      />
      <img
        className="w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36"
        src={person4}
        alt="person4"
      />
    </div>
  );
};

export default VecPerson;
