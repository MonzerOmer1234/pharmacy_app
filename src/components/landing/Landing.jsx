import Container from "react-bootstrap/esm/Container";
import Data from "./data";
import "./landing.css";
function Landing() {
  return (
    <div className="landing">
      <div className="land">
        <p>EFFECTIVE MEDICINE, NEW MEDICINE EVERYDAY</p>
        <h1>WELCOME TO PHARMA</h1>

        <button>SHOP NOW</button>
      </div>
       <Container>
      <div className="site">
          <div
            className="row w-100 flex-wrap align-items-stretch gap-0"
            style={{ height: "200px" }}
          >
            {Data.map((item) => (
              <div key={item.id} className="offset-1 col-11 mx-auto col-md-5  offset-lg-1 col-lg-3  mb-4">
                {item.heading}
                {item.paragraph}
              </div>
            ))}
          </div>
        </div>
    </Container>

    </div>
  );
}
export default Landing;
