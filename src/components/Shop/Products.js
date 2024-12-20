import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: 1,
  price: 6,
  title: 'My first book by vignesh',
  description: 'This was the first book written by me and published on oct 2019'
},{
  id: 2,
  price: 12,
  title: 'My second book by yuva',
  description: 'This was the first book written by yuva and published on oct 2019'
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(products =>(

              <ProductItem
              key={products.id}
              id={products.id}
                title={products.title}
                price={products.price}
                description={products.description}
              />

        ))}
       
      </ul>
    </section>
  );
};

export default Products;
