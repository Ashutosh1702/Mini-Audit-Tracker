# Mini Audit Tracker

A simple audit workflow application that allows users to create, track, and manage observations.

## Features

- Create and manage observations with titles, descriptions, and severity levels
- Assign observations to team members
- Track observation status (Open, In Progress, Closed)
- Upload and preview supporting evidence
- Filter observations by status and severity
- View status distribution in a pie chart
- Responsive design with Tailwind CSS
- Data persistence using localStorage

## Tech Stack

- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Chart.js for data visualization
- Local Storage for data persistence

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd mini-audit-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `/src/components` - React components
- `/src/context` - Context providers for state management
- `/src/types` - TypeScript type definitions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
