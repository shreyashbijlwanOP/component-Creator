
let cardDetail;

function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        ComponentCreater
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

function Main() {
    let [heading, setHeading] = React.useState('This is Heading');
    let [imgSrc, setImgSrc] = React.useState("https://images.pexels.com/photos/13033819/pexels-photo-13033819.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");
    let [summary, setSummary] = React.useState(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem aliquam quibusdam consequatur accusantium a nam neque consectetur quisquam maiores voluptatum dolores animi, et earum?');
    let [element, setElemet] = React.useState([]);


    function Heading(event) {
        setHeading(event.target.value);
    }
    function ImgSrc(event) {
        setImgSrc(event.target.value);
    }
    function Summary(event) {
        setSummary(event.target.value);
    }

    function update() {
        let obj = {
            h1: heading,
            src: imgSrc,
            cont: summary

        }
        cardDetail = { ...obj };

        console.log(cardDetail);

        setHeading("");
        setImgSrc("");
        setSummary("");

    }
    function CreateComponet(event) {
        setElemet(element.concat(<Card heading={cardDetail?.h1} imgSrc={cardDetail?.src} summary={cardDetail?.cont} />))
    }
    function ClearComponet() {
        setElemet([]);
    }

    return (
        <main className=" my-5 p-4">
            <h1 className="h1 text-light">This Will Help you React Dyanmic Cards</h1>
            <hr width="70%" className="text-light" />
            <div className="w-100  p-5 pt-0 pb-2">
                <input type="text" className="col-12 p-2 my-2" placeholder="Heading of Componet" name="heading" value={heading} onChange={Heading} />
                <input type="text" className="col-12 p-2 my-2" placeholder="Image Source" name="img" value={imgSrc} onChange={ImgSrc} />
                <textarea className="form-control my-2" name="textBox" id="textBox" cols="150" rows="10" value={summary} onChange={Summary} placeholder="Enter summary Here" ></textarea>
                <button className="btn btn-outline-primary my-3" onClick={update}>Update</button>
                <button className="btn btn-outline-primary my-3 mx-2" onClick={CreateComponet}>Create Componet</button>
                <button className="btn btn-outline-primary my-3 " onClick={ClearComponet}>Clear Componet</button>

                <br />
                <div className="container-fluid">
                <div className="row f-box">
                    {element}
                </div>
                </div>
            </div>
        </main>
    )
}

function Card(props) {


    return (<div className=" p-3 my-2 border border-light mx-lg-4  mx-sm-5   my-4 col-lg-3 col-md-4 col-sm-12 rounded" id="card" >
        <h1 className="text-light ">{props.heading}</h1>
        <hr className="text-light my-3" />
        <img src={props.imgSrc} alt="" width="100%"  />
        <p className="text-light my-3">{props.summary}</p>
    </div>

    )
}

function Footer() {
    return (
        <div className="container-fluid p-3 bg-dark">
            <div className="text-light text-center"> <i class="fa-solid fa-heart bg-red"></i> Made with Love <i class="fa-solid fa-heart bg-red"></i> </div>
        </div>
    )
}
ReactDOM.render(
    <div className="bg-lightdark ">
        <Navbar />
        <Main />
        <Footer />

    </div>,
    document.getElementById('root')
)