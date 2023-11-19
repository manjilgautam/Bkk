import ProductItem from './../../product-item';
import { ProductTypeList } from 'types';

type ProductsCarouselType = {
  products: ProductTypeList[];
}

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <div className="swiper-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
        {products.map(item => (
          <div key={item.id} className="swiper-slide"> {/* Keeping the original class name */}
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCarousel;
