import Container from "react-bootstrap/esm/Container";
import "./rating.css";
function Rating() {
  return (
    <div className="rating">
      <Container>
        <div className="row gap-3">
          <div className=" offset-1 col-10 mx-auto offset-md-2 col-md-4 mx-md-0 mx-lg-0 offset-lg-2 col-lg-4">
            <h3>PHARMA <br/> PRODUCTS</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae ex ad minus rem odio voluptatem
            </p>
          </div>
          <div className="offset-1 col-10 mx-auto offset-md-2 col-md-4 offset-lg-2 col-lg-4">
            <h3 className=" text-end">RATED BY <br /> EXPERTS</h3>
            <p className=" text-end position-relative ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae ex ad minus rem odio voluptatem
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Rating;
