import product1 from '../../assets/product_01.png';
import product2 from '../../assets/product_02.png';
import product3 from '../../assets/product_03.png';
import product4 from '../../assets/product_04.png';
import product5 from '../../assets/product_05.png';
import product6 from '../../assets/product_06.png';


const Products = [
  {
    id: 1,
    src: product1,
    name : "Bioderma",
    price : <span><del>95.00 </del> - $55.00</span>
  },
  {
    id: 2,
    src: product2,
    name : "Chanca Piedra",
    price : <span> $70.00</span>
  },
  {
    id: 3,
    src: product3,
    name : "Umcka Cold Care",
    price : <span> $120.00</span>
  },
  {
    id: 4,
    src: product4,
    name : "Cetyl Pure",
    price : <span><del>45.00 </del> - $20.00</span>
  },
  {
    id: 5,
    src: product5,
    name : "CLA Core",
    price : <span> $38.00</span>
  },
  {
    id: 6,
    src: product6,
    name : "Poo Pourri",
    price : <span><del>89.00 </del> - $38.00</span>
  },
];

export default Products;
