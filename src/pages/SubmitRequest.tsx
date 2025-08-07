import { useState } from "react";
import { ArrowLeft, Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    category: "",
    email: "",
    helpType: "",
    subject: "",
    description: "",
    priority: "normal"
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    { value: "platform", label: "Platform Kullanımı" },
    { value: "billing", label: "Faturalandırma" },
    { value: "technical", label: "Teknik Sorun" },
    { value: "account", label: "Hesap Yönetimi" },
    { value: "integration", label: "API & Entegrasyon" },
    { value: "feature", label: "Özellik Talebi" },
    { value: "other", label: "Diğer" }
  ];

  const helpTypes = [
    { value: "question", label: "Genel Soru" },
    { value: "bug", label: "Hata Bildirimi" },
    { value: "feature-request", label: "Özellik Talebi" },
    { value: "account-issue", label: "Hesap Sorunu" },
    { value: "billing-issue", label: "Faturalandırma Sorunu" },
    { value: "integration-help", label: "Entegrasyon Yardımı" },
    { value: "urgent", label: "Acil Destek" }
  ];

  const priorities = [
    { value: "low", label: "Düşük", color: "bg-muted text-muted-foreground" },
    { value: "normal", label: "Normal", color: "bg-primary/10 text-primary" },
    { value: "high", label: "Yüksek", color: "bg-warning/10 text-warning" },
    { value: "urgent", label: "Acil", color: "bg-destructive/10 text-destructive" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = ['image/', 'application/pdf', 'text/', 'application/msword', 'application/vnd.openxmlformats'];
      
      return file.size <= maxSize && allowedTypes.some(type => file.type.startsWith(type));
    });

    setAttachments(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category || !formData.email || !formData.subject || !formData.description) {
      toast({
        title: "Eksik Bilgiler",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Talebiniz Alındı!",
      description: "Destek talebiniz başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız.",
    });

    // Reset form
    setFormData({
      category: "",
      email: "",
      helpType: "",
      subject: "",
      description: "",
      priority: "normal"
    });
    setAttachments([]);
    setIsSubmitting(false);
  };

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
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <a href="/help-desk" className="hover:text-primary transition-colors">Yardım Merkezi</a>
                <span>›</span>
                <span className="text-primary font-medium">Destek Talebi</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <a href="/help-desk">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Geri Dön
                </a>
              </Button>
              <Input
                type="text"
                placeholder="Ara..."
                className="w-64 hidden md:block"
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-floating">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold">Destek Talebi Oluştur</CardTitle>
              <p className="text-muted-foreground text-lg">
                Sorununuzu detaylı bir şekilde açıklayın. Teknik problemler için ekran görüntüsü ekleyebilirsiniz.
                <br />
                <span className="text-sm">(Mükerrer veya çoklu talep gönderimi yanıt süremizi uzatabilir.)</span>
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Category Selection */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-base font-medium">
                    Talebinizin kategorisi nedir? <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Bir kategori seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    E-posta adresiniz <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="ornek@email.com"
                    className="h-12"
                  />
                </div>

                {/* Help Type */}
                <div className="space-y-2">
                  <Label htmlFor="helpType" className="text-base font-medium">
                    Size nasıl yardımcı olabiliriz?
                  </Label>
                  <Select value={formData.helpType} onValueChange={(value) => handleInputChange("helpType", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Yardım türünü seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {helpTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base font-medium">
                    Konu <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Sorununuzu kısaca özetleyin"
                    className="h-12"
                  />
                </div>

                {/* Priority */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">Öncelik Seviyesi</Label>
                  <div className="flex gap-2">
                    {priorities.map((priority) => (
                      <Button
                        key={priority.value}
                        type="button"
                        variant={formData.priority === priority.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleInputChange("priority", priority.value)}
                        className={cn(
                          "transition-all duration-200",
                          formData.priority === priority.value && priority.color
                        )}
                      >
                        {priority.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-medium">
                    Açıklama <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Sorununuzu detaylı bir şekilde açıklayın. Ne yapmaya çalışıyordunuz? Hangi hata mesajını aldınız? Hangi tarayıcıyı kullanıyorsunuz?"
                    className="min-h-[150px] resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum 20 karakter. Mevcut: {formData.description.length}
                  </p>
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Ekler (İsteğe bağlı)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Ekran görüntüsü, log dosyası veya diğer belgelerinizi buraya sürükleyin
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.txt,.doc,.docx"
                    />
                    <Button type="button" variant="outline" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Dosya Seç
                      </label>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Maksimum 5 dosya, her biri 10MB'dan küçük olmalı
                    </p>
                  </div>

                  {/* Uploaded Files */}
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Eklenen dosyalar:</p>
                      <div className="space-y-2">
                        {attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-success rounded-full"></div>
                              <span className="text-sm font-medium">{file.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {(file.size / 1024 / 1024).toFixed(1)} MB
                              </Badge>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAttachment(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-destructive">*</span> Zorunlu alanlar
                  </p>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Talebi Gönder
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Help Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">💡 Daha Hızlı Yardım İçin İpuçları</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Teknik problemler için:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Ekran görüntüsü ekleyin</li>
                    <li>• Tarayıcı ve işletim sistemi bilgisi verin</li>
                    <li>• Hangi adımları izlediğinizi açıklayın</li>
                    <li>• Hata mesajının tam metnini paylaşın</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Genel sorular için:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Önce <a href="/help-desk" className="text-primary underline">SSS</a> bölümünü kontrol edin</li>
                    <li>• Mümkünse canlı chat kullanın</li>
                    <li>• Hesap bilgilerinizi belirtin</li>
                    <li>• Ne yapmaya çalıştığınızı açıklayın</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitRequest;