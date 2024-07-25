import { ChevronRight } from "lucide-react";
import ProductPic from "../assets/panther.png";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductsCard = () => {
  return (
    <div className="w-full h-[20%] flex items-center mb-5 rounded-xl p-3 bg-primary">
      <div className="flex flex-1 h-[100%]">
        <div className="flex-1 flex items-center justify-center">
          <Avatar className="w-[60%] h-[100%]">
            <AvatarImage src={ProductPic} />
          </Avatar>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white">6546879</p>
        </div>
      </div>
      <div className="flex-1  h-[100%] flex items-center justify-center">
        <p className="text-white">Chaveiro Pantera Negra</p>
      </div>
      <div className="flex flex-1  h-[100%]">
        <div className="flex-1  flex items-center justify-center">
          <p className="text-green-500">50</p>
        </div>
        <div className="flex-1  flex items-center justify-center">
          <p className="text-green-500">R$ 35.00</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Link to="/">
            <Button className="bg-slate-700">
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
