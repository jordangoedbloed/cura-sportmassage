# Cura Sportmassage Website

Een moderne, responsive website voor Cura Sportmassage gebouwd met React, Vite, Tailwind CSS en Framer Motion.

## ✨ Features

- 🎨 Modern en responsief design
- 💆‍♀️ Behandelingen overzicht
- 🛍️ Producten catalogus
- 📱 WhatsApp integratie
- 📧 Contact formulier met Web3Forms
- 🎭 Smooth animaties met Framer Motion
- 📱 Volledig mobile-responsive

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router DOM** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Web3Forms** - Contact form backend

## 🚀 Installation

1. Clone de repository:
```bash
git clone https://github.com/your-username/cura-sportmassage.git
cd cura-sportmassage
```

2. Installeer dependencies:
```bash
npm install
```

3. Maak een `.env` bestand aan en voeg je Web3Forms access key toe:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

4. Start de development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in je browser.

## 📦 Build voor Productie

```bash
npm run build
```

De geoptimaliseerde bestanden worden gegenereerd in de `dist/` folder.

## 🔧 Configuratie

### WhatsApp Nummer
Update het WhatsApp nummer in de volgende bestanden:
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`

Zoek naar:
```javascript
const phoneNumber = '31612345678' // Vervang met jouw nummer
```

### Web3Forms
1. Ga naar [web3forms.com](https://web3forms.com)
2. Krijg je access key
3. Voeg toe aan `.env` of direct in `src/components/ContactForm.jsx`

## 📁 Project Structuur

```
cura-sportmassage/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ContactForm.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Behandelingen.jsx
│   │   └── Producten.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Kleuren aanpassen
De primaire kleur (cyan) kan aangepast worden in Tailwind classes:
- `bg-cyan-500` → `bg-blue-500`
- `text-cyan-500` → `text-blue-500`
- etc.

### Afbeeldingen vervangen
Plaats je eigen afbeeldingen in `src/assets/images/` en update de imports.

## 📝 License

MIT

## 👤 Author

Cura Sportmassage

## 🤝 Contributing

Contributions, issues en feature requests zijn welkom!

---

Made with ❤️ for Cura Sportmassage