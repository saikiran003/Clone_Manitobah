import React,{useState,useEffect} from 'react'
import "../Styles/women.css"
import { Link } from 'react-router-dom';

const Products = () => {

    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;
    useEffect(()=>{
        const getProducts = async ()=>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if(componentMounted){
                setData(await response.clone().json())
                setFilter(await response.json());
                setLoading(false)
                console.log(filter)
            }
            return ()=>{
                componentMounted = false;
            }
        };
        getProducts();
    },[])

    const Loading = ()=>{
            return (
                <>
                Loading....
                </>
            )
    }

    const ShowProducts = ()=>{
        return (
            <>
            {filter.map((product)=>{

                return (
                    <div key={product.id}>
                    <img src={product.image} alt={product.title.substring(0,12)}/>
                    <h5>{product.title}</h5>
                    <p>${product.price}</p>
                    <Link to={`/products/${product.id}`} className='button'>Buy Now</Link>
                    </div>
                )

            })}
            </>
        )
    }
  return (
    <div className='Container'>
        {loading ? <Loading/> : <ShowProducts/>}

    </div>
  )
}

export default Products