import '../css/navbar.css';
import { Web3Button } from "@web3modal/react";
export default function Navbar() {
    return (
        <>
        <div className="nav">
        <img style={{height:"70px",flex:"0"}} src='/img/Group 3.png'/>

            <div style={{fontSize:"xx-large"}}>
                MetaLand
            </div>
            
            <Web3Button/>
        </div>
        </>
    );
}