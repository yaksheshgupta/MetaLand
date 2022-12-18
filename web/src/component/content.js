import "../css/content.css"
import { useState } from "react"
import { Modal } from "@mantine/core";
import JsonData from "../data"
import Buy from "./buy";

export function Content() {
    return (
        <>
            <div style={{ fontSize: "xxx-large", textAlign: "center", color: "whitesmoke", margin: "2rem" }}>
                Content
            </div>
            <div className="content"  >
                <div style={{ fontSize: "xx-large", textAlign: "center", color: "whitesmoke", margin: "2rem" }}>
                    BestSellers!!
                </div>
                <div>
                    {JsonData.product.map(s => {
                        return (
                            <>
                                <Card key={s.disc} {...s} />
                            </>
                        )
                    })}
                </div>
                <div style={{ fontSize: "x-large", textAlign: "center", padding: "2rem", backgroundColor: "grey", margin: "2rem", }}>
                   Sell your Aseests
                    <br />
                    <a href="/sell">
                        <button>
                            Start the process
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
// import { useAccount } from 'wagmi';
export const Card = (s) => {
    const num = (a) => {
        if (a % 2 == 0) {
            return true
        } else {
            return false
        }
    }
    // const { address } = useAccount();
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={true}
                styles={{ modal: { backgroundColor: "rgba(0,0,0,0.8)" } }}
                centered
                fullScreen
                padding={0}
            >
                <Buy {...s} />
            </Modal>
            <div className="content-flex" style={{ margin: "2rem" }}>
                <div style={{ fontSize: "xx-large", textAlign: "center", padding: "2rem" }}>
                    {s.name}
                </div>
                <div className="grid-content">
                    <div className="grid-content-inside">
                        <div style={{ fontSize: "medium", textAlign: "center" }}>
                            <big>Discription-</big> {s.disc}
                        </div>
                        <div style={{ fontSize: "medium", textAlign: "center" }}>
                            <big>Price-</big> <underline>{s.price} Eth</underline>
                        </div>
                        <button id="invest_btn" onClick={() => setOpened(true)} >Buy Now</button>
                    </div>
                    <div className="grid-content-inside">
                    <img src={s.img} alt="yes" />
                        <a href="https://go.echo3d.co/SHSB"><button>See 3d Model</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}
