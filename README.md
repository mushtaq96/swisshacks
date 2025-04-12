# XRPL Wallet

Next.js + Tailwind CSS + TypeScript wallet interface for XRPL

## Features

- XRPL Testnet connection
- Wallet generation
- NFT minting
- Transaction history
- Loading states
- Error handling

## Setup

```bash
npm install
```

## Environment Variables

Create `.env`:

```
NEXT_PUBLIC_CLIENT=wss://s.altnet.rippletest.net:51233
NEXT_PUBLIC_EXPLORER_NETWORK="testnet"
```

## API Endpoints

```http
GET /api/connect
POST /api/generate-wallet
POST /api/mint-ticket
POST /api/transaction-history
```

## Usage

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
