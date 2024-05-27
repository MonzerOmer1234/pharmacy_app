
import Container from 'react-bootstrap/esm/Container';
import './popular-products.css'
import Products from './Products'

function PopularProducts(){
 


    return <>
    <div className="popular-products">
    <h1 className=" fw-bold fs-2 text-center">Popular Products</h1>
    <Container>
        <div className="row popular">
            {Products.map((product , index) => <div data={index=== 0 || index === 5 ? "Sale":null} key={product.id} className=' col-12  col-md-6 mx-md-0 col-lg-4 mx-lg-0 mb-4 products'>
                <img src={product.src} alt={`product-${index + 1}`} />
                <div className=' text-center '>
                <p>{product.name}</p>
                {product.price}
                </div>
            </div>)}
        </div>
    </Container>
    <button style={{margin : "auto"}}>VIEW ALL PRODUCTS</button>

    </div>
   
    
    </>
}
export default PopularProducts;