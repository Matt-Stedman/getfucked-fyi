import React, { useState } from 'react'
import img from "./Settings.png"

function Settings() {
    const size_h = 64
    const [isShown, setIsShown] = useState(false)
    let url = window.location.href
    const [name, setName] = useState("")
    const onChange = (e) => {
        setName(e.target.value);
      };
    console.log(name)

    const getUrl = () => {
        
        const new_url = url + '?name=' + name;
        setIsShown(!isShown)
        window.open(new_url)

      }
  return (
    <>
        <div style={isShown ? {position: "fixed", right:"90px", bottom:"90px", padding:"10px", backgroundColor:"white", borderRadius:"10px"}: {display: "none"}} >
            <div>
                <text>Fucker: </text>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    width={"90px"}
                    onChange={ onChange }
                />
            </div>
            <button style={{
                background: "#e7e7e7",
                border: "none",
                padding: "5px 8px",
                borderRadius: "5px",
                marginTop:5}} onClick={() => getUrl()}>Open</button>
          </div>
        <img src={img} height={size_h} onClick={() => setIsShown(!isShown)} width={size_h} style={ { position: 'fixed', bottom: "18px", right: "90px"}} alt="Settings button"/>
    </>
  )
}

export default Settings