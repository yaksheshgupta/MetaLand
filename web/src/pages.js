import {Content,Card} from "./component/content";
import Navbar from "./component/navbar";
import Landing from "./component/home";
import Form from "./component/form";
import { About } from "./component/about";
export const Home = ()=>{
    return(
        <>
        <Navbar/>
        <Landing/>
        <Content/>
        <About/>
        {/* <Card/> */}
        </>
    )
}
export const Frm = ()=>{
    return(
        <>
        <Navbar/>
        <Form/>
        {/* <Landing/> */}

        </>
    )
}