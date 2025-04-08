import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import ScrollObserver from '@/components/ScrollObserver';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import { ChevronRight, Menu, X } from 'lucide-react';

const features = [
  {
    title: 'Otimização de Cardápio Inteligente',
    description: 'Maximize seus lucros com nosso sistema de análise preditiva, que identifica os pratos mais populares e lucrativos, ajudando você a otimizar seu cardápio para o sucesso.',
    icon: '📈',
  },
  {
    title: 'Marketing Personalizado Automatizado',
    description: 'Atinja seus clientes com campanhas de marketing personalizadas e automatizadas. Nossa IA analisa dados de clientes para criar ofertas irresistíveis, aumentando a fidelidade e impulsionando as vendas.',
    icon: '📣',
  },
  {
    title: 'Gerenciamento de Reservas Inteligente',
    description: 'Otimize a ocupação do seu restaurante com nosso sistema de gerenciamento de reservas inteligente. Reduza o número de não comparecimentos e maximize o uso de suas mesas.',
    icon: '📅',
  },
  {
    title: 'Análise de Feedback em Tempo Real',
    description: 'Monitore e responda ao feedback dos clientes em tempo real. Nossa IA analisa avaliações online e comentários de redes sociais, fornecendo insights valiosos para melhorar a experiência do cliente.',
    icon: '💬',
  },
];

const testimonials = [
  {
    name: 'Maria Silva',
    title: 'Proprietária do Restaurante Saboroso',
    quote: 'Desde que implementamos o interajAI, vimos um aumento significativo na satisfação dos clientes e nas vendas. A análise de cardápio nos ajudou a focar nos pratos certos, e o marketing personalizado tem sido um sucesso!',
    image: '/lovable-uploads/pessoa1.png',
  },
  {
    name: 'João Pereira',
    title: 'Gerente do Bistrô Requinte',
    quote: 'O gerenciamento de reservas inteligente revolucionou a forma como lidamos com as reservas. Reduzimos drasticamente o número de não comparecimentos e otimizamos o uso de nossas mesas. Recomendo a todos os restaurantes!',
    image: '/lovable-uploads/pessoa2.png',
  },
  {
    name: 'Carla Rodrigues',
    title: 'Chef do Restaurante Delícia',
    quote: 'A análise de feedback em tempo real nos permite identificar rapidamente áreas de melhoria e responder às preocupações dos clientes. Isso tem um impacto direto na nossa reputação e na fidelidade dos clientes.',
    image: '/lovable-uploads/pessoa3.png',
  },
];

const faqs = [
  {
    question: 'Como o interajAI pode ajudar meu restaurante?',
    answer: 'O interajAI oferece uma variedade de soluções, incluindo otimização de cardápio, marketing personalizado, gerenciamento de reservas inteligente e análise de feedback em tempo real. Tudo isso para aumentar a eficiência, a satisfação do cliente e as vendas do seu restaurante.',
  },
  {
    question: 'O interajAI é fácil de usar?',
    answer: 'Sim, o interajAI foi projetado para ser intuitivo e fácil de usar. Oferecemos treinamento e suporte completos para garantir que você aproveite ao máximo todas as funcionalidades.',
  },
  {
    question: 'Quanto custa o interajAI?',
    answer: 'Oferecemos diferentes planos de preços para atender às necessidades de restaurantes de todos os tamanhos. Entre em contato conosco para obter uma cotação personalizada.',
  },
  {
    question: 'O interajAI se integra com outros sistemas que já usamos?',
    answer: 'Sim, o interajAI pode ser integrado com uma variedade de sistemas, incluindo sistemas de ponto de venda (POS), sistemas de gerenciamento de relacionamento com clientes (CRM) e plataformas de mídia social.',
  },
];

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On mount, read the preferred theme from localStorage
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollObserver />
      <ScrollToTopButton />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass">
        <div className="container mx-auto flex justify-between items-center">
          <div className="h-15">
            <img 
              src="/lovable-uploads/277d40c9-bf96-4694-b145-7f6cff10d20f.png" 
              alt="interajAI Restaurantes Logo" 
              className="h-full w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-interaj-500 transition-colors">Funcionalidades</a>
            <a href="#how-it-works" className="hover:text-interaj-500 transition-colors">Como Funciona</a>
            <a href="#testimonials" className="hover:text-interaj-500 transition-colors">Testemunhos</a>
            <a href="#pricing" className="hover:text-interaj-500 transition-colors">Preços</a>
            <a href="#faq" className="hover:text-interaj-500 transition-colors">FAQ</a>
          </div>

          <Button variant="primary" size="sm">
            Começar Agora
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass mt-2 py-2 px-6">
            <a href="#features" className="block py-2 hover:text-interaj-500 transition-colors" onClick={closeMobileMenu}>Funcionalidades</a>
            <a href="#how-it-works" className="block py-2 hover:text-interaj-500 transition-colors" onClick={closeMobileMenu}>Como Funciona</a>
            <a href="#testimonials" className="block py-2 hover:text-interaj-500 transition-colors" onClick={closeMobileMenu}>Testemunhos</a>
            <a href="#pricing" className="block py-2 hover:text-interaj-500 transition-colors" onClick={closeMobileMenu}>Preços</a>
            <a href="#faq" className="block py-2 hover:text-interaj-500 transition-colors" onClick={closeMobileMenu}>FAQ</a>
            <Button variant="primary" size="sm" className="w-full mt-2">
              Começar Agora
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-24 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-on-scroll">
            A Inteligência Artificial que Impulsiona o Seu Restaurante ao Sucesso
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-on-scroll delay-100">
            Descubra como o interajAI pode transformar a gestão do seu restaurante, otimizar seus lucros e encantar seus clientes.
          </p>
          <div className="flex justify-center gap-4 animate-on-scroll delay-200">
            <Button variant="primary" size="lg">
              Experimente Grátis
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 animate-on-scroll">
            Funcionalidades que Fazem a Diferença
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="animate-on-scroll from-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 animate-on-scroll">
            Como o interajAI Transforma Seu Restaurante
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 animate-on-scroll from-left">
              <img
                src="/lovable-uploads/dashboard.png"
                alt="Dashboard interajAI"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 animate-on-scroll from-right">
              <h3 className="text-2xl font-semibold mb-4">
                Análise Inteligente de Dados
              </h3>
              <p className="text-gray-600">
                Nossa IA coleta e analisa dados de diversas fontes, incluindo vendas, feedback de clientes e tendências de mercado, para fornecer insights valiosos sobre o desempenho do seu restaurante.
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-4">
                Recomendações Personalizadas
              </h3>
              <p className="text-gray-600">
                Com base na análise de dados, o interajAI oferece recomendações personalizadas para otimizar seu cardápio, campanhas de marketing e estratégias de preços, maximizando seus lucros.
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-4">
                Automação Inteligente
              </h3>
              <p className="text-gray-600">
                Automatize tarefas repetitivas, como o envio de e-mails de marketing e o gerenciamento de reservas, liberando sua equipe para se concentrar no que realmente importa: proporcionar uma experiência excepcional aos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 animate-on-scroll">
            O Que Nossos Clientes Estão Dizendo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                quote={testimonial.quote}
                image={testimonial.image}
                className="animate-on-scroll from-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 animate-on-scroll">
            Planos de Preços Flexíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center animate-on-scroll from-bottom">
              <h3 className="text-2xl font-semibold mb-4">Plano Básico</h3>
              <div className="text-4xl font-bold text-interaj-500 mb-4">Grátis</div>
              <p className="text-gray-600 mb-6">Ideal para restaurantes que estão começando.</p>
              <ul className="text-gray-600 mb-6">
                <li>Otimização de Cardápio Limitada</li>
                <li>Análise de Feedback Semanal</li>
                <li>Suporte por E-mail</li>
              </ul>
              <Button variant="primary" size="md">Começar Agora</Button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center animate-on-scroll from-bottom delay-100">
              <h3 className="text-2xl font-semibold mb-4">Plano Premium</h3>
              <div className="text-4xl font-bold text-interaj-500 mb-4">R$99/mês</div>
              <p className="text-gray-600 mb-6">Para restaurantes que buscam crescimento.</p>
              <ul className="text-gray-600 mb-6">
                <li>Otimização de Cardápio Completa</li>
                <li>Marketing Personalizado</li>
                <li>Gerenciamento de Reservas</li>
                <li>Análise de Feedback em Tempo Real</li>
                <li>Suporte Prioritário</li>
              </ul>
              <Button variant="primary" size="md">Começar Agora</Button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center animate-on-scroll from-bottom delay-200">
              <h3 className="text-2xl font-semibold mb-4">Plano Enterprise</h3>
              <div className="text-4xl font-bold text-interaj-500 mb-4">Entre em Contato</div>
              <p className="text-gray-600 mb-6">Soluções personalizadas para grandes redes.</p>
              <ul className="text-gray-600 mb-6">
                <li>Recursos do Plano Premium</li>
                <li>Integrações Personalizadas</li>
                <li>Suporte Dedicado</li>
                <li>Análise Avançada de Dados</li>
              </ul>
              <Button variant="primary" size="md">Fale Conosco</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-interaj-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 animate-on-scroll">
            Pronto para Transformar Seu Restaurante?
          </h2>
          <p className="text-lg mb-8 animate-on-scroll delay-100">
            Experimente o interajAI e descubra como podemos ajudar você a aumentar seus lucros, otimizar suas operações e encantar seus clientes.
          </p>
          <Button variant="secondary" size="lg" className="animate-on-scroll delay-200">
            Começar Agora
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 animate-on-scroll">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                className="animate-on-scroll from-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-interaj-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="h-15">
              <img 
                src="/lovable-uploads/277d40c9-bf96-4694-b145-7f6cff10d20f.png" 
                alt="interajAI Restaurantes Logo" 
                className="h-full w-auto"
              />
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-interaj-500 transition-colors">Termos de Serviço</a>
              <a href="#" className="text-gray-600 hover:text-interaj-500 transition-colors">Política de Privacidade</a>
            </div>
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} interajAI Restaurantes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
