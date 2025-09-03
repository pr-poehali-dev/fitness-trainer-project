import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Dumbbell" className="h-8 w-8 text-primary" />
              <span className="text-xl font-montserrat font-bold text-gray-900">FitCoach</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#subscriptions" className="text-gray-600 hover:text-primary transition-colors font-open-sans">Абонементы</a>
              <a href="#courses" className="text-gray-600 hover:text-primary transition-colors font-open-sans">Курсы</a>
              <a href="#results" className="text-gray-600 hover:text-primary transition-colors font-open-sans">Результаты</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Начать тренировки
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary text-white px-4 py-2">
                  Персональные тренировки
                </Badge>
                <h1 className="text-5xl font-montserrat font-bold text-gray-900 leading-tight">
                  Тренировки для дома
                  <span className="block text-primary">от Марии Беловой</span>
                </h1>
                <p className="text-xl text-gray-600 font-open-sans">
                  Без зала и стресса, с заботой о себе. 
                  Персональные онлайн тренировки один-на-один с профессиональным тренером.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="User" className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Plus" className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-600 font-open-sans">
                  <span className="font-semibold">Более 10 000</span> женщин уже изменили свою жизнь
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Начать прямо сейчас
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4">
                  <Icon name="Calendar" className="w-5 h-5 mr-2" />
                  Записаться на консультацию
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-1">
                <img 
                  src="/img/10d415dc-7448-4860-adb6-3f3dbcaf7f81.jpg" 
                  alt="Фитнес тренер" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Trophy" className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-montserrat font-semibold">5+ лет</p>
                    <p className="text-sm text-gray-600">опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="subscriptions" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Абонемент на 31 день
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Выберите тарифный план, который подходит именно вам
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-secondary to-secondary/80 text-white overflow-hidden">
              <CardHeader className="pb-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <CardTitle className="text-3xl font-montserrat font-bold mb-4">
                      Персональные тренировки
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        <Icon name="Zap" className="w-4 h-4 mr-1" />
                        Старт сразу
                      </Badge>
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        <Icon name="Calendar" className="w-4 h-4 mr-1" />
                        Новые тренировки каждый день
                      </Badge>
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        <Icon name="Clock" className="w-4 h-4 mr-1" />
                        Доступ в любое время
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="text-5xl font-bold mb-2">29$</div>
                    <div className="text-white/80 mb-6">2930₽ / 27€</div>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                      Узнать подробнее
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #поддержка кураторов
                      </Badge>
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #библиотека знаний
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #советы по питанию
                      </Badge>
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #круговые тренировки
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #молодость лица
                      </Badge>
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #психолог
                      </Badge>
                      <Badge variant="outline" className="border-white text-white bg-white/20">
                        #йога
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-black/20 rounded-lg overflow-hidden">
                    <img 
                      src="/img/fafcc5e8-8dcb-4b96-8f5c-7b980d2052b8.jpg" 
                      alt="Групповая тренировка" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Курсы и программы
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Структурированные программы тренировок для достижения ваших целей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Домашние тренировки",
                description: "Эффективные упражнения без инвентаря",
                duration: "30 дней",
                level: "Для начинающих",
                icon: "Home"
              },
              {
                title: "Силовые тренировки",
                description: "Построение мышечного корсета",
                duration: "45 дней",
                level: "Средний уровень",
                icon: "Zap"
              },
              {
                title: "Йога и растяжка",
                description: "Гибкость и релаксация",
                duration: "21 день",
                level: "Любой уровень",
                icon: "Heart"
              }
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={course.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat">{course.title}</CardTitle>
                  <p className="text-gray-600 font-open-sans">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Target" className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.level}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Результаты наших клиентов
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Истории успеха людей, которые изменили свою жизнь с нашими тренировками
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "10,000+", label: "Довольных клиентов" },
              { number: "95%", label: "Достигли результата" },
              { number: "24/7", label: "Поддержка" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-montserrat font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-open-sans">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                result: "-15 кг за 3 месяца",
                review: "Потрясающие результаты! Персональный подход помог достичь цели быстрее."
              },
              {
                name: "Елена М.",
                result: "Улучшила форму",
                review: "Тренировки дома оказались очень удобными. Отличная программа!"
              },
              {
                name: "Мария С.",
                result: "+5 кг мышц",
                review: "Силовые тренировки дали невероятный результат. Рекомендую всем!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold">{testimonial.name}</h3>
                      <p className="text-primary text-sm">{testimonial.result}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-open-sans italic">"{testimonial.review}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Готовы начать свой путь к идеальной форме? Оставьте заявку на бесплатную консультацию
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Расскажите о ваших целях и опыте тренировок..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="Send" className="w-5 h-5 mr-2" />
                    Отправить заявку
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" className="w-5 h-5 text-primary" />
                      <span className="font-open-sans">info@fitcoach.ru</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" className="w-5 h-5 text-primary" />
                      <span className="font-open-sans">+7 (999) 123-45-67</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Dumbbell" className="h-8 w-8 text-primary" />
                <span className="text-xl font-montserrat font-bold">FitCoach</span>
              </div>
              <p className="text-gray-400 font-open-sans max-w-md">
                Персональные онлайн тренировки для достижения ваших фитнес-целей. 
                Тренируйтесь дома с профессиональным подходом.
              </p>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Программы</h3>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li><a href="#" className="hover:text-white transition-colors">Домашние тренировки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Силовые программы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Йога и растяжка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Питание</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>info@fitcoach.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 FitCoach. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;