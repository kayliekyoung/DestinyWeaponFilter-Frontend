import { lightBlue } from '@mui/material/colors'
import React from 'react'

function listElement(props) {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px", alignItems: "center"}}>
      <div style={{width: "96px", height: "96px", marginRight: "10px"}}>
        <img src={props.item.icon} />
      </div>
        
      <div>
        <h3>
          {props.item.name}
        </h3>
        <h4>{props.item.weapon_type}</h4>
        {props.item.element === 1 && <h4>Kinetic</h4>}
        {props.item.element === 2 && <h4 style={{ color: "lightblue" }}>Arc</h4>}
        {props.item.element === 3 && <h4 style={{ color: "orange" }}>Solar</h4>}
        {props.item.element === 4 && <h4 style={{ color: "purple" }}>Void</h4>}
        {props.item.element === 6 && <h4 style={{ color: "navy" }}>Stasis</h4>}
        {props.item.element === 7 && <h4 style={{ color: "green" }}>Strand</h4>}
        {(props.item.weapon_type === "Fusion Rifle" || props.item.weapon_type === "Linear Fusion Rifle") && <h4>Charge Time: {props.item.speed}</h4>}
        {props.item.weapon_type === "Combat Bow" && <h4>Draw Time: {props.item.speed}</h4>}
        {(props.item.weapon_type != "Fusion Rifle" || props.item.weapon_type != "Linear Fusion Rifle" ||
          props.item.weapon_type != "Combat Bow") && <h4>RPM: {props.item.speed}</h4>}
      </div>


    </div>
  )
}

export default listElement