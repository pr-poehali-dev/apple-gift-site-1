import { Button } from "@/components/ui/button";

export interface GiftCardProps {
  amount: number;
  image: string;
  description: string;
}

const GiftCard = ({ amount, image, description }: GiftCardProps) => {
  return (
    <div className="apple-card animate-fade-in">
      <div className="p-6 flex flex-col items-center">
        <div className="w-full h-48 mb-6 flex items-center justify-center">
          <img 
            src={image} 
            alt={`Apple Gift Card ${amount} ₽`} 
            className="h-full object-contain"
          />
        </div>
        
        <h3 className="text-2xl font-medium text-center mb-2">
          {amount.toLocaleString('ru-RU')} ₽
        </h3>
        
        <p className="text-gray-500 text-center mb-6">
          {description}
        </p>
        
        <Button className="w-full bg-apple-blue hover:bg-apple-blue/90">
          Купить
        </Button>
      </div>
    </div>
  );
};

export default GiftCard;
