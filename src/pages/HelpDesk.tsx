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
  const categories = [{
    id: "all",
    name: "Tümü",
    icon: Book,
    count: 45
  }, {
    id: "getting-started",
    name: "Başlangıç",
    icon: Star,
    count: 12
  }, {
    id: "platform",
    name: "Platform",
    icon: Users,
    count: 18
  }, {
    id: "billing",
    name: "Faturalandırma",
    icon: FileText,
    count: 8
  }, {
    id: "technical",
    name: "Teknik",
    icon: HelpCircle,
    count: 7
  }];
  const popularArticles = [{
    title: "Platforma nasıl kayıt olabilirim?",
    description: "Yanhak platformuna kayıt işlemlerini adım adım açıklayan rehber",
    views: 1250,
    category: "getting-started",
    readTime: "3 dk"
  }, {
    title: "Hak yönetimi nasıl çalışır?",
    description: "Platform üzerinde hak yönetimi sisteminin detaylı açıklaması",
    views: 980,
    category: "platform",
    readTime: "5 dk"
  }, {
    title: "Faturalandırma dönemleri",
    description: "Ödeme planları ve faturalandırma döngüleri hakkında bilgiler",
    views: 756,
    category: "billing",
    readTime: "2 dk"
  }, {
    title: "API entegrasyonu",
    description: "Yanhak API'lerini kullanarak sistem entegrasyonu nasıl yapılır",
    views: 642,
    category: "technical",
    readTime: "8 dk"
  }];
  const faqCategories = [{
    title: "1. Genel Bilgiler",
    questions: [{
      question: "Yanhak nedir?",
      answer: "Yanhak, şirketlerin çalışanlarına ek bir maliyet yükü getirmeden, avantajlı alışveriş imkanları sunan, indirimli hediye kodları/çekleri ve çeşitli ürünleri tek bir platformda birleştiren yapay zeka (AI) destekli bir çözümdür. Kullanıcılarımız bu platform sayesinde, bütçeleri dahilinde, kişiselleştirilmiş ürün ve hizmetler arasında geniş çeşitlilikte ve avantajlarla Yanhaklarını oluşturma imkanına sahip olurlar."
    }, {
      question: "Yanhak'ı kimler kullanabilir?",
      answer: "Platformumuz dışarıya kapalı ve yalnızca Yanhak ile anlaşması bulunan şirketlerin aktif çalışanları ve şirket ayrıca eklemişse bayi, müşteri ve üyeleri tarafından kullanılabilmektedir. Şirketinizin platformda yer almaması kaynaklı giriş yapamadıysanız, İnsan Kaynakları departmanınıza Yanhak ile iletişime geçmeleri yönünde bilgi verebilirsiniz."
    }, {
      question: "Şirket katkısı ne anlama gelir?",
      answer: "Şirket katkısı, işverenin Yanhak platformu üzerinden ilgili ürünlerde çalışana miktar yada oran üzerinden indirime ek olarak ödemeyi paylaşmasıdır. Bu sayede çalışanlar, kendilerine ayırdıkları bütçe dahilinde istedikleri ürün ve hizmetleri şirketleri sayesinde çok daha uygun fiyatlara satın alabilir."
    }]
  }, {
    title: "2. Hesap ve Giriş",
    questions: [{
      question: "Nasıl giriş yaparım?",
      answer: "Şirketiniz sizi Yanhak sistemine kaydettiğinde, size geçici şifrenizi içeren bir hoş geldin e-postası göndereceğiz. Bu e-posta ile sisteme ilk girişinizi yapabilirsiniz. Güvenliğiniz için giriş yaptıktan sonra bu geçici şifrenizi mutlaka değiştirmelisiniz."
    }, {
      question: "Şifremi unuttum, ne yapmalıyım?",
      answer: "Eğer şifrenizi unuttuysanız, giriş ekranındaki 'Şifremi unuttum' bağlantısına tıklayın. Ardından, kayıtlı e-posta adresinize gelen geçici şifrenizle platforma giriş yapabilirsiniz. Platforma giriş yaptıktan sonra, isminizin üzerine tıklayarak 'Şifremi Değiştir' seçeneğine basabilir, yeni şifrenizi girip onaylayabilirsiniz."
    }, {
      question: "E-posta adresim değişti, güncelleyebilir miyim?",
      answer: "E-posta adresinizde değişiklik yapmak için İnsan Kaynakları departmanınıza veya şirket yöneticinize başvurmanız gerekmektedir. Çalışan bilgilerinin güncellenmesi şirket yetkilileri tarafından gerçekleştirilebildiğinden, bu değişikliği bireysel olarak sistem üzerinden yapmanız mümkün değildir."
    }]
  }, {
    title: "3. Hediye Kodu/Çekleri ve Ürünler",
    questions: [{
      question: "Hediye kodu/çeki nedir, nasıl kullanılır?",
      answer: "Hediye kodu/çeki, belirli bir marka veya kategoriye özel indirim sağlayan bir dijital kod ya da fiziksel bir çektir. Bu kodları/çekleri, ilgili markanın web sitesinde, uygulamasında veya mağazasında, ödeme yaparken kullanabilirsiniz. Kullanmadan önce, ürünün açıklama kısmını mutlaka dikkatle okuyun."
    }, {
      question: "Hediye kodunu/çekini başka birine devredebilir miyim?",
      answer: "Bu durum, ürünün veya çekin açıklamasına bağlıdır. Ürün açıklamasında açıkça belirtiliyorsa, kodu/çeki başka biri adına alabilir veya devredebilirsiniz. Belirtilmemişse, bu işlem mümkün değildir."
    }, {
      question: "Hediye kodu/çekinin son kullanma tarihi var mı?",
      answer: "Evet, hediye kodlarının/çeklerinin genellikle bir geçerlilik süresi bulunur. Bu süre markadan markaya değişmekle birlikte, genellikle 1 veya 2 yıl gibi olabilir. Satın almadan önce, ürün açıklamalarından son kullanım tarihini kontrol etmeniz önemlidir."
    }, {
      question: "Bir hediye kodu/çeki parça parça kullanabilir miyim?",
      answer: "Parçalı kullanım, hediye kodunun/çekinin toplam tutarını tek bir alışverişte değil, birden fazla alışverişte, kalan bakiye üzerinden kullanabilme imkanıdır. Bu özellik, markaya ve koda/çeke göre değişir. Detaylar ilgili ürün açıklamasında yer alır."
    }]
  }, {
    title: "4. Ödeme ve Faturalandırma",
    questions: [{
      question: "Yanhak üzerinden ödeme nasıl yapılır?",
      answer: "Yanhak platformu üzerinden satın alım yaparken, geçerli indirimlere ek olarak varsa şirket katkınız oran/miktarı toplam tutardan otomatik olarak düşülür. Kalan tutarı Yanhak bakiyesi ile ödenerek işlem tamamlanabilir, bakiyeniz yoksa kredi kartınızla bakiye yükleyebilirsiniz."
    }, {
      question: "Fatura nasıl kesiliyor?",
      answer: "Gerçek kişiler (şahıslar) tarafından yapılan bakiye yüklemelerinde, yasal düzenlemeler gereği fatura yerine dekont düzenlenmektedir. Kurumlara yönelik yapılan yüklemelerde ise durum farklılık göstermektedir. Kurumsal müşteriler için yükleme işlemleri 0% KDV oranı ile faturalandırılmakta ve kurumsal fatura düzenlemesi doğrudan tarafımızca yapılmaktadır."
    }, {
      question: "Ödeme başarısız oldu, ne yapmalıyım?",
      answer: "Kart limitinizi, internet alışverişi yetkinizi ve bilgilerinizi kontrol edin. Sorun devam ederse, destek ekibimiz destek@yanhak.com ile iletişime geçebilirsiniz."
    }]
  }, {
    title: "5. İade, İptal ve Değişiklikler",
    questions: [{
      question: "Hediye çekimi iptal edebilir miyim?",
      answer: "Gönderimi yapılan hediye çekleri ve dijital kodlar iade edilemez veya iptal edilemez. Hediye çekiyle alınan nihai ürün veya nihai hizmetler, markanın iade politikalarına uygun olarak iade edilebilir."
    }, {
      question: "Yanlış marka/ürün aldım, değiştirebilir miyim?",
      answer: "Hediye çekleri genellikle kişiye özeldir ve değişim kabul edilmez. Siparişiniz hediye çeki veya dijital kod niteliğindeyse, fiziksel olarak kargoya verilmeden veya dijital olarak iletilmeden önce bizimle iletişime geçmeniz halinde iptal işlemi gerçekleştirilebilir."
    }, {
      question: "Çek kullanılırken bir hata oldu, kod çalışmıyor. Ne yapmalıyım?",
      answer: "Hediye çeki veya dijital kod kullanımı sırasında bir hata ile karşılaşmanız durumunda, öncelikle ilgili markanın müşteri hizmetleri ile iletişime geçerek destek almanızı rica ederiz. Marka tarafından sorunun çözülmemesi halinde, durumu destek@yanhak.com adresine e-posta göndererek Yanhak Destek Ekibimize bildiriniz."
    }]
  }, {
    title: "6. Güvenlik ve Gizlilik",
    questions: [{
      question: "Kişisel verilerim nasıl korunuyor?",
      answer: "Yanhak olarak kişisel verilerinizin güvenliği bizim için en önemli önceliktir. Verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat hükümlerine tam uyumlu şekilde korunmaktadır."
    }, {
      question: "Ödeme bilgilerim güvende mi?",
      answer: "Ödeme bilgilerinizin güvenliği bizim için önceliktir. Tüm ödeme işlemleri, uluslararası güvenlik standardı olan PCI-DSS uyumlu altyapılar üzerinden gerçekleştirilir. Bu sayede, kart bilgileriniz kesinlikle tarafımızca saklanmaz."
    }, {
      question: "Şirketten ayrılırsam hesabım ne olur?",
      answer: "Şirketinizle çalışma ilişkinizin sona ermesi durumunda, Yanhak hesabınıza erişim şirket yöneticiniz tarafından kapatma hakkına sahiptir. Şirketten ayrılmadan önce kullanılmayan çeklerinizi değerlendirmeniz önerilir."
    }]
  }, {
    title: "7. Destek ve İletişim",
    questions: [{
      question: "Sorun yaşarsam kiminle iletişime geçmeliyim?",
      answer: "Hediye kodu/çeki kullanımı veya ürün alımı sırasında teslimatı harici bir sorunla karşılaştığınızda, öncelikle ilgili markanın müşteri hizmetleri ile iletişime geçerek destek almanızı rica ederiz. Marka tarafından sorunun çözülmemesi halinde, durumu destek@yanhak.com adresine bir e-posta göndererek Yanhak Destek Ekibimize bildirebilirsiniz."
    }, {
      question: "WhatsApp destek hattı var mı?",
      answer: "Evet, WhatsApp üzerinden de destek alabilirsiniz. Hızlı çözüm için WhatsApp destek hattımızla iletişime geçebilirsiniz."
    }, {
      question: "Geri bildirim veya önerilerimi nasıl iletebilirim?",
      answer: "Geri bildirimlerinizi ve önerilerinizi her zaman bekliyoruz! Bunun için destek@yanhak.com adresine bir e-posta göndermeniz yeterli. Özellikle yeni marka veya ürün taleplerinizi titizlikle değerlendirme listemize ekliyoruz."
    }]
  }, {
    title: "8. Sıkça Sorulan Teknik Sorular",
    questions: [{
      question: "Mobil uygulamanız var mı?",
      answer: "Şu anda özel bir mobil uygulamamız bulunmamakla birlikte, web app yani web sitemiz tüm cihazlarla (telefon, tablet ve bilgisayar) tamamen uyumlu çalışmaktadır. Mobil uygulamamız üzerindeki geliştirmelerimiz ise hızla devam ediyor."
    }, {
      question: "Bildirimleri nasıl kapatırım?",
      answer: "Bildirim tercihlerinizi kolayca yönetebilirsiniz. Hesabınıza giriş yaptıktan sonra profil ayarları bölümüne giderek e-posta ve anlık (push) bildirim tercihlerinizi dilediğiniz gibi düzenleyebilir, kapatabilir veya açabilirsiniz."
    }]
  }, {
    title: "9. Marka Çeşitliliği, Marka Ekleme ve Kampanyalar",
    questions: [{
      question: "Hangi markalarla çalışıyorsunuz?",
      answer: "Yanhak olarak, geniş bir yelpazede 120'den fazla farklı markayla iş birliği yapıyoruz. Market, giyim, teknoloji, eğlence, sağlık ve daha pek çok kategoride anlaşmalı markalarımız bulunuyor. En güncel ve detaylı liste için uygulamamızdaki 'Ürünler' bölümünü ziyaret edebilirsiniz."
    }, {
      question: "Bir Ürün İçin Hem Yanhak İndirimi Hem de Marka Kampanyası Geçerli Olur mu?",
      answer: "Bazı durumlarda Yanhak indirimleri, markaların kendi kampanyalarıyla birleşerek size ekstra fayda sağlayabilirken bazı durumlarda bu mümkün olmayabilir. Bu durum tamamen markanın kendi kurallarına bağlıdır. Ödeme ekranında gördüğünüz nihai tutar, size bu konuda kesin bilgi verecektir."
    }, {
      question: "Yeni Marka Talebinde Bulunabilir miyim?",
      answer: "Evet, elbette! Yeni marka talepleriniz için destek@yanhak.com adresine bir e-posta göndermeniz yeterlidir. Taleplerinizi dikkatle inceliyor ve değerlendirme listemize ekliyoruz."
    }, {
      question: "Yurt dışından alışveriş yapabilir miyim?",
      answer: "Her ülkede yayınlanan Yanhak versiyonun farklı olduğunu ve sizin şirketinizin lokasyonuna göre fiyatlama ve markaların gösterildiğini hatırlatmak isteriz. Uluslararası kullanım imkanı sunan markalar için istisnalar olabilir."
    }]
  }];
  const contactOptions = [{
    icon: MessageCircle,
    title: "Canlı Chat",
    description: "Anlık destek için chat başlatın",
    action: "Chat Başlat",
    available: true,
    responseTime: "~2 dakika"
  }, {
    icon: Mail,
    title: "E-posta Desteği",
    description: "support@yanhak.com",
    action: "E-posta Gönder",
    available: true,
    responseTime: "~4 saat"
  }, {
    icon: Phone,
    title: "Telefon Desteği",
    description: "+90 212 555 0123",
    action: "Ara",
    available: true,
    responseTime: "Anında"
  }, {
    icon: Video,
    title: "Video Görüşme",
    description: "Uzaktan destek için randevu alın",
    action: "Randevu Al",
    available: false,
    responseTime: "Randevulu"
  }];
  const filteredArticles = popularArticles.filter(article => selectedCategory === "all" || article.category === selectedCategory);
  return <div className="min-h-screen bg-background">
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
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Aradığınız cevapları bulun, uzman desteği alın ve platformu en verimli şekilde kullanın
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input type="text" placeholder="Aradığınız konuyu yazın..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 focus:border-primary/50 shadow-lg" />
              <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg">
                Ara
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="faq">Sık Sorulan Sorular</TabsTrigger>
            <TabsTrigger value="guides">Rehberler</TabsTrigger>
          </TabsList>


          {/* FAQ Tab */}
          <TabsContent value="faq">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Sık Sorulan Sorular</h2>
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => <div key={categoryIndex} className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary mb-6">{category.title}</h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => <AccordionItem key={`${categoryIndex}-${index}`} value={`item-${categoryIndex}-${index}`} className="border border-border rounded-lg px-6 data-[state=open]:shadow-card transition-all duration-200">
                          <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                            <span className="font-semibold">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>)}
                    </Accordion>
                  </div>)}
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
                {[{
                title: "Başlangıç Rehberi",
                description: "Platform kullanımına başlarken bilmeniz gerekenler",
                duration: "15 dakika",
                level: "Başlangıç"
              }, {
                title: "İleri Seviye Özellikler",
                description: "Profesyonel kullanım için gelişmiş özellikler",
                duration: "30 dakika",
                level: "İleri"
              }, {
                title: "API Entegrasyonu",
                description: "Kendi sistemlerinizle entegrasyon rehberi",
                duration: "45 dakika",
                level: "Geliştirici"
              }].map((guide, index) => <Card key={index} className="text-left hover:shadow-card transition-all duration-300 group cursor-pointer hover:scale-105">
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
                  </Card>)}
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
            <Button size="lg" className="hover:scale-105 transition-transform" onClick={() => window.open('https://wa.me/905555555555', '_blank')}>
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Destek
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" onClick={() => window.location.href = "/submit-request"}>
              <Mail className="h-5 w-5 mr-2" />
              Destek Talebi Oluştur
            </Button>
          </div>
        </div>
      </section>

      {/* Help Desk System */}
      <HelpDeskSystem />
    </div>;
};
export default HelpDesk;