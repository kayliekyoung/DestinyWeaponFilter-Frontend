import './App.css';
import React, { useState, useEffect } from 'react';
import ListElement from './components/listElement';








function App() {

  const [list, setList] = useState([]);
  const [weaponTypeList, setWeaponType] = useState([]);
  const [elementList, setElement] = useState([]);
  const [filterList, setFilterList] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://destiny-weapon-filter-backend.vercel.app/filter")
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setList(data)
        setFilterList(data)
      })
      console.log(window.location.href)
      window.location.href.includes("code=") && setLoggedIn(true);

  }, [])



  const handleWeaponFilter = (e) => {
    if (!e.target.value) {
      setWeaponType([]);
      setFilterList(list);
    } else {
      if (elementList.length < 1) {
        setWeaponType(list.filter((item) => item.weapon_type == e.target.value));
        setFilterList(list.filter((item) => item.weapon_type == e.target.value));
      } else {
        console.log(elementList)
        setFilterList(elementList.filter((item) => item.weapon_type == e.target.value))
      }
      

      console.log(filterList)
    }
  }



  const handleElementFilter = (e) => {
    if (!e.target.value) {
      setElement([]);
      setFilterList(list);
    } else {
      if (weaponTypeList.length < 1) {
        setElement(list.filter((item) => item.element == e.target.value));
        setFilterList(list.filter((item) => item.element == e.target.value));
      } else {
        setFilterList(weaponTypeList.filter((item) => item.element == e.target.value))
      }
      

      console.log(filterList)
    }
  }




  return (
    <div className="App">
      <header className="App-header">
        <h2>Destiny Weapon Filter (Early Dev Stage)</h2>
        <div className='loginWrapper'>
          <a style={loggedIn ? {pointerEvents: none} : {}} href={`https://www.bungie.net/en/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4&reauth=true`}>{
            loggedIn ? "Logged In" : "Log In"
          }</a>
        </div>
      </header>
      <main>
        <div className='filterWrapper'>
          
            <select name="weapon-type-filter" onChange={handleWeaponFilter}>
              <option value="">Weapon Type</option>
              <option value="Auto Rifle">Auto Rifle</option>
              <option value="Combat Bow">Combat Bow</option>
              <option value="Fusion Rifle">Fusion Rifle</option>
              <option value="Glaive">Glaive</option>
              <option value="Grenade Launcher">Grenade Launcher</option>
              <option value="Hand Cannon">Hand Cannon</option>
              <option value="Linear Fusion Rifle">Linear Fusion Rifle</option>
              <option value="Machine Gun">Machine Gun</option>
              <option value="Pulse Rifle">Pulse Rifle</option>
              <option value="Rocket Launcher">Rocket Launcher</option>
              <option value="Scout Rifle">Scout Rifle</option>
              <option value="Shotgun">Shotgun</option>
              <option value="Sidearm">Sidearm</option>
              <option value="Sniper Rifle">Sniper Rifle</option>
              <option value="Submachine Gun">Submachine Gun</option>
              <option value="Sword">Sword</option>
              <option value="Trace Rifle">Trace Rifle</option>
            </select>
            <select name="element-type-filter" onChange={handleElementFilter}>
              <option value="">Element</option>
              <option value="1">Kinetic</option>
              <option value="2">Arc</option>
              <option value="3">Solar</option>
              <option value="4">Void</option>
              <option value="6">Stasis</option>
              <option value="7">Strand</option>
            </select>
            <select name="speed-filter">
              <option value="">Speed</option>
              <option value="">NON FUNCTIONAL</option>
            </select>
            
          
        </div>
        <div className='listWrapper'>
          {list.length && filterList.map(item => (
            <ListElement
              item={item}
            />
          ))}
        </div>
      </main>


    </div>
  );
}

export default App;
