import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Guide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-6 text-center">
          <h1 className="apple-heading">Инструкция по использованию</h1>
          <p className="apple-subheading">
            Всё, что вам нужно знать о Apple Gift Cards
          </p>
        </section>
        
        <section className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="space-y-16">
            <div className="pb-8 border-b border-gray-100">
              <h2 className="text-2xl font-medium mb-6">Как активировать карту</h2>
              <ol className="space-y-6">
                <li className="flex">
                  <span className="text-3xl text-apple-blue font-medium mr-4">1.</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Откройте App Store, iTunes Store или Apple Books</h3>
                    <p className="text-gray-500">
                      На устройстве с iOS или iPadOS откройте одно из этих приложений. На Mac откройте App Store или iTunes.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="text-3xl text-apple-blue font-medium mr-4">2.</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Войдите в свой Apple ID</h3>
                    <p className="text-gray-500">
                      Убедитесь, что вы вошли в учетную запись, к которой хотите добавить средства.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="text-3xl text-apple-blue font-medium mr-4">3.</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Найдите опцию "Погасить подарочную карту или код"</h3>
                    <p className="text-gray-500">
                      В App Store это находится в разделе вашего профиля. В iTunes это в меню "Учетная запись".
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="pb-8 border-b border-gray-100">
              <h2 className="text-2xl font-medium mb-6">Что можно купить с Apple Gift Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Контент и сервисы</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>• Приложения и игры из App Store</li>
                    <li>• Музыка, фильмы и сериалы</li>
                    <li>• Книги в Apple Books</li>
                    <li>• Подписки Apple Music, Apple TV+, Apple Arcade</li>
                    <li>• iCloud+ хранилище</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Ограничения</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>• Нельзя использовать для покупки физических товаров</li>
                    <li>• Нельзя обменять на наличные</li>
                    <li>• Нельзя использовать для покупки других подарочных карт</li>
                    <li>• Карты привязаны к региону выпуска</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Какой срок действия карты?</h3>
                  <p className="text-gray-500">
                    Apple Gift Cards не имеют срока действия и могут быть использованы в любое время.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Можно ли объединить несколько карт?</h3>
                  <p className="text-gray-500">
                    Да, при активации нескольких карт баланс будет суммироваться на вашем Apple ID.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Что делать, если карта не активируется?</h3>
                  <p className="text-gray-500">
                    Обратитесь в нашу службу поддержки или напрямую в Apple Support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guide;
