import Banner from "@/Components/Banner";
import Products from "@/Components/Products";
import { ProductProps } from "@/type";

interface props  {
  productData :ProductProps
}
export default function Home({productData} :props) {
  console.log(productData);
  return (
   <main> 
    <div className="max-w-screen-2xl mx-auto">
      <Banner/>
      <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-52 z-20 mb-10 ">
      <Products productData= {productData} />
      </div>
    </div>
   </main>
  );
}


//ssr for data fetching
export const getServerSideProps = async() =>{
const res  = await fetch("https://fakestoreapiserver.reactbd.com/tech")
const productData = await res.json();
return{ props :{productData}};
}