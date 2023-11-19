import { ProductType } from 'types';
import Description from '../description'; // Update the relative path as needed



type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {



  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>${ product.currentPrice }</h4>
        </div>
      </div>
      <Description show={true} description={product.description} />
    </section>
  );
};
  
export default Content;
    