import React,{useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";


function Toggler() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [activeClass,setActiveClass]=useState('')

    return (
        <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={50}
      />
    )
}

export default Toggler
