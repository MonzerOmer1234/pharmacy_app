import Container from "react-bootstrap/esm/Container";
import "./footer.css";
import { FaHeart } from "react-icons/fa";

function Footer({ data }) {
  const links = ["Supplements", "Vitamins", "Diet & Nutrition", "Tea & Coffee"];

  return (
    <div className=" footer mt-5">
      <Container>
        <div className="row">
          <div className="col-12 mx-auto col-lg-4 mx-lg-0">
            <h1 className="mb-4">About Us</h1>
            <p style={{ color: "#8c92a0", lineHeight: "1.6" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </p>
          </div>
          <div className="col-12 mx-auto col-lg-4 mx-lg-0">
            <h1>Quick Links</h1>
            <ul
              className=" list-unstyled "
              style={{ color: "#8c92a0", marginTop: "30px" }}
            >
              {links.map((link) => (
                <li key={link} className="mb-4">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 mx-auto col-lg-4 mx-lg-0">
            <h1>Contact Info</h1>

            {data.map((info) => (
              <div
                key={info.id}
                className=" d-flex w-100 mb-4 mt-3"
              >
                <span className="icon" style={{marginRight : '15px'}}>{info.icon}</span>
                <p style={{color : '#8c92a0'}}>{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <p className=" text-center mt-5">Copyright &copy; 2024 All rights reserved This template is made with <FaHeart/> by <span>Colorlib</span></p>
    </div>
  );
}

export default Footer;
