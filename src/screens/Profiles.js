import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import "./Profiles.css";
import Nav from "../Nav";

function Profiles() {
  return (
    <div className="profiles">
      <Nav />
      <div className="profiles__body">
        <h1>Manage Profiles:</h1>
        <div className="profiles__container">
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuaZ74EPxcdnvaKzGtRLh00WiJkJpgs01Rg3Y66vrgrNyaKFaUuO0L0g2x26nukbZ1uY&usqp=CAU)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon className="edit" style={{ color: "white" }} />
            <h3>Devansh</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLO7XSN_taND9qG586sXzN9LtnGir6w8TEOmrKcj86fDOLVmv2FlMy5EyEW0pXNx--pE&usqp=CAU)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />

            <h3>Hetarth</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUgno4IrHa488eDArmkQhktmZoQOz-gkYeQ&usqp=CAU)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Rutvi</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVNxpxSBe-RA0h6yaML3_VrTWa_FYaEKxQ2RjWYjske1QPixHcISzO69xN0ayXiApeCk&usqp=CAU)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Ayushi</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://i.imgur.com/LJ9dB0T.png)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Sushant</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
