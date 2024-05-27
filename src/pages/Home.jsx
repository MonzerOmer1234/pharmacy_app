import Landing from "../components/landing/Landing";
import NewProducts from "../components/new-products/NewProducts";
import PopularProducts from "../components/popular-products/PopularProducts";
import Rating from "../components/rating/Rating";
import Testimonials from "../components/testimonials/Testimonials";
import opinions from "../components/testimonials/opinions";
import Footer from "../components/footer/Footer";
import ContactData from "../components/footer/ContactData";

function Home() {
  return (
    <>
      <Landing />
      <PopularProducts />
      <NewProducts />
      <Testimonials opinions={opinions} />
      <Rating />
      <Footer data={ContactData} />
    </>
  );
}
export default Home;
