import '../css/navbar.css';
import { Web3Button } from "@web3modal/react";
export default function Navbar() {
    return (
        <>
        <div className="nav">
            <div style={{fontSize:"xx-large"}}>
                MetaLand
            </div>
            <Web3Button/>
        </div>
        </>
    );
}


