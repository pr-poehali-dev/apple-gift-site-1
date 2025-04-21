import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Copy, ExternalLink, Sparkles } from "lucide-react";

type StyleOption = {
  title: string;
  description: string;
  ending: string;
  styleTitle: string;
  styleDescription: string;
  styleExample: string;
  color: string;
};

const styleOptions: StyleOption[] = [
  {
    title: "Немного серьёзного",
    ending: "...немного серьёзного",
    description: "Для тех, кто ценит сдержанность и основательность",
    styleTitle: "Корпоративный минимализм",
    styleDescription: "Строгие линии, сдержанные цвета, чёткая структура. Идеально для бизнес-проектов, где важна надёжность и профессионализм.",
    styleExample: "Подумайте о сайте Apple — лаконичном, элегантном, с выверенной типографикой.",
    color: "bg-gray-900 text-white"
  },
  {
    title: "Что-то яркое",
    ending: "...что-то яркое",
    description: "Для тех, кто не боится выделяться",
    styleTitle: "Креативный максимализм",
    styleDescription: "Смелые цветовые решения, нестандартные композиции, эксперименты с формами. Для проектов, которые хотят удивлять и запоминаться.",
    styleExample: "Представьте сайт Spotify — контрастный, с градиентами и динамичными элементами.",
    color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
  },
  {
    title: "Чуть-чуть эмоций",
    ending: "...чуть-чуть эмоций",
    description: "Для тех, кто ценит человечность в дизайне",
    styleTitle: "Эмоциональный нарратив",
    styleDescription: "Мягкие формы, теплые тона, фокус на истории и человеческом опыте. Подходит для сервисов, где важен эмоциональный контакт.",
    styleExample: "Как сайт Airbnb — уютный, с акцентом на фотографии реальных людей и мест.",
    color: "bg-amber-600 text-white"
  },
  {
    title: "Что-то необычное",
    ending: "...что-то необычное",
    description: "Для тех, кто хочет исследовать границы возможного",
    styleTitle: "Экспериментальный авангард",
    styleDescription: "Неожиданные решения, инновационные интерфейсы, игра с восприятием. Для проектов, которые стремятся создать уникальный пользовательский опыт.",
    styleExample: "Вдохновляйтесь сайтами-победителями Awwwards — с нестандартными анимациями и интерактивными элементами.",
    color: "bg-emerald-600 text-white"
  }
];

const StyleTest = () => {
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(null);

  const handleSelect = (option: StyleOption) => {
    setSelectedStyle(option);
    // Плавно прокручиваем к результату
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReset = () => {
    setSelectedStyle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Интро секция */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="apple-heading mb-8">Каким будет ваш сайт?</h1>
            <p className="text-xl text-gray-600 mb-12">
              Мы верим, что в каждом дизайне должно быть что-то особенное. 
              Наш креативный тест поможет определить визуальный стиль вашего будущего сайта 
              через игру метафор и ассоциаций.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-2xl font-light italic text-gray-800 mb-3">
                "В каждом рилс должно быть..."
              </p>
              <p className="text-lg text-gray-500">
                Завершите фразу, выбрав вариант, который резонирует с вашим видением.
              </p>
            </div>
          </div>
        </section>

        {/* Варианты ответов */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {styleOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card 
                    className={`p-6 h-full cursor-pointer hover:shadow-md transition-all border-2 ${selectedStyle === option ? 'border-black' : 'border-transparent'}`} 
                    onClick={() => handleSelect(option)}
                  >
                    <h3 className="text-xl font-medium mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className={`${option.color} text-sm px-3 py-1 rounded-full inline-flex items-center`}>
                      <span>{option.ending}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Результат */}
        {selectedStyle && (
          <section id="result" className="py-20 px-6 scroll-mt-20">
            <div className="container mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-10 border-0 shadow-lg rounded-3xl overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 ${selectedStyle.color}`} />
                  <div className="mb-8">
                    <span className="text-sm text-gray-500">Ваш результат</span>
                    <h2 className="text-3xl font-medium mt-2 flex items-center gap-2">
                      {selectedStyle.styleTitle}
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg">
                    {selectedStyle.styleDescription}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Вдохновение
                    </h3>
                    <p className="text-gray-600">
                      {selectedStyle.styleExample}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="flex-1 h-12 rounded-xl bg-black hover:bg-gray-800"
                    >
                      Хочу сайт в этом стиле
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 h-12 rounded-xl" 
                      onClick={handleReset}
                    >
                      Попробовать снова
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Контакты */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-medium mb-6">Готовы воплотить стиль в реальность?</h2>
            <p className="text-gray-600 mb-8">
              Свяжитесь с нами, чтобы обсудить детали вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Card className="p-6 flex items-center gap-3 cursor-pointer hover:shadow-md transition-all">
                <div className="bg-gray-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="font-medium">+7 (900) 123-45-67</p>
                </div>
              </Card>
              <Card className="p-6 flex items-center gap-3 cursor-pointer hover:shadow-md transition-all">
                <div className="bg-gray-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">hello@stylestudio.ru</p>
                </div>
              </Card>
            </div>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => {
                navigator.clipboard.writeText('hello@stylestudio.ru');
                alert('Email скопирован в буфер обмена!');
              }}
            >
              <Copy className="h-4 w-4" />
              Скопировать контакты
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StyleTest;
