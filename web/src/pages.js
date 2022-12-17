import Footer from "./component/footer";
import {Content,Card} from "./component/content";
import Landing from "./component/Home";
import Navbar from "./component/navbar";
import Form from "./component/form";
import { About } from "./component/about";
export const Home = ()=>{
    return(
        <>
        <Navbar/>
        <Landing/>
        <Content/>
        <About/>
        <Footer/>
        {/* <Card/> */}
        </>
    )
}
export const Frm = ()=>{
    return(
        <>
        <Navbar/>
        <Form/>
        <Footer/>

        </>
    )
}
