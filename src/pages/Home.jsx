import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

  // eslint-disable-next-line
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } 
    catch (error) {
      console.log(error);
      setPosts([]);
    }
 
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])
  

  return (
    <div>
      {
        loading ? (
          <div className='min-h-[85vh] flex flex-col items-center justify-center'>
            <Spinner />
          </div>
        ) : posts.length > 0 ? (
          <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 md:space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-4 md:p-2 mb-4'>
            {
              posts.map((post) => (
                <Product key={post.id} post={post}/>)
              )
            }
          </div>
        ) : (
          <div className='min-h-[90vh] flex flex-col items-center justify-center'>
            <p>No Data Found</p>  
          </div>
        )
      }
    </div>
  );
}

export default Home