# Getting Started

<p align="center">
  <a href="https://www.youtube.com/@codeofrelevancy" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://paradiseofcreativity.com/wp-content/uploads/2023/02/Code-of-Relevancy-Logo-White-Plain.png" alt="Code of Relevancy">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.youtube.com/@codeofrelevancy/videos" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/youtube/channel/subscribers/UCVcJ4UAyjXS2iihmiIa0xXg?style=social" alt="youtube subscribers"></a>
  <a href="https://dev.to/codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/DEV-Community-blue" alt="dev community"></a>
  <a href="https://medium.com/@codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Medium-Blog-green" alt="medium blog"></a>
  <a href="https://twitter.com/intent/follow?screen_name=codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/twitter/follow/codeofrelevancy?style=social" alt="twitter follow"></a>
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Create your project

Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```markdown
npx create-next-app@latest crypto-price-tracker-app --typescript --eslint
cd crypto-price-tracker-app
```

### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```markdown
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```markdown
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js}",
    "./configs/**/*.{js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```markdown
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Header

```markdown
Cryptocurrencies
```

```markdown
Digital money for a digital world.
```

```markdown
Cryptocurrencies are digital or virtual currencies that use cryptography for security and are decentralized, meaning they are not controlled by any government or financial institution.
```

## Config

Path: configs\index.js

```markdown
const CRYPTOCURRENCIES = [
  {
    id: "BTC",
    name: "Bitcoin",
    symbol: "BTCBUSD",
    iconCode: 1,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://blockchair.com/bitcoin",
  },
  {
    id: "ETH",
    name: "Etherium",
    symbol: "ETHBUSD",
    iconCode: 1027,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://etherscan.io",
  },
  {
    id: "BNB",
    name: "BNB",
    symbol: "BNBBUSD",
    iconCode: 1839,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://bscscan.com",
  },
  {
    id: "XRP",
    name: "XRP",
    symbol: "XRPBUSD",
    iconCode: 52,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://xrpscan.com",
  },
  {
    id: "DOGE",
    name: "Dogecoin",
    symbol: "DOGEBUSD",
    iconCode: 74,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://blockchair.com/dogecoin",
  },
  {
    id: "MATIC",
    name: "Polygon",
    symbol: "MATICBUSD",
    iconCode: 3890,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://polygonscan.com",
  },
  {
    id: "SOL",
    name: "Solana",
    symbol: "SOLBUSD",
    iconCode: 5426,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://explorer.solana.com",
  },
  {
    id: "SHIB",
    name: "Shiba Inu",
    symbol: "SHIBBUSD",
    iconCode: 5994,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer:
      "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
  },
  {
    id: "APE",
    name: "ApeCoin",
    symbol: "APEBUSD",
    iconCode: 18876,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer:
      "https://etherscan.io/token/0x4d224452801aced8b2f0aebe155379bb5d594381",
  },
  {
    id: "NEAR",
    name: "NEAR Protocol",
    symbol: "NEARBUSD",
    iconCode: 6535,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://explorer.near.org",
  },
  {
    id: "LUNC",
    name: "Terra Classic",
    symbol: "LUNCBUSD",
    iconCode: 4172,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://finder.terra.money/classic",
  },
  {
    id: "LUNA",
    name: "Terra",
    symbol: "LUNABUSD",
    iconCode: 20314,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    explorer: "https://finder.terra.money",
  },
];
export { CRYPTOCURRENCIES };
```

## Crypto

Crypto Icon URL: https://s2.coinmarketcap.com/static/img/coins/128x128/1.png

Explorer SVG:

```markdown
<svg
  className="w-5 h-5 ml-2"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
</svg>
```

## Crypto Endpoint

Crypto Endpoint URL: https://api.binance.com/api/v3/ticker/24hr?symbols=['ETHUSDC','SOLUSDC']

## Credit

Powered by [Binance](https://www.binance.com)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
