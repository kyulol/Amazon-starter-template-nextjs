import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice"
import ChekcoutProduct from "../components/ChekcoutProduct";
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/react";


function Checkout() {

  const items = useSelector(selectItems);

  const total = useSelector(selectTotal);

  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">

        <div className="shadow-sm flex-grow m-5">
          <Image 
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-x-0 bg-white">
            <h1 className="text-3xl border-b pb-4">{items.length === 0 ? "Votre Panier est vide." : 'Votre panier contient:'}</h1>

            {items.map((item, i) =>(
              <ChekcoutProduct 
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        <div className=" flex flex-col p-10 bg-white shadow-md">
          {items.length > 0 &&  (
            <>
              <h2 className=" whitespace-nowrap">Total ({items.length} produits:)&nbsp;
                <span className=" font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>
              <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed'}`}>
                {!session ? 'Connectez-vous pour proceder au paiement.' : 'Proceder au paiement.'}
              </button>
            </>
          )}
        </div>

      </main>
      
    </div>
  )
}

export default Checkout
