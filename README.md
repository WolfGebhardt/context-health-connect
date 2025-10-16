# ContextHealth

> Your environment. Your health. Finally connected.

An AI-powered environmental health tracking application that translates your daily environmental context into actionable health insights.

![ContextHealth Overview Dashboard](https://5155ad08-15cd-4599-a268-43759bc0a9cf.lovableproject.com/lovable-uploads/b0739fd3-9bdc-44ce-b067-c1e55be7b7dd.png)
*Environmental Health Score dashboard showing daily breakdown and AI-powered insights*

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

## 📸 Screenshots

### Dashboard Overview
The main dashboard displays your Environmental Health Score (0-100) based on today's environmental exposure, with a detailed breakdown showing:
- Nature time (green)
- Social interactions (blue)
- Focused work (purple)
- Noise exposure (orange)
- Indoor/alone time (gray)

### Health Insights Panel
AI-powered insights provide research-backed recommendations:
- **Nature Exposure**: Tracks outdoor time against the recommended 60+ minutes for optimal stress reduction
- **Noise Alerts**: Warns about prolonged high-decibel exposure with actionable mitigation strategies
- **Social Engagement**: Monitors interaction time and its impact on mental health

### Smart Recommendations
Context-aware suggestions for tomorrow, including:
- Specific locations nearby (e.g., "Rosenstein Park - 5 min walk")
- Optimal timing based on environmental factors
- Expected health benefits with research citations

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
│   ├── TimelineView.tsx # Daily context timeline
│   ├── InsightsPanel.tsx # AI-powered health insights
│   ├── StatsBreakdown.tsx # Environmental breakdown charts
│   └── RecommendationCard.tsx # Smart recommendations
├── data/               # Mock data for PoC
│   └── mockData.ts     # Simulated day scenario
├── pages/              # Route pages
│   ├── Index.tsx       # Main dashboard
│   └── NotFound.tsx    # 404 page
├── types/              # TypeScript type definitions
│   └── environmental.ts # Core data types
└── lib/                # Utility functions
```

## 🎨 Design System

The app uses a health-focused design inspired by premium wellness trackers like Oura and WHOOP:

- **Color Palette**:
  - Green (#359a61): Nature contexts
  - Blue (#4d9fff): Social interactions
  - Purple (#7e3af2): Focused environments
  - Orange (#ff7849): High noise exposure
  - Gray (#646d7b): Indoor/alone time

- **Typography**: Clean, readable sans-serif for optimal data visualization
- **Animations**: Smooth fade-ins and progress transitions for engaging UX

## 📊 Current Status

This is a **proof-of-concept** application demonstrating the core value proposition of environmental health tracking. The current version uses simulated data to showcase:

- Environmental context detection and classification
- Health insight generation from environmental data
- Actionable recommendation systems
- User-friendly health data visualization

### Simulated Day Scenario
The PoC includes a realistic day simulation with:
- 7 environmental context switches
- 10 hours of tracked time
- Multiple location types (home, commute, office, parks, café)
- Varying noise levels (35-75 dB)
- Research-backed health correlations

## 🔮 Future Development

### Phase 1: MVP (3 months)
- Real-time GPS and acoustic sensing integration
- Machine learning models for context classification
- User accounts and data persistence
- Historical trend analysis (7-day, 30-day views)

### Phase 2: Healthcare Integration
- Integration with healthcare provider systems
- Export data for medical consultations
- Correlation analysis with health outcomes
- Privacy-compliant data sharing

### Phase 3: Mobile & Scale
- Native mobile applications (iOS/Android)
- Wearable device integration
- Community features and anonymized benchmarks
- API for third-party integrations

## 🎯 Use Cases

### Consumer (B2C)
- Personal wellness optimization
- Stress reduction through environmental awareness
- Nature exposure tracking for mental health
- Noise pollution awareness

### Healthcare (B2B)
- Contextual data for practitioners
- Environmental factors in diagnosis
- Treatment efficacy monitoring
- Research data collection

## 🔬 Research Foundation

The app's insights are based on peer-reviewed research:
- 60+ minutes daily nature exposure reduces stress by 28% (source: environmental psychology studies)
- Regular social interaction reduces depression risk by 50% (source: longitudinal health studies)
- Prolonged noise exposure >70dB increases stress hormones (source: occupational health research)

## 🤝 Contributing

This is currently a proof-of-concept project. For questions or collaboration opportunities, please open an issue.

## 📄 License

This project was created using Lovable and is available under the MIT License.

## 🔗 Links

- [Live Demo](https://lovable.dev/projects/5155ad08-15cd-4599-a268-43759bc0a9cf)
- [Lovable Documentation](https://docs.lovable.dev/)

---

Built with [Lovable](https://lovable.dev) ❤️
