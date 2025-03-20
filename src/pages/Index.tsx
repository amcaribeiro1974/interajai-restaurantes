
import React, { useEffect } from 'react';
import Button from '@/components/Button';
import ScrollObserver from '@/components/ScrollObserver';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import { 
  Clock, 
  DollarSign, 
  Globe, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  FlexibleIcon, 
  MessageCircle, 
  Shuffle, 
  BadgePercent,
  ChevronDown,
  Mail
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Em breve, nossa equipe entrará em contato.",
    });
  };

  const faqItems = [
    {
      question: "Como é feita a integração com o sistema Colibri?",
      answer: "A integração é simples e não demanda alterações no seu sistema atual. Nossa equipe técnica configura tudo remotamente com apoio de um especialista dedicado ao seu estabelecimento."
    },
    {
      question: "Quanto tempo leva para implementar a solução?",
      answer: "A implementação completa leva em média 7 dias, incluindo a configuração, treinamento da equipe e período de adaptação."
    },
    {
      question: "O bot consegue entender pedidos complexos?",
      answer: "Sim! Nossa tecnologia de IA foi treinada especificamente para o setor de restaurantes, compreendendo personalização de pedidos, combinações e solicitações especiais."
    },
    {
      question: "Como é a política de pagamento?",
      answer: "Trabalhamos com planos mensais e anuais, com descontos progressivos conforme o volume de atendimentos. Todos os planos incluem suporte técnico e atualizações."
    },
    {
      question: "Quais canais o bot pode atender?",
      answer: "Nosso bot é omnichannel e pode atender WhatsApp, site, Instagram, Facebook e outros canais digitais de acordo com a necessidade do seu restaurante."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-interaj-800 font-bold text-2xl font-display">interaj<span className="text-interaj-500">AI</span></div>
          <div className="hidden md:flex space-x-6">
            <a href="#beneficios" className="text-interaj-700 hover:text-interaj-500 transition-colors">Benefícios</a>
            <a href="#solucao" className="text-interaj-700 hover:text-interaj-500 transition-colors">Solução</a>
            <a href="#casos" className="text-interaj-700 hover:text-interaj-500 transition-colors">Casos de Sucesso</a>
            <a href="#faq" className="text-interaj-700 hover:text-interaj-500 transition-colors">FAQ</a>
          </div>
          <a href="#contato">
            <Button size="sm">Fale Conosco</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="bg-interaj-100 text-interaj-800 rounded-full px-4 py-1 text-sm font-medium">
                  Exclusivo para usuários Colibri
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-interaj-900 font-display leading-tight">
                Reduza custos e atenda <span className="text-interaj-500">24 horas por dia</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Diminua suas comissões de 12% para 5% e automatize o atendimento com inteligência artificial. Aumente suas margens enquanto oferece uma experiência superior.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Solicitar Demonstração
                </Button>
                <Button variant="outline" size="lg">
                  Ver Como Funciona
                </Button>
              </div>
              <div className="pt-6 flex items-center space-x-2 text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-interaj-200 flex items-center justify-center text-xs text-interaj-600">R1</div>
                  <div className="w-8 h-8 rounded-full bg-interaj-300 flex items-center justify-center text-xs text-white">R2</div>
                  <div className="w-8 h-8 rounded-full bg-interaj-400 flex items-center justify-center text-xs text-white">R3</div>
                </div>
                <span>Mais de 100 restaurantes já utilizam</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-float">
                <div className="aspect-[4/3] bg-gradient-to-br from-interaj-400 to-interaj-600 rounded-2xl relative">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="glass w-full max-w-sm rounded-xl p-4 overflow-hidden">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-interaj-100 flex items-center justify-center text-interaj-500">
                          <MessageCircle size={20} />
                        </div>
                        <div>
                          <p className="font-medium">Bot interajAI</p>
                          <p className="text-xs text-muted-foreground">Atendimento Automático</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-interaj-50 rounded-lg p-3 text-sm text-right">
                          Olá! Gostaria de fazer um pedido.
                        </div>
                        <div className="bg-interaj-100 rounded-lg p-3 text-sm">
                          Olá! Bem-vindo ao Restaurante Exemplo. Posso te ajudar com o cardápio ou você já sabe o que deseja pedir?
                        </div>
                        <div className="bg-interaj-50 rounded-lg p-3 text-sm text-right">
                          Quero uma pizza grande de calabresa.
                        </div>
                        <div className="bg-interaj-100 rounded-lg p-3 text-sm">
                          Excelente escolha! Gostaria de adicionar borda recheada por apenas R$ 8,90?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 w-full h-full bg-interaj-200 rounded-2xl -bottom-4 -right-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center mb-16">
        <a href="#beneficios" className="animate-bounce">
          <ChevronDown className="text-interaj-400" size={32} />
        </a>
      </div>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Por que escolher a interajAI?
            </h2>
            <p className="text-muted-foreground text-lg">
              Nossa solução resolve os principais desafios do seu restaurante, reduzindo custos e aumentando a eficiência.
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={DollarSign}
              title="Reduza Comissões"
              description="Diminua suas comissões de 12% para apenas 5%, economizando significativamente em pedidos recorrentes."
              delay={100}
            />
            <FeatureCard
              icon={Clock}
              title="Atendimento 24/7"
              description="Seu restaurante disponível para pedidos a qualquer hora, sem custos extras de horas extras."
              delay={200}
            />
            <FeatureCard
              icon={Globe}
              title="Multilíngue"
              description="Atenda clientes em diferentes idiomas automaticamente, perfeito para regiões turísticas."
              delay={300}
            />
            <FeatureCard
              icon={Users}
              title="Menos Dependência de Equipe"
              description="Reduza a necessidade de uma equipe grande de atendimento, em um mercado onde bons profissionais são escassos."
              delay={400}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Aumento do Ticket Médio"
              description="Ofertas inteligentes de adicionais e complementos que aumentam o valor médio de cada pedido."
              delay={500}
            />
            <FeatureCard
              icon={ShoppingCart}
              title="Escalabilidade Imediata"
              description="Atenda 10 ou 1000 clientes simultaneamente, sem perda de qualidade ou espera."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="solucao" className="py-20 px-6 bg-gradient-to-b from-white to-interaj-50">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Como a interajAI transforma seu negócio
            </h2>
            <p className="text-muted-foreground text-lg">
              Entenda como nossa solução resolve os problemas mais comuns enfrentados por restaurantes como o seu.
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollObserver animation="from-left" className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-interaj-900 font-display mb-6">Desafios Atuais</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-red-500">•</div>
                    <p>Altas comissões cobradas por aplicativos de delivery (até 30% do valor do pedido)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-red-500">•</div>
                    <p>Dificuldade para encontrar e manter bons atendentes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-red-500">•</div>
                    <p>Horário de funcionamento limitado por questões de pessoal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-red-500">•</div>
                    <p>Atendimento inconsistente em momentos de pico</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-red-500">•</div>
                    <p>Dificuldade em sugerir adicionais e aumentar o ticket médio</p>
                  </li>
                </ul>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="from-right" className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-interaj-900 font-display mb-6">Nossa Solução</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Comissões significativamente menores (apenas 5%) em um canal próprio</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Atendimento automatizado que complementa sua equipe</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Funcionamento 24 horas sem custos adicionais de pessoal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Capacidade ilimitada, mesmo em horários de pico</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Sugestões inteligentes que aumentam o ticket médio em até 30%</p>
                  </li>
                </ul>
              </div>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Features Detailed Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollObserver className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4 text-center">
              Funcionalidades que transformam seu restaurante
            </h2>
          </ScrollObserver>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollObserver animation="from-left" className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1 bg-interaj-100 text-interaj-800 rounded-full text-sm font-medium">
                    Projeto de Migração
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-interaj-900 font-display">
                    Migre clientes do iFood para seu canal próprio
                  </h3>
                  <p className="text-muted-foreground">
                    Implementamos estratégias para migrar seus clientes das plataformas de delivery para seu canal direto, reduzindo comissões e fidelizando a base de clientes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Cupons exclusivos para primeira compra no canal próprio</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Programa de fidelidade integrado</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Comunicação via QR Code nas embalagens</p>
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
                              <h4 className="font-medium">Migração de Clientes</h4>
                            </div>
                            <div className="p-4 space-y-4">
                              <div className="flex justify-between items-center">
                                <span>Clientes Migrados</span>
                                <span className="font-medium text-interaj-900">214</span>
                              </div>
                              <div className="h-2 bg-interaj-100 rounded-full overflow-hidden">
                                <div className="h-full bg-interaj-500 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>Economia Gerada</span>
                                <span className="font-medium text-interaj-900">R$ 6.420,00</span>
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

            {/* Feature 2 */}
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

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollObserver animation="from-left" className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1 bg-interaj-100 text-interaj-800 rounded-full text-sm font-medium">
                    Integração Perfeita
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-interaj-900 font-display">
                    Integração total com o sistema Colibri
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa solução se integra perfeitamente ao sistema Colibri, sem exigir mudanças na sua operação atual.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Sincronização automática de cardápio e preços</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Pedidos entram diretamente no sistema Colibri</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Gestão de estoque e disponibilidade em tempo real</p>
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
                                <div className="flex justify-between items-center">
                                  <span>Estoque</span>
                                  <span className="text-green-600 text-sm">Tempo real</span>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="casos" className="py-20 px-6 bg-gradient-to-b from-interaj-50 to-white">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground text-lg">
              Restaurantes que implementaram a interajAI e transformaram seus negócios.
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Desde que implementamos o chatbot da interajAI, nossa rentabilidade aumentou 23%. A migração dos clientes do iFood para o canal próprio foi surpreendentemente rápida."
              author="Carlos Silva"
              role="Proprietário"
              company="Pizzaria Bella Napoli"
              delay={100}
            />
            <TestimonialCard
              quote="O melhor investimento que fizemos no último ano. Nossos custos com comissões caíram drasticamente e agora atendemos 24 horas sem custos adicionais."
              author="Marina Costa"
              role="Gerente"
              company="Sushi Express"
              delay={200}
            />
            <TestimonialCard
              quote="A integração com o Colibri foi perfeita e a equipe da interajAI nos deu todo o suporte necessário. O atendimento automático funciona tão bem que os clientes nem percebem que estão falando com um bot."
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
                <div className="flex flex-wrap gap-6 justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-interaj-600">23%</div>
                    <div className="text-sm text-muted-foreground">Aumento de Rentabilidade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-interaj-600">35%</div>
                    <div className="text-sm text-muted-foreground">Redução de Custos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-interaj-600">28%</div>
                    <div className="text-sm text-muted-foreground">Aumento no Ticket Médio</div>
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
              Tire suas dúvidas sobre a implementação da interajAI.
            </p>
          </ScrollObserver>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-interaj-50">
        <div className="container mx-auto">
          <ScrollObserver className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display mb-4">
              Invista no futuro do seu restaurante
            </h2>
            <p className="text-muted-foreground text-lg">
              Escolha o plano ideal para o seu negócio.
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollObserver delay={100}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="text-sm font-medium text-interaj-800 mb-2">Básico</div>
                  <div className="text-3xl font-bold text-interaj-900 font-display">R$ 299<span className="text-lg font-normal text-muted-foreground">/mês</span></div>
                  <div className="text-muted-foreground mt-2">Para restaurantes iniciando</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Até 300 atendimentos/mês</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Integração básica com Colibri</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Atendimento em 1 canal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Suporte por e-mail</p>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Saiba Mais</Button>
              </div>
            </ScrollObserver>

            <ScrollObserver delay={200}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col relative border border-interaj-200 shadow-lg">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-interaj-500 text-white text-sm font-medium px-4 py-1 rounded-full">Mais Popular</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm font-medium text-interaj-800 mb-2">Profissional</div>
                  <div className="text-3xl font-bold text-interaj-900 font-display">R$ 599<span className="text-lg font-normal text-muted-foreground">/mês</span></div>
                  <div className="text-muted-foreground mt-2">Para restaurantes em crescimento</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Até 1000 atendimentos/mês</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Integração completa com Colibri</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Atendimento em 3 canais</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Suporte WhatsApp e e-mail</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Relatórios de desempenho</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Estratégia de migração do iFood</p>
                  </li>
                </ul>
                <Button className="w-full">Começar Agora</Button>
              </div>
            </ScrollObserver>

            <ScrollObserver delay={300}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="text-sm font-medium text-interaj-800 mb-2">Premium</div>
                  <div className="text-3xl font-bold text-interaj-900 font-display">R$ 999<span className="text-lg font-normal text-muted-foreground">/mês</span></div>
                  <div className="text-muted-foreground mt-2">Para restaurantes estabelecidos</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Atendimentos ilimitados</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Integração completa com Colibri</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Atendimento em todos os canais</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Suporte prioritário 24/7</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Análises avançadas e BI</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Consultor dedicado</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-green-500">•</div>
                    <p>Personalização completa</p>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Saiba Mais</Button>
              </div>
            </ScrollObserver>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Todos os planos incluem:</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-4">
              <span className="inline-flex items-center text-sm text-interaj-700">
                <BadgePercent size={16} className="mr-1" /> Comissão reduzida (5%)
              </span>
              <span className="inline-flex items-center text-sm text-interaj-700">
                <Clock size={16} className="mr-1" /> Atendimento 24/7
              </span>
              <span className="inline-flex items-center text-sm text-interaj-700">
                <Users size={16} className="mr-1" /> Atendimentos simultâneos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollObserver animation="from-left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-interaj-900 font-display">
                  Transforme seu restaurante hoje
                </h2>
                <p className="text-muted-foreground text-lg">
                  Entre em contato para uma demonstração personalizada e veja como a interajAI pode revolucionar seu atendimento e aumentar sua rentabilidade.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 text-interaj-500" size={20} />
                    <span>contato@interajai.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="mr-3 text-interaj-500" size={20} />
                    <span>Atendimento via WhatsApp</span>
                  </div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h3 className="font-semibold text-interaj-900 mb-3">Por que conversar conosco?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Demonstração personalizada para seu restaurante</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Análise gratuita do potencial de economia</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-interaj-500">•</div>
                      <p>Consultoria sobre migração de plataformas</p>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollObserver>

            <ScrollObserver animation="from-right">
              <div className="glass rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-interaj-900 font-display mb-6">
                  Solicite uma demonstração
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-interaj-800">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-interaj-200 focus:border-interaj-500 focus:ring-2 focus:ring-interaj-500/30 outline-none transition-all"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="restaurant" className="text-sm font-medium text-interaj-800">Nome do Restaurante</label>
                    <input
                      type="text"
                      id="restaurant"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-interaj-200 focus:border-interaj-500 focus:ring-2 focus:ring-interaj-500/30 outline-none transition-all"
                      placeholder="Nome do seu estabelecimento"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-interaj-800">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-interaj-200 focus:border-interaj-500 focus:ring-2 focus:ring-interaj-500/30 outline-none transition-all"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-interaj-800">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-interaj-200 focus:border-interaj-500 focus:ring-2 focus:ring-interaj-500/30 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-interaj-800">Mensagem (opcional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-interaj-200 focus:border-interaj-500 focus:ring-2 focus:ring-interaj-500/30 outline-none transition-all resize-none"
                      placeholder="Conte-nos mais sobre seu restaurante e necessidades"
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Solicitar Demonstração
                  </Button>
                </form>
              </div>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-interaj-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-interaj-800 font-bold text-2xl font-display">
              interaj<span className="text-interaj-500">AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#beneficios" className="text-interaj-700 hover:text-interaj-500 transition-colors">Benefícios</a>
              <a href="#solucao" className="text-interaj-700 hover:text-interaj-500 transition-colors">Solução</a>
              <a href="#casos" className="text-interaj-700 hover:text-interaj-500 transition-colors">Casos de Sucesso</a>
              <a href="#faq" className="text-interaj-700 hover:text-interaj-500 transition-colors">FAQ</a>
              <a href="#contato" className="text-interaj-700 hover:text-interaj-500 transition-colors">Contato</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} interajAI. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
