# Google Gemini AI API ile Chatbot Projesi

Bu proje, Google Gemini AI API'sını kullanarak React ve Node.js ile bir AI Chatbot oluşturmayı amaçlamaktadır.

## Kurulum

1. Bu depoyu klonlayın:

   ```
   git clone https://github.com/keremdemirsec/ai-chatbot/
   ```

2. Backend ve Frontend klasörlerine gidin ve gerekli bağımlılıkları yükleyin:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

## Kullanım

1. `backend` klasörü içinde bulunan `.env.example` dosyasını `.env` olarak kopyalayın ve Google Gemini AI API anahtarınızı `.env` dosyasında güncelleyin:

   ```bash
   cp .env.example .env
   ```

   `.env` dosyasını düzenleyerek API anahtarınızı aşağıdaki gibi güncelleyin:

   ```plaintext
   API_KEY=API_KEYINIZ
   ```

2. Server'i başlatın:

   ```bash
   cd backend
   node server.js
   ```

3. Frontend'i başlatın:

   ```bash
   cd frontend
   npm run dev
   ```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek chatbot uygulamasını görebilirsiniz.

## Katkılar

Katkılarınızı memnuniyetle karşılıyoruz. Lütfen bir konu açın ya da bir istek gönderin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.
