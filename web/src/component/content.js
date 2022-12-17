import "../css/content.css"
import { useState } from "react"
import { Modal } from "@mantine/core";
import JsonData from "../data"
export function Content() {
    return (
        <>
            <div className="content">
                {JsonData.product.map(s => {
                    return (
                        <>
                            <Card key={s.disc} {...s} />
                        </>
                    )
                })}
                4gr
            </div>
        </>
    )
}
// import { useAccount } from 'wagmi';
export const Card = (s) => {
    const num=(a)=>{
        if(a%2==0){
            return true
        }else{
            return false
        }
    }
    // const { address } = useAccount();
    const [opened, setOpened] = useState(false);
    return (
        <>
            {/* <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    withCloseButton={false}
                    styles={{ modal: { backgroundColor: "rgba(0,0,0,0.8)" } }}
                    centered
                    fullScreen
                    padding={0}
                    >
                    vyehj
                </Modal> */}
                <div className="content-flex">
                <div className="grid-content">  
                    <div className="grid-content-inside">
                    {s.name}<br/>
                    {s.disc}<br/>
                    {s.name}<br/>
                    {s.name}<br/>
                    {s.name}<br/>
                    </div>
                    <div className="grid-content-inside">
                        <img src={s.img} alt="yes"/>
                    </div>
                </div>
                </div>
        </>
    )
}
