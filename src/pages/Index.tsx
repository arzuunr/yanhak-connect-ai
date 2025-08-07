import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpDeskSystem } from "@/components/HelpDesk/HelpDeskSystem";
import { CheckCircle, MessageSquare, Users, Globe, Star, Zap } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Tüm hakları tek çatıda toplayın",
      description: "All rights management in one place"
    },
    {
      icon: MessageSquare,
      title: "Kolay kullanım, basit arayüz", 
      description: "Easy to use, simple interface"
    },
    {
      icon: Users,
      title: "Tek sağlayıcı, tek sözleşme",
      description: "Single provider, single contract"
    },
    {
      icon: Globe,
      title: "En iyi fiyat garantisi",
      description: "Best price guarantee"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-destructive">Yanhak.com</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-primary hover:text-primary-hover transition-colors">Özellikler</a>
                <a href="#" className="text-primary hover:text-primary-hover transition-colors">Kıyaslama</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Analiz Talebi</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Demo Talep Et</Button>
              <Button>Platforma Giriş</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/10">
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Yeni nesil haklarla yeteneklerin kurumunuza{" "}
                  <span className="text-destructive">Motivasyonun</span> arttırın
                </h1>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  Platforma Giriş
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Hesabınız yok mu?</span>
                  <a href="#" className="text-primary hover:text-primary-hover underline">
                    Bize ulaşın!
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-destructive/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/lovable-uploads/f7a6eccd-af96-4913-9f21-89e5d44af942.png" 
                alt="Yanhak Platform Illustration" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Neden Yanhak?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern işletmeler için tasarlanmış, kullanıcı dostu arayüzü ve güçlü özellikleri ile 
              hak yönetiminde yeni standartlar belirliyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Hızlı Entegrasyon",
                description: "Mevcut sistemlerinizle kolayca entegre olur, dakikalar içinde kurulum."
              },
              {
                icon: Star,
                title: "Premium Destek", 
                description: "7/24 uzman destek ekibimiz her zaman yanınızda."
              },
              {
                icon: Globe,
                title: "Çoklu Dil Desteği",
                description: "Türkçe, İngilizce ve daha fazla dilde kullanım imkanı."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hemen başlayın ve farkı görün
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ücretsiz demo ile platformumuzu keşfedin ve işletmeniz için doğru çözümü bulun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Ücretsiz Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Satış Ekibiyle Görüş
            </Button>
          </div>
        </div>
      </section>

      {/* Help Desk System */}
      <HelpDeskSystem />
    </div>
  );
};

export default Index;
