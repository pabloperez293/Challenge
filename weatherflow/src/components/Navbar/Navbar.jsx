import React, {useState} from "react";
import styled from "styled-components"
import Menu from "../Menu/MenuBurguer"

function Navbar() {
    // usando hooks
    const [click, setClick] = useState[false]
    console.log(click)
    // cambiando el valor para cuando hacemos clicks
    const handleClick = () =>{
        setClick(!click)
    }
    return(
        <>
        <NavContainer>
            <h2> Flow | Personal</h2>
            <div className={` links ${click ? ` active` : ` `  }` }>
                <a href="/">Flow</a>
                <a href="/">Flow</a>
                <a href="/">Flow</a>
            </div>

            <div className="menu">
                <Menu click={click} handleClick={handleClick}/>               
            </div>

        </NavContainer>
        </>
    )
}

export default Navbar;

const NavContainer = styled.nav`
    h2{
        color: rgb(33,219,170) ;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color:white;
        text-decoration:none;
        margin-right:1rem;
    }
    .link{
        position: absolute;
        top: -700px;
        left: -2000px;
        margin-left: auto;
        margin-right: auto;
        text-aling: center;
        a{
            color: black;
            font-size: 2rem; 
            display:block;
        }
        @media(min-width: 768px){
            position: initial;
            margin:0;
            a{
                font-size:1rem;
                color:white;
                display: inline;
            }
        }
    }
    .links.active{
        width:100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align:center;
        color:;
    }
    .menu{
        @media(min-width: 768px){
            display:none;
        }
    }
`