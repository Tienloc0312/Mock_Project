import { FC } from 'react';
import Banner from './Banner';
import FeatureProduct from './FeatureProduct';
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListPost } from '../store/product/actions';
import { ProductType } from '../types/product.type';

const Landing: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.post.data);

  useEffect(() => {
    dispatch(getListPost());
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className='d-flex flex-column bg-white py-4'>
        <div className='d-flex justify-content-center'>
        </div>
      </div>
      <div className='container pb-5 px-lg-5'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5'>
          {data &&
            data.map((movie: ProductType) => (
              <div key={movie.id}>
                <FeatureProduct movie={movie} />
              </div>
            ))}
        </div>
      </div>
      <div className='d-flex flex-column bg-white py-4'>
        <div className='d-flex justify-content-center'>
        </div>
      </div>
    </>
  );
};

export default Landing;
