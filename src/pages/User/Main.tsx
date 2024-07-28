import ProductsCard from "@/components/ProductsCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useGetProductsQuery } from "@/redux/api/products";

const Main = () => {
  const { data, error, isLoading } = useGetProductsQuery("");
  console.log(data);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className=" w-[20%] h-[100%] flex flex-col" id="filter_search">
          <div className="h-[20%] flex items-center justify-center flex-col">
            <h1 className="text-green-500">Bem vindo(a)</h1>
            <p className="text-green-500 text-2xl font-bold"></p>
          </div>
          <div className=" flex-1 flex flex-col ">
            <div className="text-white h-[10%] flex items-center justify-center p-2">
              <Input className="mx-1 rounded-2xl" type="text" placeholder="Pesquisar produto" />
              <Button type="submit" className="text-black bg-white hover:bg-green-500 hover:text-white">
                Pesquisar
              </Button>
            </div>
            <div className="text-white flex-1  flex flex-col items-center justify-center ">
              <ul className=" flex items-center justify-evenly flex-col w-full h-[60%] ">
                <li className="flex items-center font-bold">
                  Chaveiros <Checkbox id="terms" className="size-5 border border-white mx-5" />
                </li>
                <li className="flex items-center font-bold">
                  Chaveiros <Checkbox id="terms" className="size-5 border border-white mx-5" />
                </li>
                <li className="flex items-center font-bold">
                  Chaveiros <Checkbox id="terms" className="size-5 border border-white mx-5" />
                </li>
                <li className="flex items-center font-bold">
                  Chaveiros <Checkbox id="terms" className="size-5 border border-white mx-5" />
                </li>
                <li className="flex items-center font-bold">
                  Chaveiros <Checkbox id="terms" className="size-5 border border-white mx-5" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex-1 h-[100%] px-5 py-5 flex-col overflow-y-auto" id="products_info">
          {data && data.map((i) => <ProductsCard key={i._id} id={i._id} price={i.price} quantity={i.quantity} imageUrl={i.imageUrl} name={i.name} />)}
        </div>
      </div>
    </>
  );
};

export default Main;
