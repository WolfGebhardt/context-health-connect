# ContextHealth

> Your environment. Your health. Finally connected.

An AI-powered environmental health tracking application that translates your daily environmental context into actionable health insights.

![ContextHealth Overview Dashboard](./public/screenshots/overview.png)
*Dashboard showing Environmental Health Score (68/100), environmental breakdown, AI-powered insights, and personalized recommendations*

## 🌟 Overview

ContextHealth is a proof-of-concept application that demonstrates how passive environmental sensing (GPS location, acoustic patterns, movement) can be transformed into meaningful health intelligence. The app tracks nature exposure, social interactions, noise levels, and indoor/outdoor time to provide research-backed recommendations for improved wellbeing.

## ✨ Features

- **Environmental Health Score**: Real-time scoring (0-100) based on your environmental exposure patterns
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

### 1. Dashboard Overview
![Dashboard Overview](./public/screenshots/overview.png)

The main dashboard displays:
- **Environmental Health Score**: Large circular progress ring (68/100)
- **Environmental Breakdown**: Color-coded progress bars showing:
  - Nature: 15% (green)
  - Social: 30% (blue)
  - Focus: 20% (purple)
  - Noise: 5% (orange)
  - Indoor/Alone: 30% (gray)
- **Health Insights Panel**: Research-backed recommendations with positive reinforcement
- **Tomorrow's Recommendation**: Context-aware suggestions with nearby locations and optimal timing

### 2. Timeline View
![Timeline View](./public/screenshots/timeline.png)

Interactive timeline showing your daily environmental journey:
- **Color-coded segments** for each context type
- **Time blocks** with duration and location
- **Noise levels** displayed for each segment (35dB - 75dB)
- **Context tags** (Quiet, Indoor, Urban, Nature, Social, etc.)
- **Health insights** integrated into each segment
- **Chronological view** from morning to evening

### 3. Health Insights
![Health Insights](./public/screenshots/insights.png)

Detailed AI-powered health insights:
- **Nature Exposure**: Tracking against recommended 60+ minutes daily
- **High Noise Alert**: Warnings about prolonged exposure with mitigation strategies
- **Social Interactions**: Mental health impact analysis
- **Focused Time**: Productivity and deep work recommendations
- **Research citations** for credibility
- **Actionable recommendations** for each insight

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Notifications**: Sonner + Radix UI Toast
- **Data Visualization**: Custom animated components

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
│   ├── ui/             # shadcn/ui base components
│   ├── ScoreRing.tsx   # Animated score visualization
│   ├── TimelineView.tsx # Daily context journey
│   ├── InsightsPanel.tsx # AI insights display
│   ├── StatsBreakdown.tsx # Environmental charts
│   └── RecommendationCard.tsx # Smart suggestions
├── data/
│   └── mockData.ts     # PoC simulation data
├── pages/
│   ├── Index.tsx       # Main dashboard
│   └── NotFound.tsx    # 404 page
├── types/
│   └── environmental.ts # TypeScript definitions
└── lib/
    └── utils.ts        # Helper functions
```

## 🎨 Design System

Health-focused design inspired by Oura and WHOOP:

**Color Palette:**
- Nature: `hsl(142 71% 45%)` - #359a61
- Social: `hsl(217 91% 60%)` - #4d9fff
- Focus: `hsl(262 52% 47%)` - #7e3af2
- Noise: `hsl(25 95% 53%)` - #ff7849
- Indoor: `hsl(215 16% 47%)` - #646d7b

**Design Principles:**
- Minimalist, data-focused interface
- Smooth animations for engagement
- High contrast for readability
- Responsive across all devices

## 📊 Current Status: Proof of Concept

**Demonstrates:**
- Environmental context classification
- Health insight generation
- Recommendation engine
- Modern data visualization

**Simulated Day Scenario:**
- 7 context switches (home → commute → office → park → café → park → home)
- 10 hours tracked (8:00 AM - 7:00 PM)
- Locations: Stuttgart area (Stadtgarten Park, Rosenstein Park)
- Noise levels: 35-75 dB
- Research-backed correlations

## 🔮 Development Roadmap

### Phase 1: MVP (3 months)
- [ ] Real-time GPS integration
- [ ] Acoustic sensing (microphone permissions)
- [ ] ML context classification models
- [ ] User authentication & data persistence
- [ ] 7-day & 30-day trend views

### Phase 2: Healthcare Integration (6 months)
- [ ] HIPAA-compliant data storage
- [ ] Healthcare provider portal
- [ ] Data export for consultations
- [ ] Correlation analysis tools
- [ ] API for EHR integration

### Phase 3: Scale (12 months)
- [ ] iOS & Android native apps
- [ ] Wearable integration (Apple Watch, Fitbit)
- [ ] Community benchmarking (anonymized)
- [ ] Public API
- [ ] Multi-language support

## 🎯 Use Cases

**Consumer (B2C):**
- Wellness optimization
- Mental health support through nature tracking
- Urban noise pollution awareness
- Work-life balance monitoring

**Healthcare (B2B):**
- Environmental context for diagnosis
- Treatment efficacy via environmental factors
- Research data collection
- Preventive care insights

## 🔬 Research Foundation

All insights reference peer-reviewed research:

1. **Nature Exposure**: 60+ minutes daily reduces stress by 28% (environmental psychology studies)
2. **Social Connection**: Regular interaction reduces depression risk by 50% (longitudinal health studies)
3. **Noise Pollution**: Exposure >70dB increases stress hormones (occupational health research)

## 🔒 Privacy & Security

**Current PoC**: Uses simulated data only  
**Future Implementation**:
- End-to-end encryption
- Local-first data storage
- Opt-in data sharing
- GDPR & HIPAA compliance
- User-controlled data deletion

## 🤝 Contributing

Proof-of-concept for grant proposal demonstration. For collaboration inquiries, open an issue.

## 📄 License

MIT License - Created with Lovable

## 🔗 Links

- [Live Demo](https://lovable.dev/projects/5155ad08-15cd-4599-a268-43759bc0a9cf)
- [Lovable Platform](https://lovable.dev)
- [Documentation](https://docs.lovable.dev/)

---

**Built with [Lovable](https://lovable.dev)** ❤️  
*From concept to prototype in hours, not weeks*
