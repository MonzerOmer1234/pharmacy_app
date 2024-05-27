import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import product1 from '../../assets/product_01.png';
import product2 from '../../assets/product_02.png';
import product3 from '../../assets/product_03.png';
import product4 from '../../assets/product_04.png';
import './new-products.css'


function NewProducts(){


    return <>
    <h1 className=' text-center'>New products</h1>
    <OwlCarousel className='owl-theme' autoplay items="2" loop  nav dots>
    <div className='item'>
        <img src= {product1} alt="product-1" />
    </div>
    <div className='item'>
        <img src= {product2} alt="product-2" />
    </div>
    <div className='item'>
        <img src= {product3} alt="product-3" />
    </div>
    <div className='item'>
        <img src= {product4} alt="product-4" />
    </div>
   
   
</OwlCarousel>;
    
    
    </>
}
export default NewProducts;