import Footer from "./component/footer";
import {Content,Card} from "./component/content";
import Landing from "./component/Home";
import Navbar from "./component/navbar";

export const Home = ()=>{
    return(
        <>
        <Navbar/>
        <Landing/>
        <Content/>
        <Footer/>
        {/* <Card/> */}
        </>
    )
}

