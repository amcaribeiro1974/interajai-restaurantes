import React, { useEffect } from 'react';
import Button from '@/components/Button';
import ScrollObserver from '@/components/ScrollObserver';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Clock, 
  DollarSign, 
  Globe, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  MessageCircle, 
  Shuffle, 
  BadgePercent,
  ChevronDown,
  Mail,
  Utensils,
  Wine,
  BarChart4,
  Award,
  Calculator,
  Menu,
  Percent,
  Settings,
  ChartLine,
  Megaphone
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = observeElements();

    return () => {
      observer.disconnect();
    };
  }, []);

  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Em breve, nossa equipe entrará em contato.",
    });
  };

  const faqItems = [
    {
      question: "Preciso sair do iFood ou de outras plataformas?",
      answer: "Não. A InterajAI funciona como um canal complementar. Você mantém todos os seus canais atuais e adiciona um canal direto por WhatsApp gerenciado por nossa IA."
    },
    {
      question: "Quanto custa de verdade?",
      answer: "Apenas 6% da receita gerada pelo canal IA, com um mínimo de R$ 199 mensais. Este valor já inclui todos os custos de IA, WhatsApp e gestão de marketing."
    },
    {
      question: "Quem cuida do marketing?",
      answer: "A InterajAI gerencia todo o marketing do canal, incluindo posts nas redes sociais do restaurante, parcerias com influenciadores locais, folhetos e listas de transmissão, sem custos extras."
    },
    {
      question: "Quanto tempo leva para começar a vender?",
      answer: "Em média 7 dias para o canal ficar online e cerca de 30 dias para o ramp-up completo de vendas."
    },
    {
      question: "O bot consegue entender pedidos complexos?",
      answer: "Sim! Nossa tecnologia de IA foi treinada especificamente para o setor de restaurantes, compreendendo personalização de pedidos, combinações e solicitações especiais."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 glass">
        <div className="container mx-auto flex justify-between items-center">
          <div className="h-10 md:h-12">
            <img 
              src="/lovable-uploads/d96ff836-d7f3-4831-9da2-bc879e772b7a.png" 
              alt="InterajAI Restaurantes Logo" 
              className="h-full"
            />
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#beneficios" className="text-interaj-700 hover:text-interaj-500 transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-interaj-700 hover:text-interaj-500 transition-colors">Como Funciona</a>
            <a href="#casos" className="text-interaj-700 hover:text-interaj-500 transition-colors">Casos de Sucesso</a>
            <a href="#faq" className="text-interaj-700 hover:text-interaj-500 transition-colors">FAQ</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#contato" className="hidden sm:block">
              <Button size="sm">Fale Conosco</Button>
            </a>
            
            <button 
              className="md:hidden text-interaj-800 p-2 rounded-md"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50 border-t border-interaj-100">
            <div className="flex flex-col space-y-4">
              <a href="#beneficios" onClick={toggleMenu} className="text-interaj-700 py-2 border-b border-interaj-50">Benefícios</a>
              <a href="#como-funciona" onClick={toggleMenu} className="text-interaj-700 py-2 border-b border-interaj-50">Como Funciona</a>
              <a href="#casos" onClick={toggleMenu} className="text-interaj-700 py-2 border-b border-interaj-50">Casos de Sucesso</a>
              <a href="#faq" onClick={toggleMenu} className="text-interaj-700 py-2 border-b border-interaj-50">FAQ</a>
              <a href="#contato" onClick={toggleMenu} className="text-interaj-700 py-2">Fale Conosco</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:pt-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="bg-interaj-100 text-interaj-800 rounded-full px-3 py-1 text-xs sm:text-sm font-medium">
                  Integramos com o seu PDV
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-interaj-900 font-display leading-tight">
                Ganhe um novo canal de vendas por WhatsApp + IA
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-balance">
                Sem custo fixo, sem migração. Marketing + IA inclusos. Lançamos, divulgamos e operamos seu canal de pedidos 24/7.
              </p>
              
              <div className="space-y-3 bg-interaj-50 p-4 sm:p-5 rounded-xl">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Trabalha 24h, 7 dias</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Aumenta ticket médio com upsell inteligente</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Gestão completa das campanhas de divulgação</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Zero mudança nos seus canais atuais</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Pagamento por performance: 6% do faturamento do canal (mín. R$ 199)</p>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Quero meu novo canal
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Como funciona
                </Button>
              </div>
              
              <div className="pt-4 sm:pt-6 flex items-center space-x-2 text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-interaj-200 flex items-center justify-center text-xs text-interaj-600">R1</div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-interaj-300 flex items-center justify-center text-xs text-white">R2</div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-interaj-400 flex items-center justify-center text-xs text-white">R3</div>
                </div>
                <span className="text-xs sm:text-sm">Mais de 100 restaurantes já utilizam</span>
              </div>
            </div>
            
            <div className="relative mt-4 md:mt-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/4c91889c-cb48-4390-92a7-282e5bad6152.png" 
                  alt="Atendente Virtual InterajAI" 
                  className="w-full rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-interaj-500/90 p-2 sm:p-3 text-white text-center text-xs sm:text-sm md:text-base">
                  <p className="font-medium">Automação de atendimento via WhatsApp com Inteligência Artificial</p>
                </div>
              </div>
              <div className="absolute -z-10 w-full h-full bg-interaj-200 rounded-2xl -bottom-4 -right-4"></div>
              
              <div className="absolute -right-2 -top-4 sm:-right-4 sm:-top-8 md:-right-12 md:-top-12 bg-interaj-50 p-3 sm:p-4 rounded-xl shadow-lg border border-interaj-100 max-w-[150px] sm:max-w-[180px] rotate-6 z-20">
                <div className="text-xs sm:text-sm font-medium text-interaj-800">
                  <span className="text-interaj-500 font-bold block mb-1">Não é uma pessoa real!</span>
                  Atendimento 100% automatizado por IA que conversa naturalmente pelo WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center mb-2">
        <a href="#beneficios" className="animate-bounce">
          <ChevronDown className="text-interaj-400" size={24} />
        </a>
      </div>

      {/* Benefits Section */}
      <section id="beneficios" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Por que adicionar nosso canal IA?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Um canal complementar que gera resultados sem alterar sua operação atual.
            </p>
            <div className="mt-4 p-3 bg-interaj-50 rounded-lg text-interaj-700 text-sm sm:text-base inline-block">
              Canal adicional ao lado do iFood, telefone e app. Não precisa migrar, só adicionar.
            </div>
          </ScrollObserver>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={Percent}
              title="Pagamento por Performance"
              description="Apenas 6% da receita do canal, com mínimo de R$ 199 que já cobre IA, WhatsApp e marketing."
              delay={100}
            />
            <FeatureCard
              icon={Megaphone}
              title="Marketing Incluído"
              description="Posts nas redes do restaurante, influenciadores locais, folhetos e listas de transmissão, sem custos adicionais."
              delay={200}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Ticket Médio Maior"
              description="Nossa IA sugere complementos e combos inteligentes durante a conversa, aumentando o valor médio dos pedidos."
              delay={300}
            />
            <FeatureCard
              icon={Users}
              title="Base de Clientes Própria"
              description="Você recebe nome e telefone de 100% dos compradores, criando uma base de dados valiosa para seu negócio."
              delay={400}
            />
            <FeatureCard
              icon={Clock}
              title="Atendimento 24/7"
              description="Seu restaurante disponível para pedidos a qualquer hora, aumentando suas vendas sem custos adicionais."
              delay={500}
            />
            <FeatureCard
              icon={Globe}
              title="Complementar ao iFood"
              description="Mantém seus canais atuais funcionando normalmente enquanto adiciona um canal direto e rentável."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 px-6 bg-gradient-to-b from-white to-interaj-50">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Como funciona
            </h2>
            <p className="text-muted-foreground text-lg">
              Um processo simples em quatro etapas para lançar seu novo canal de vendas.
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollObserver className="glass rounded-2xl p-6 h-full" delay={100}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-interaj-100 rounded-full mb-4 text-interaj-800 font-bold">1</div>
                <h3 className="text-xl font-semibold text-interaj-800 mb-2">Setup (até 7 dias)</h3>
                <p className="text-muted-foreground flex-grow">Coletamos seu cardápio, preços e configuramos o bot com personalidade compatível com sua marca.</p>
              </div>
            </ScrollObserver>
            
            <ScrollObserver className="glass rounded-2xl p-6 h-full" delay={200}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-interaj-100 rounded-full mb-4 text-interaj-800 font-bold">2</div>
                <h3 className="text-xl font-semibold text-interaj-800 mb-2">Go-Live do canal</h3>
                <p className="text-muted-foreground flex-grow">Criamos número WhatsApp dedicado, link em bio nas redes sociais e QR-codes para seus materiais.</p>
              </div>
            </ScrollObserver>
            
            <ScrollObserver className="glass rounded-2xl p-6 h-full" delay={300}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-interaj-100 rounded-full mb-4 text-interaj-800 font-bold">3</div>
                <h3 className="text-xl font-semibold text-interaj-800 mb-2">Campanhas de aceleração</h3>
                <p className="text-muted-foreground flex-grow">Implementamos posts, parcerias com influenciadores, folhetos em pedidos existentes e broadcasts.</p>
              </div>
            </ScrollObserver>
            
            <ScrollObserver className="glass rounded-2xl p-6 h-full" delay={400}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-interaj-100 rounded-full mb-4 text-interaj-800 font-bold">4</div>
                <h3 className="text-xl font-semibold text-interaj-800 mb-2">Crescimento e otimização</h3>
                <p className="text-muted-foreground flex-grow">Fornecemos relatórios semanais, criamos promoções estratégicas e melhoramos o upsell automático.</p>
              </div>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Launch Project Section (Previously Migrate Section) */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollObserver animation="from-left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-interaj-100 text-interaj-800 rounded-full text-sm font-medium">
                  Projeto de Lançamento
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-interaj-900 font-display">
                  Crie um novo canal de vendas diretas com marketing incluído
                </h3>
                <p className="text-muted-foreground">
                  Nossa equipe implementa todo o processo de lançamento do seu novo canal, incluindo:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Criação da personalidade de atendimento alinhada à sua marca</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Design de campanhas e promoções exclusivas para o canal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>QR Codes para mesas, balcão e embalagens</p>
                  </li>
                </ul>
              </div>
            </ScrollObserver>
            <div className="order-1 lg:order-2">
              <ScrollObserver animation="from-right">
                <div className="relative">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-interaj-100 to-interaj-200 rounded-2xl relative">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="glass w-full max-w-sm rounded-xl overflow-hidden">
                          <div className="bg-interaj-50 p-4 border-b border-interaj-100">
                            <h4 className="font-medium">Resultados do Canal</h4>
                          </div>
                          <div className="p-4 space-y-4">
                            <div className="flex justify-between items-center">
                              <span>Novos Clientes</span>
                              <span className="font-medium text-interaj-900">214</span>
                            </div>
                            <div className="h-2 bg-interaj-100 rounded-full overflow-hidden">
                              <div className="h-full bg-interaj-500 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Vendas Adicionais</span>
                              <span className="font-medium text-interaj-900">R$ 9.840,00</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Taxa de Retorno</span>
                              <span className="font-medium text-interaj-900">78%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 w-full h-full bg-interaj-200 rounded-2xl -bottom-4 -right-4"></div>
                </div>
              </ScrollObserver>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Feature Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollObserver animation="from-left">
                <div className="relative">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-interaj-100 to-interaj-200 rounded-2xl relative">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="glass w-full max-w-sm rounded-xl p-4 space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-interaj-100 flex items-center justify-center text-interaj-500">
                              <TrendingUp size={20} />
                            </div>
                            <div>
                              <p className="font-medium">Aumento do Ticket Médio</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="glass rounded-lg p-3">
                              <div className="flex justify-between">
                                <span>Pizza Calabresa</span>
                                <span>R$ 49,90</span>
                              </div>
                              <div className="mt-2 pl-4 text-sm text-interaj-600">
                                <div className="flex justify-between">
                                  <span>+ Borda Recheada</span>
                                  <span>R$ 8,90</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>+ Refrigerante 2L</span>
                                  <span>R$ 12,90</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between font-medium">
                              <span>Total</span>
                              <span>R$ 71,70</span>
                            </div>
                            <div className="text-sm text-green-600">
                              Aumento de 43% no ticket!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 w-full h-full bg-interaj-200 rounded-2xl -bottom-4 -left-4"></div>
                </div>
              </ScrollObserver>
            </div>
            <ScrollObserver animation="from-right" className="space-y-6">
              <div className="inline-block px-4 py-1 bg-interaj-100 text-interaj-800 rounded-full text-sm font-medium">
                Aumento de Receita
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-interaj-900 font-display">
                Venda mais em cada pedido com sugestões inteligentes
              </h3>
              <p className="text-muted-foreground">
                Nossa IA analisa o histórico de pedidos para fazer recomendações personalizadas que aumentam o valor médio dos pedidos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-interaj-500">•</div>
                  <p>Sugestões contextuais baseadas no pedido atual</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-interaj-500">•</div>
                  <p>Ofertas especiais para complementos e adicionais</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 text-interaj-500">•</div>
                  <p>Recomendações baseadas em popularidade e margem</p>
                </li>
              </ul>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* PDV Integration Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollObserver animation="from-left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-interaj-100 text-interaj-800 rounded-full text-sm font-medium">
                  Integração Perfeita
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-interaj-900 font-display">
                  Integração total com o seu PDV
                </h3>
                <p className="text-muted-foreground">
                  Nossa solução se integra perfeitamente ao seu sistema de PDV, sem exigir mudanças na sua operação atual.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Sincronização automática de cardápio e preços</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Pedidos entram diretamente no seu PDV e são impressos na área de produção exatamente como seus pedidos atuais</p>
                  </li>
                </ul>
              </div>
            </ScrollObserver>
            <div className="order-1 lg:order-2">
              <ScrollObserver animation="from-right">
                <div className="relative">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-interaj-100 to-interaj-200 rounded-2xl relative">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="glass w-full max-w-sm rounded-xl overflow-hidden">
                          <div className="bg-interaj-50 p-4 border-b border-interaj-100 flex justify-between items-center">
                            <h4 className="font-medium">Painel de Integração</h4>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Conectado</span>
                          </div>
                          <div className="p-4 space-y-4">
                            <div className="flex items-center space-x-3">
                              <Shuffle className="text-interaj-500" size={20} />
                              <div className="flex-1">
                                <div className="text-sm">Sincronização</div>
                                <div className="h-1.5 bg-interaj-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-interaj-500 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                              </div>
                              <span className="text-sm">100%</span>
                            </div>
                            <div className="glass rounded-lg p-3 space-y-3">
                              <div className="flex justify-between items-center">
                                <span>Cardápio</span>
                                <span className="text-green-600 text-sm">Sincronizado</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Preços</span>
                                <span className="text-green-600 text-sm">Sincronizado</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -z-10 w-full h-full bg-interaj-200 rounded-2xl -bottom-4 -right-4"></div>
                </div>
              </ScrollObserver>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-interaj-50">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Comparativo de custos
            </h2>
          </ScrollObserver>

          <div className="max-w-3xl mx-auto">
            <ScrollObserver className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-interaj-900">Marketplaces tradicionais</h3>
                  <p className="text-muted-foreground">
                    Cobram entre 12% e 30% de comissão sobre cada pedido, independente do volume.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg text-red-800 border border-red-100">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">•</div>
                      <p>Sem acesso aos dados dos clientes</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">•</div>
                      <p>Marketing é responsabilidade e custo do restaurante</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-interaj-100 pt-6 space-y-3">
                  <h3 className="text-xl font-bold text-interaj-900">Canal InterajAI</h3>
                  <p className="text-muted-foreground">
                    Cobra apenas 6% da receita gerada pelo canal IA, com um mínimo de R$ 199 por mês.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg text-green-800 border border-green-100">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">•</div>
                      <p>Posse completa dos dados dos clientes</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">•</div>
                      <p>Marketing totalmente incluído: posts, influenciadores e mais</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">•</div>
                      <p>Relatórios semanais de desempenho e otimização contínua</p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl bg-interaj-50/50 p-4 mt-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-interaj-100 flex items-center justify-center text-interaj-500 mr-3">
                      <ChartLine size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Exemplo: Restaurante com R$ 10.000/mês no canal IA</p>
                      <p className="text-sm text-interaj-700">Pagaria apenas R$ 600 (6%) vs. R$ 1.200-3.000 (12-30%) em marketplaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="casos" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground text-lg">
              Restaurantes que implementaram a InterajAI e transformaram seus negócios.
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="+18% de vendas totais via canal IA em apenas 90 dias. A personalização do atendimento e as sugestões inteligentes fizeram toda a diferença para nossos clientes."
              author="Carlos Silva"
              role="Proprietário"
              company="Pizzaria Bella Napoli"
              delay={100}
            />
            <TestimonialCard
              quote="Ticket médio +25% nos pedidos por WhatsApp comparado com outros canais. O melhor é que não precisamos abrir mão do iFood, apenas adicionamos um novo canal rentável."
              author="Marina Costa"
              role="Gerente"
              company="Sushi Express"
              delay={200}
            />
            <TestimonialCard
              quote="As campanhas de marketing que a InterajAI criou para nós trouxeram mais de 200 novos clientes em 2 meses. E o melhor: agora temos o contato direto de todos eles."
              author="Rafael Mendes"
              role="Diretor"
              company="Burger House"
              delay={300}
            />
          </div>

          <ScrollObserver className="mt-16 text-center">
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-interaj-900 font-display mb-2">Resultados Comprovados</h3>
                  <p className="text-muted-foreground">Média dos resultados obtidos pelos nossos clientes</p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-4 md:mt-0">
                  <div className="text-center px-2">
                    <div className="text-3xl font-bold text-interaj-600">+18%</div>
                    <div className="text-sm text-muted-foreground">Aumento de Vendas Totais</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl font-bold text-interaj-600">+25%</div>
                    <div className="text-sm text-muted-foreground">Aumento no Ticket Médio</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl font-bold text-interaj-600">82%</div>
                    <div className="text-sm text-muted-foreground">Taxa de Recompra</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollObserver>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas sobre a implementação da InterajAI.
            </p>
          </ScrollObserver>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Pricing Section - UPDATED TO PERFORMANCE MODEL */}
      <section className="py-20 px-6 bg-gradient-to-b from-interaj-50 to-white">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Invista no futuro do seu restaurante
            </h2>
            <p className="text-muted-foreground text-lg">
              Modelo 100% performance-based — 6% do resultado.
            </p>
          </ScrollObserver>

          <div className="max-w-xl mx-auto">
            <ScrollObserver delay={100}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col relative border border-interaj-200 shadow-lg">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-interaj-500 text-white text-sm font-medium px-4 py-1 rounded-full">Plano Único</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-medium text-interaj-800 mb-2">InterajAI Restaurantes</div>
                  <div className="text-3xl font-bold text-interaj-900 font-display">
                    6%<span className="text-lg font-normal text-muted-foreground"> do faturamento do canal</span>
                  </div>
                  <div className="text-interaj-700 mt-2 font-medium">Mínimo: R$ 199/mês</div>
                  <div className="text-muted-foreground text-sm">Sem setup fee, sem fidelidade</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Número de WhatsApp dedicado</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Até 3.000 mensagens ativas</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Gestão completa de campanhas</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Integração completa com seu PDV</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Relatórios semanais de desempenho</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Cancele quando quiser</p>
                  </li>
                </ul>
                <Button className="w-full">Quero meu novo canal</Button>
              </div>
            </ScrollObserver>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">O que está incluído:</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-4">
              <span className="inline-flex items-center text-sm text-interaj-700">
                <Percent size={16} className="mr-1" /> Pagamento por performance - 6% do resultado
              </span>
              <span className="inline-flex items-center text-sm text-interaj-700">
                <Settings size={16} className="mr-1" /> Setup completo do canal
              </span>
              <span className="inline-flex items-center text-sm text-interaj-700">
                <Megaphone size={16} className="mr-1" /> Marketing incluso
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollObserver animation="from-left">
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display text-center">
                Transforme seu restaurante hoje
              </h2>
              <p className="text-muted-foreground text-lg text-center">
                Entre em contato para conhecer como a InterajAI pode criar um novo canal de vendas para seu restaurante com pagamento apenas por performance.
              </p>
              <div className="flex flex-col items-center space-y-4 pt-4">
                <div className="flex items-center">
                  <Mail className="mr-3 text-interaj-500" size={20} />
                  <span>restaurantes@interajai.com.br</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="mr-3 text-interaj-500" size={20} />
                  <span>Atendimento via WhatsApp</span>
                </div>
              </div>
              <div className="glass p-6 rounded-xl mt-8">
                <h3 className="font-semibold text-interaj-900 mb-3">Por que conversar conosco?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Análise gratuita do potencial de vendas via WhatsApp</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Proposta personalizada para seu restaurante</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-interaj-500">•</div>
                    <p>Conheça mais sobre nossa gestão de marketing completa</p>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center pt-6">
                <Button size="lg">Quero meu novo canal</Button>
              </div>
            </div>
          </ScrollObserver>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-interaj-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="h-10 sm:h-12">
              <img 
                src="/lovable-uploads/d96ff836-d7f3-4831-9da2-bc879e772b7a.png" 
                alt="InterajAI Restaurantes Logo" 
                className="h-full"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-x-8 sm:gap-y-4">
              <a href="#beneficios" className="text-interaj-700 hover:text-interaj-500 transition-colors text-sm sm:text-base">Benefícios</a>
              <a href="#como-funciona" className="text-interaj-700 hover:text-interaj-500 transition-colors text-sm sm:text-base">Como Funciona</a>
              <a href="#casos" className="text-interaj-700 hover:text-interaj-500 transition-colors text-sm sm:text-base">Casos de Sucesso</a>
              <a href="#faq" className="text-interaj-700 hover:text-interaj-500 transition-colors text-sm sm:text-base">FAQ</a>
              <a href="#contato" className="text-interaj-700 hover:text-interaj-500 transition-colors text-sm sm:text-base">Contato</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <span className="bg-interaj-100 text-interaj-800 rounded-full px-3 py-1 text-xs sm:text-sm font-medium inline-block mb-4">
              Modelo 100% performance-based — 6% do resultado
            </span>
            <div className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} InterajAI. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
