# ContextHealth

> Your environment. Your health. Finally connected.

An AI-powered environmental health tracking application that translates your daily environmental context into actionable health insights.

## 🌟 Overview

ContextHealth is a proof-of-concept application that demonstrates how passive environmental sensing (GPS location, acoustic patterns, movement) can be transformed into meaningful health intelligence. The app tracks nature exposure, social interactions, noise levels, and indoor/outdoor time to provide research-backed recommendations for improved wellbeing.

## ✨ Features

- **Environmental Health Score**: Real-time scoring based on your environmental exposure patterns
- **Interactive Timeline**: Visualize your day with color-coded environmental contexts
- **AI-Powered Insights**: Research-backed health recommendations based on your environmental data
- **Context Classification**:
  - 🌳 Nature exposure tracking
  - 👥 Social interaction detection
  - 🎯 Focused work environment monitoring
  - 📢 Noise level tracking
  - 🏠 Indoor/outdoor time analysis
- **Smart Recommendations**: Personalized, actionable suggestions for optimal health

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Notifications**: Sonner + Radix UI Toast

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📱 Application Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ScoreRing.tsx   # Environmental health score visualization
│   ├── TimelineView.tsx
│   ├── InsightsPanel.tsx
│   └── ...
├── data/               # Mock data for PoC
├── pages/              # Route pages
├── types/              # TypeScript type definitions
└── lib/                # Utility functions
```

## 🎨 Design System

The app uses a health-focused design inspired by premium wellness trackers like Oura and WHOOP:

- **Color Palette**:
  - Green: Nature contexts
  - Blue: Social interactions
  - Purple: Focused environments
  - Orange: High noise exposure
  - Gray: Indoor/alone time

## 📊 Current Status

This is a **proof-of-concept** application demonstrating the core value proposition of environmental health tracking. The current version uses simulated data to showcase:

- Environmental context detection and classification
- Health insight generation from environmental data
- Actionable recommendation systems
- User-friendly health data visualization

## 🔮 Future Development

- Real-time GPS and acoustic sensing integration
- Machine learning models for context classification
- Historical trend analysis
- Integration with healthcare provider systems
- Native mobile applications (iOS/Android)

## 🤝 Contributing

This is currently a proof-of-concept project. For questions or collaboration opportunities, please open an issue.

## 📄 License

This project was created using Lovable and is available under the MIT License.

## 🔗 Links

- [Live Demo](https://lovable.dev/projects/5155ad08-15cd-4599-a268-43759bc0a9cf)
- [Lovable Documentation](https://docs.lovable.dev/)

---

Built with [Lovable](https://lovable.dev) ❤️
