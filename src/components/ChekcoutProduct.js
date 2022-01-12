import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux"
import {addToBasket, removeFromBasket} from '../slices/basketSlice'

function ChekcoutProduct({id, title, price, rating, description, category, image, hasPrime}) {

  const dispatch = useDispatch();

  const addItemToBasket = () => {

    const product = {
      id, 
      title, 
      price, 
      rating, 
      description, 
      category, 
      image,
      hasPrime,
    }
    
    dispatch(addToBasket(product));
    
  };
  const removeItemToBasket = () => {

    
    dispatch(removeFromBasket({id}));
    
  };

  return (
    <div className="grid grid-cols-5">
      <Image 
      src={image}
      height={200}
      width={200}
      objectFit="contain"
      />

      <div className=" col-span-3 mx-5">
        <p>{title}</p>
        <div>
          {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500"/>
          ))}
        </div>
        <p className=" text-xs line-clamp-3 my-2">{description}</p>
        <Currency quantity={price} currency="EUR" />

        {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-10" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
        </div>
        )}

      </div>
      
      <div className="flex flex-col space-y-2 my-auto justify-self-end">

        <button onClick={addItemToBasket} className="mt-auto button">Ajouter au Panier</button>
        <button onClick={removeItemToBasket} className="mt-auto button">Supprimer du Panier</button>
          
      </div>
      
    </div>
  )
}

export default ChekcoutProduct
