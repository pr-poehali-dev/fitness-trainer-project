import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">М</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-gray-900">masha.fit</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-secondary transition-colors font-open-sans">О курсе</a>
              <a href="#subscription" className="text-gray-600 hover:text-secondary transition-colors font-open-sans">Абонемент</a>
              <a href="#results" className="text-gray-600 hover:text-secondary transition-colors font-open-sans">Результаты</a>
              <a href="#contacts" className="text-gray-600 hover:text-secondary transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl font-montserrat font-bold text-gray-900 leading-tight">
                  Тренировки для дома
                  <span className="block text-secondary mt-2">от Маши Блиновой</span>
                </h1>
                <p className="text-xl text-gray-600 font-open-sans leading-relaxed">
                  Без зала и стресса, с заботой о себе
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full border-3 border-white flex items-center justify-center">
                      <Icon name="Heart" className="w-5 h-5 text-white" />
                    </div>
                  ))}
                  <div className="w-12 h-12 bg-gray-100 rounded-full border-3 border-white flex items-center justify-center">
                    <Icon name="Plus" className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-600 font-open-sans">
                  <span className="font-semibold text-secondary">Более 10 000</span> женщин уже<br />
                  изменили свою жизнь
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 py-4 rounded-full text-lg">
                  Начать заниматься
                </Button>
                <Button size="lg" variant="outline" className="px-12 py-4 rounded-full text-lg border-2 border-gray-300">
                  Узнать подробнее
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 p-2">
                <img 
                  src="/img/d78b8a38-c8b8-42ae-b39a-8eabc9dfe484.jpg" 
                  alt="Маша Блинова" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Course Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-montserrat font-bold text-gray-900 mb-8">
              О курсе
            </h2>
            <p className="text-xl text-gray-600 font-open-sans leading-relaxed mb-12">
              Комплексная программа тренировок, разработанная специально для занятий дома. 
              Никакого оборудования - только ваше тело и желание измениться к лучшему.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "Home",
                  title: "Дома",
                  description: "Тренируйтесь в комфортной обстановке без походов в зал"
                },
                {
                  icon: "Clock",
                  title: "30-45 минут",
                  description: "Оптимальная продолжительность для эффективного результата"
                },
                {
                  icon: "Users",
                  title: "Для всех",
                  description: "Программа подходит для любого уровня подготовки"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name={feature.icon as any} className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="subscription" className="py-20 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-white mb-6">
              АБОНЕМЕНТ НА 31 ДЕНЬ
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-montserrat font-bold text-white mb-6">
                    Станьте лучшей версией себя: начните заниматься с нами!
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <Badge className="bg-primary text-white px-4 py-3 rounded-full flex items-center justify-center">
                      <Icon name="Zap" className="w-4 h-4 mr-2" />
                      Старт сразу
                    </Badge>
                    <Badge className="bg-white/20 text-white px-4 py-3 rounded-full flex items-center justify-center border-white/30">
                      <Icon name="Calendar" className="w-4 h-4 mr-2" />
                      Новые тренировки каждый день
                    </Badge>
                    <Badge className="bg-white/20 text-white px-4 py-3 rounded-full flex items-center justify-center border-white/30">
                      <Icon name="Clock" className="w-4 h-4 mr-2" />
                      Доступ в любое время
                    </Badge>
                    <Badge className="bg-white/20 text-white px-4 py-3 rounded-full flex items-center justify-center border-white/30">
                      <Icon name="Users" className="w-4 h-4 mr-2" />
                      Поддержка сообщества
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#поддержка кураторов",
                        "#библиотека знаний",
                        "#советы по питанию"
                      ].map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#круговые тренировки",
                        "#молодость лица",
                        "#психолог"
                      ].map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#йога",
                        "#подвижность",
                        "#осанка"
                      ].map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#пресс",
                        "#ягодицы"
                      ].map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Pricing */}
              <div>
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="text-6xl font-montserrat font-bold text-white mb-2">
                        29$
                      </div>
                      <div className="text-white/80 text-lg mb-6">
                        2930₽ / 27€
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-full text-lg font-semibold">
                        УЗНАТЬ ПОДРОБНЕЕ
                      </Button>
                    </div>

                    <div className="aspect-video bg-black/30 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="/img/fafcc5e8-8dcb-4b96-8f5c-7b980d2052b8.jpg" 
                        alt="Тренировка" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4 text-white/90 text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-primary" />
                        <span>31 день персональных тренировок</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-primary" />
                        <span>Поддержка куратора 24/7</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-primary" />
                        <span>Программы питания</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Check" className="w-4 h-4 text-primary" />
                        <span>Доступ к закрытому сообществу</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Reviews */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Результаты наших девочек
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Реальные истории трансформации от участниц программы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Анна, 28 лет",
                result: "-12 кг за 2 месяца",
                review: "Маша помогла мне полюбить спорт! Теперь тренировки - это моя любимая часть дня. Результат превзошел все ожидания!",
                avatar: "A"
              },
              {
                name: "Елена, 35 лет", 
                result: "Подтянула фигуру",
                review: "После родов думала, что никогда не верну форму. Благодаря программе чувствую себя увереннее чем когда-либо!",
                avatar: "Е"
              },
              {
                name: "Мария, 42 года",
                result: "Улучшила осанку",
                review: "Работа за компьютером давала о себе знать. Теперь спина не болит, а осанка стала как у балерины!",
                avatar: "М"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-montserrat font-bold text-lg">
                        {review.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-secondary font-medium text-sm">
                        {review.result}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-open-sans italic mb-4">
                    "{review.review}"
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10,000+", label: "Участниц" },
              { number: "31", label: "День программы" },
              { number: "24/7", label: "Поддержка" },
              { number: "100%", label: "Результат" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-montserrat font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-open-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Нужно ли специальное оборудование?",
                answer: "Нет, все тренировки разработаны для выполнения дома с собственным весом. Максимум что понадобится - коврик для йоги."
              },
              {
                question: "Подойдет ли программа начинающим?",
                answer: "Абсолютно! Программа адаптирована для любого уровня подготовки. Есть варианты упражнений для новичков."
              },
              {
                question: "Сколько времени занимает одна тренировка?",
                answer: "Обычно 30-45 минут. Это оптимальное время для эффективной тренировки без переутомления."
              },
              {
                question: "Что если я пропущу несколько дней?",
                answer: "Ничего страшного! Доступ к материалам остается на весь срок абонемента. Можете заниматься в своем темпе."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-montserrat font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </h3>
                    <Icon name="ChevronDown" className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-open-sans mt-4">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-600 font-open-sans mb-12">
              Оставьте заявку и получите персональную консультацию
            </p>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" className="py-6" />
                    <Input placeholder="+7 (999) 123-45-67" className="py-6" />
                  </div>
                  <Input type="email" placeholder="your@email.com" className="py-6" />
                  <Textarea 
                    placeholder="Расскажите о своих целях..."
                    rows={4}
                  />
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 py-6 rounded-full text-lg font-semibold">
                    Получить консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-montserrat font-bold text-lg">М</span>
                </div>
                <span className="text-2xl font-montserrat font-bold">masha.fit</span>
              </div>
              <p className="text-gray-400 font-open-sans max-w-md mb-6">
                Тренировки для дома без зала и стресса, с заботой о себе. 
                Присоединяйтесь к тысячам девочек, которые уже изменили свою жизнь.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  <Icon name="Instagram" className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  <Icon name="Phone" className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  <Icon name="Mail" className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Программа</h3>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li><a href="#" className="hover:text-white transition-colors">О курсе</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тренировки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Питание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>info@masha.fit</li>
                <li><a href="https://lk.masha.fit" className="hover:text-white transition-colors">Личный кабинет</a></li>
                <li>Поддержка 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 masha.fit. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;