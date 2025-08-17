# Mystic Realms - React 19 Gaming Template

A comprehensive React 19 + TypeScript gaming application template featuring advanced game mechanics, inventory management, and administrative tools.

## 🚀 Features

### Core Functionality
- **React 19** with latest features and optimizations
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** with custom CSS variables and dark mode support
- **Controller Pattern** architecture for clean separation of concerns
- **Vite** for fast development and building

### Game Features
- **Dual Portal System**: Separate player and admin access points
- **Real-time Game Ticks**: Simulated game time with live updates
- **Advanced Inventory System**:
  - HTML5 drag-and-drop functionality
  - Item stacking and sorting
  - Equipment system with visual slots
  - Debounced search with real-time filtering
- **Player Management**: Character stats, levels, and progression
- **Quest System**: Active quest tracking and completion
- **Achievement System**: Unlockable achievements with progress tracking

### Administrative Features
- **Full CRUD Operations**: Complete item management system
- **Optimistic Updates**: Instant UI feedback with rollback on failure
- **Modal Forms**: Tabbed interface for complex item creation/editing
- **API Integration**: Robust API helper with retry logic and offline detection
- **User Management**: Administrative oversight tools

### Technical Features
- **Dark Mode**: Persistent theme switching with localStorage
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Animation System**: Smooth transitions and micro-interactions
- **Modular Architecture**: Each component has dedicated controller modules
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🏗️ Architecture

### File Structure
```
src/
├── components/ui/          # Reusable UI components with controllers
├── controllers/            # Business logic controllers
├── hooks/                  # Custom React hooks
├── models/                 # TypeScript interfaces and types
├── pages/                  # Application pages (≤100 lines each)
├── services/               # API services and utilities
└── utils/                  # Utility functions and seed data
```

### Controller Pattern
Each UI component follows the controller pattern:
- `Component.tsx` - React component (presentation)
- `ComponentController.ts` - Business logic and state management

## 🎮 Usage

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the application at `http://localhost:5173`

### Login Credentials
- **Password**: `123` (for both player and admin)
- **Admin Access**: Include "admin" in username for admin privileges

### Key Pages
- **Landing**: Animated portal selection with theme toggle
- **Player Dashboard**: Character overview, stats, and quest management
- **Admin Dashboard**: System management and item CRUD operations
- **Inventory**: Drag-and-drop inventory with equipment system

## 🔧 Configuration

### Theme System
The application supports light/dark themes with CSS variables:
- Primary colors with 9 shade variations
- Persistent theme selection via localStorage
- Smooth transitions between themes

### API Configuration
The API helper is configured for:
- Base URL: `/api` (placeholder endpoints)
- 3 retry attempts with exponential backoff
- 5-second timeout per request
- Automatic offline detection

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Features
- Collapsible sidebar on mobile
- Responsive grid layouts
- Touch-friendly interface elements
- Optimized for all screen sizes

## 🎨 Design System

### Colors
- **Primary**: Blue color ramp (50-900)
- **Secondary**: Cyan accent colors
- **Success/Warning/Error**: Semantic color system
- **Dark Mode**: Inverted color scheme

### Typography
- **Body Text**: 150% line height
- **Headings**: 120% line height
- **Font Weights**: Regular, Medium, Bold (max 3 weights)

### Animations
- **Fade In**: 0.5s ease-in-out
- **Slide In**: 0.3s ease-out
- **Portal Glow**: 2s infinite alternate
- **Spell Cast**: 1.5s infinite (loading states)

## 🔌 API Endpoints (Placeholders)

All API endpoints are placeholder implementations:

```
GET    /api/items          - Fetch all items
POST   /api/items          - Create new item
PUT    /api/items/:id      - Update item
DELETE /api/items/:id      - Delete item

GET    /api/players        - Fetch all players
POST   /api/auth/login     - User authentication
```

## 🧪 Demo Data

The application includes comprehensive seed data:
- **3 Character Classes**: Warrior, Mage, Rogue
- **Sample Items**: Weapons, armor, consumables
- **Demo Player**: Pre-configured character
- **Quest System**: Sample quests with progress tracking

## 📋 Development Guidelines

### Page Constraints
- Each page file must be ≤100 lines
- Use controller pattern for business logic
- Implement proper error boundaries

### Code Organization
- Modular file structure
- Clear separation of concerns
- TypeScript interfaces for all data structures
- Comprehensive error handling

## 🚀 Production Readiness

### Features
- **Build Optimization**: Vite-powered bundling
- **Code Splitting**: Automatic chunk splitting
- **Tree Shaking**: Dead code elimination
- **TypeScript**: Full type checking
- **ESLint**: Code quality enforcement

### Performance
- **Debounced Search**: 300ms delay for optimal UX
- **Optimistic Updates**: Instant UI feedback
- **Virtual Scrolling**: Ready for large datasets
- **Lazy Loading**: Component-based loading

## 📄 License

This template is provided as-is for educational and development purposes. Feel free to modify and extend according to your needs.

---

**Built with ❤️ using React 19, TypeScript, and modern web technologies.**