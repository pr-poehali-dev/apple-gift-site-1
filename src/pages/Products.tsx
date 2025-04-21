import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";

const Products = () => {
  const giftCards = [
    {
      amount: 1000,
      image: "/placeholder.svg",
      description: "Идеально для покупки приложений, игр и небольших покупок."
    },
    {
      amount: 2500,
      image: "/placeholder.svg",
      description: "Отлично подходит для подписок, музыки и фильмов."
    },
    {
      amount: 5000,
      image: "/placeholder.svg",
      description: "Максимальная свобода выбора для настоящих фанатов Apple."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-6 text-center">
          <h1 className="apple-heading">Apple Gift Cards</h1>
          <p className="apple-subheading">
            Выберите номинал подарочной карты, который подходит именно вам
          </p>
        </section>
        
        <section className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card, index) => (
              <GiftCard 
                key={index}
                amount={card.amount}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-medium mb-6 text-center">Как активировать карту?</h2>
            <p className="text-center text-gray-500 max-w-2xl mx-auto">
              После покупки вы получите код активации на электронную почту. 
              Инструкция по активации прилагается. Для более подробной информации 
              посетите раздел <a href="/guide" className="text-apple-blue hover:underline">Инструкция</a>.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
