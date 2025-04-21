import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 text-center">
          <h1 className="apple-heading animate-fade-in">
            Apple Gift Card.
            <br />
            Идеальный подарок для любого случая.
          </h1>
          
          <p className="apple-subheading animate-fade-in">
            Дарите уникальные моменты с Apple Gift Card. Пополняйте iTunes, покупайте приложения, 
            игры, музыку, фильмы и многое другое.
          </p>
          
          <div className="mt-10 animate-fade-in">
            <Link to="/products">
              <Button className="bg-apple-blue hover:bg-apple-blue/90 text-white py-6 px-8 rounded-full text-lg">
                Выбрать карту
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-medium text-center mb-12">Почему Apple Gift Card?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">🎵</div>
                <h3 className="text-xl font-medium mb-3">Музыка и фильмы</h3>
                <p className="text-gray-500">Доступ к миллионам треков, фильмов и сериалов в iTunes и Apple Music.</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-medium mb-3">Игры и приложения</h3>
                <p className="text-gray-500">Тысячи игр и приложений в App Store для iPhone, iPad и Mac.</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-xl font-medium mb-3">Идеальный подарок</h3>
                <p className="text-gray-500">Элегантное решение для подарка любому поклоннику Apple.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
