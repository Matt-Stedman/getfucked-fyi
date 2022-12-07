import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import img from "./Settings.png"
import img_collapsed from "./Settings_collapsed.png"

export default function Settings() {
  const size_h = 64
  const [isShown, setIsShown] = useState(false)
  const [checked, setChecked] = React.useState(false);
  let url = window.location.href
  const [name, setName] = useState("")
  const onChange = (e) => {
    setName(e.target.value);
  };
  const getUrl = (open = false) => {
    const new_url = url.split("?name=")[0] + '?name=' + name;
    if (open) {
      window.open(new_url)
      console.log("Copied to clipboard.")
    } else {
      navigator.clipboard.writeText(new_url)
      console.log("Copied to clipboard.")
    }
    setChecked(false);

  }
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{}}>

      <img src={checked ? img_collapsed : img} onClick={handleChange} height={size_h} width={size_h} style={{ position: 'fixed', bottom: "18px", right: "90px", cursor: "pointer" }} alt="Settings button" />
      <Grow direction="up" in={checked} mountOnEnter unmountOnExit>
        <div style={{ position: "fixed", right: "90px", bottom: "100px", padding: "10px", backgroundColor: "white", borderRadius: "10px" }} >
          <text>Who should get fucked? </text><br /><br />
          <input
            type="text"
            name="name"
            value={name}
            width={"90px"}
            onChange={onChange}
          />
          <button style={{
            background: "#A7EBCA",
            color: "white",
            border: "none",
            padding: "5px 8px",
            borderRadius: "5px",
            margin: 5,
            cursor: "pointer"
          }} onClick={() => getUrl(true)}>Open</button>
          <button style={{
            background: "#A7EBCA",
            color: "white",
            border: "none",
            padding: "5px 8px",
            borderRadius: "5px",
            margin: 5,
            cursor: "pointer"
          }} onClick={() => getUrl()}>Copy</button>
        </div>
      </Grow>
    </Box>
  );
}