import React from "react";
import { IconContext } from "react-icons";
import { FaMap } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function IconElements() {
  return (
    <IconContext.Provider
      value={{ style: { fontSize: "30px", color: "rgba(128, 128, 128, 0.5)" } }}
    >
      <li>
        <FaMap />
      </li>
      <li>
        <FaGreaterThan />
      </li>
      <li>
        <FaInfo />
      </li>
      <li>
        <FaQuestionCircle />
      </li>
      <li>
        <FaSignOutAlt />
      </li>
    </IconContext.Provider>
  );
}
