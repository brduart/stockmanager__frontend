import { ChevronRight } from "lucide-react";
import ProductPic from "../assets/panther.png";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductsCard = ({ id, name, price, quantity, imageUrl }) => {
  return (
    <div className="w-full h-[20%] flex items-center mb-5 rounded-xl p-3 bg-primary">
      <div className="flex flex-1 h-[100%]">
        <div className="flex-1 flex items-center justify-center">
          <Avatar className="w-[70%] h-[100%]">
            <AvatarImage src={`http://localhost:8000${imageUrl}`} />
          </Avatar>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white">{id}</p>
        </div>
      </div>
      <div className="flex-1  h-[100%] flex items-center justify-center">
        <p className="text-white">{name}</p>
      </div>
      <div className="flex flex-1  h-[100%]">
        <div className="flex-1  flex items-center justify-center">
          <p className="text-green-500">{quantity}</p>
        </div>
        <div className="flex-1  flex items-center justify-center">
          <p className="text-green-500">R$ {price}</p>
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
