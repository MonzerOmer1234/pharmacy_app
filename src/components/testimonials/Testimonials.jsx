import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../new-products/new-products.css";
import "./testimonials.css";
import Container from "react-bootstrap/esm/Container";
function Testimonials({ opinions }) {
  return (
    <>
    <Container>
      <h1 className=" text-center mb-5">Testimonials</h1>
      <OwlCarousel className="owl-theme" autoplay items="2" loop nav dots>
        {opinions.map((opinion, index) => (
          <div key={opinion.id} className="item opinion">
            <div>
              <img src={opinion.src} alt={`opinion-${index + 1}`} />
            </div>

            <blockquote>{`"${opinion.paragraph}" `}</blockquote>
            <span className="author">{opinion.author}</span>
          </div>
        ))}
      </OwlCarousel>
      </Container>
    </>
  );
}
export default Testimonials;
