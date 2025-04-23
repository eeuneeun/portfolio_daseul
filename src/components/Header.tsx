import React from 'react'

type Props = {
  isMenuOpen : boolean;
      setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
  
}

function Header({isMenuOpen, setIsMenuOpen}: Props) {
  
  return (
    <header id="header">
    <a href="index.html" className="logo"><strong>DaSeul</strong> <span>by Code</span></a>
    <nav>
        <a href="#menu" onClick={()=>setIsMenuOpen(true)}>Menu</a>
    </nav>
</header>
  )
}

export default Header