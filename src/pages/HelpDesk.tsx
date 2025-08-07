import { useState } from "react";
import { Search, MessageCircle, Book, Mail, Phone, ChevronDown, ChevronRight, Star, Clock, Users, ArrowRight, HelpCircle, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpDeskSystem } from "@/components/HelpDesk/HelpDeskSystem";
import { cn } from "@/lib/utils";

const HelpDesk = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tümü", icon: Book, count: 45 },
    { id: "getting-started", name: "Başlangıç", icon: Star, count: 12 },
    { id: "platform", name: "Platform", icon: Users, count: 18 },
    { id: "billing", name: "Faturalandırma", icon: FileText, count: 8 },
    { id: "technical", name: "Teknik", icon: HelpCircle, count: 7 },
  ];

  const popularArticles = [
    {
      title: "Platforma nasıl kayıt olabilirim?",
      description: "Yanhak platformuna kayıt işlemlerini adım adım açıklayan rehber",
      views: 1250,
      category: "getting-started",
      readTime: "3 dk",
    },
    {
      title: "Hak yönetimi nasıl çalışır?",
      description: "Platform üzerinde hak yönetimi sisteminin detaylı açıklaması",
      views: 980,
      category: "platform",
      readTime: "5 dk",
    },
    {
      title: "Faturalandırma dönemleri",
      description: "Ödeme planları ve faturalandırma döngüleri hakkında bilgiler",
      views: 756,
      category: "billing",
      readTime: "2 dk",
    },
    {
      title: "API entegrasyonu",
      description: "Yanhak API'lerini kullanarak sistem entegrasyonu nasıl yapılır",
      views: 642,
      category: "technical",
      readTime: "8 dk",
    },
  ];

  const faqData = [
    {
      question: "Yanhak platformu nedir?",
      answer: "Yanhak, modern işletmeler için tasarlanmış kapsamlı bir hak yönetimi platformudur. Tüm haklarınızı tek çatı altında toplayarak, kolay kullanım ve basit arayüz ile yönetmenizi sağlar.",
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Kredi kartı, banka kartı, havale/EFT ve kurumsal fatura ödeme seçeneklerini destekliyoruz. Tüm ödemeler SSL ile güvence altındadır.",
    },
    {
      question: "Demo hesabı nasıl alabilirim?",
      answer: "Ana sayfadaki 'Demo Talep Et' butonuna tıklayarak form doldurabilir veya satış ekibimizle iletişime geçebilirsiniz. Demo hesabınız 24 saat içinde hazır olacaktır.",
    },
    {
      question: "Teknik destek nasıl alırım?",
      answer: "7/24 canlı chat, e-posta veya telefon ile teknik destek alabilirsiniz. Premium müşterilerimiz için öncelikli destek hizmeti sunuyoruz.",
    },
    {
      question: "Verilerim güvende mi?",
      answer: "Evet, tüm verileriniz ISO 27001 sertifikalı veri merkezlerinde saklanır ve end-to-end şifreleme ile korunur. KVKK ve GDPR uyumlu çalışıyoruz.",
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Canlı Chat",
      description: "Anlık destek için chat başlatın",
      action: "Chat Başlat",
      available: true,
      responseTime: "~2 dakika",
    },
    {
      icon: Mail,
      title: "E-posta Desteği",
      description: "support@yanhak.com",
      action: "E-posta Gönder",
      available: true,
      responseTime: "~4 saat",
    },
    {
      icon: Phone,
      title: "Telefon Desteği",
      description: "+90 212 555 0123",
      action: "Ara",
      available: true,
      responseTime: "Anında",
    },
    {
      icon: Video,
      title: "Video Görüşme",
      description: "Uzaktan destek için randevu alın",
      action: "Randevu Al",
      available: false,
      responseTime: "Randevulu",
    },
  ];

  const filteredArticles = popularArticles.filter(article => 
    selectedCategory === "all" || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold text-destructive hover:text-destructive/80 transition-colors">
                Yanhak.com
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Ana Sayfa</a>
                <a href="#" className="text-primary font-medium">Yardım Merkezi</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">İletişim</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Giriş Yap</Button>
              <Button>Platforma Giriş</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/10 to-primary/10 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Yanhak Yardım Merkezi
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Aradığınız cevapları bulun, uzman desteği alın ve platformu en verimli şekilde kullanın
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Aradığınız konuyu yazın..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 focus:border-primary/50 shadow-lg"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg"
              >
                Ara
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Yardım Makalesi</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-success mb-2">~2dk</div>
                  <div className="text-sm text-muted-foreground">Ortalama Yanıt Süresi</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-warning mb-2">7/24</div>
                  <div className="text-sm text-muted-foreground">Canlı Destek</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="browse">Göz At</TabsTrigger>
            <TabsTrigger value="faq">Sık Sorulan</TabsTrigger>
            <TabsTrigger value="contact">İletişim</TabsTrigger>
            <TabsTrigger value="guides">Rehberler</TabsTrigger>
          </TabsList>

          {/* Browse Tab */}
          <TabsContent value="browse" className="space-y-12">
            {/* Categories */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Kategoriler</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex flex-col items-center p-6 h-auto space-y-2 hover:scale-105 transition-all duration-200"
                  >
                    <category.icon className="h-6 w-6" />
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </section>

            {/* Popular Articles */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Popüler Makaleler</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-card transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardDescription className="text-base">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {article.views} görüntüleme
                          </span>
                        </div>
                        <Badge variant="outline">
                          {categories.find(c => c.id === article.category)?.name}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Sık Sorulan Sorular</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 data-[state=open]:shadow-card transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Bizimle İletişime Geçin</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {contactOptions.map((option, index) => (
                  <Card 
                    key={index} 
                    className={cn(
                      "group transition-all duration-300 cursor-pointer",
                      option.available 
                        ? "hover:shadow-card hover:scale-105" 
                        : "opacity-60 cursor-not-allowed"
                    )}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          option.available 
                            ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                            : "bg-muted text-muted-foreground"
                        )}>
                          <option.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {option.title}
                            {!option.available && (
                              <Badge variant="outline" className="text-xs">
                                Yakında
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription>{option.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Yanıt süresi: {option.responseTime}
                        </span>
                        <Button 
                          variant={option.available ? "default" : "ghost"} 
                          size="sm"
                          disabled={!option.available}
                        >
                          {option.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Detaylı Rehberler</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Platformu en verimli şekilde kullanmanız için hazırladığımız kapsamlı rehberler
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Başlangıç Rehberi",
                    description: "Platform kullanımına başlarken bilmeniz gerekenler",
                    duration: "15 dakika",
                    level: "Başlangıç"
                  },
                  {
                    title: "İleri Seviye Özellikler",
                    description: "Profesyonel kullanım için gelişmiş özellikler",
                    duration: "30 dakika", 
                    level: "İleri"
                  },
                  {
                    title: "API Entegrasyonu",
                    description: "Kendi sistemlerinizle entegrasyon rehberi",
                    duration: "45 dakika",
                    level: "Geliştirici"
                  }
                ].map((guide, index) => (
                  <Card key={index} className="text-left hover:shadow-card transition-all duration-300 group cursor-pointer hover:scale-105">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {guide.duration}
                          </div>
                          <Badge variant="outline">{guide.level}</Badge>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sorunuz yanıtlanmadı mı?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size yardımcı olmak için burada. Canlı chat başlatın veya bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover:scale-105 transition-transform">
              <MessageCircle className="h-5 w-5 mr-2" />
              Canlı Chat Başlat
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <Mail className="h-5 w-5 mr-2" />
              E-posta Gönder
            </Button>
          </div>
        </div>
      </section>

      {/* Help Desk System */}
      <HelpDeskSystem />
    </div>
  );
};

export default HelpDesk;