import "../css/about.css"
export function About() {
    return (
        <>
            <div style={{ fontSize: "xxx-large", textAlign: "center" }}>
                About Us
            </div>
            <div className="about-container">
                <div className="flex-container-about">
                    <img src="/img/yakshesh.jpeg"  alt="img"/>
                    <div className="com">
                        <big>Yakshesh Gupta</big>
                        <br/>
                        <big>Post-</big>Founder & Full Stack dev 
                        <br/>
                        <a href="/"><button>Git Link</button></a>
                    </div>
                </div>
                <div className="flex-container-about">
                <img src="/img/tarun.jpg"  alt="img"/>
                    <div className="com">
                        <big>Aman Krishan</big>
                        <br/>
                        <big>Post-</big>FrontEnd dev
                        <br/>
                        <a href="/"><button>Git Link</button></a>
                    </div>
                </div>
                <div className="flex-container-about">
                <img src="/img/aman.jpeg"  alt="img"/>
                    <div className="com">
                        <big>Tarun Srivastava</big>
                        <br/>
                        <big>Post-</big>App Dev
                        <br/>
                        <a href="/"><button>Git Link</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}