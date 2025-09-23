# Overview

This is a full-stack property management application built for a Turkish building management company. The application provides both a public-facing website showcasing services and an admin dashboard for managing buildings, flats, residents, and fee payments. It features a modern React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application using modern React patterns with TypeScript for type safety
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **State Management**: TanStack Query for server state management and API caching
- **Styling**: Tailwind CSS for utility-first styling with shadcn/ui component library for consistent UI patterns
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js Server**: RESTful API server with middleware for request logging and error handling
- **Storage Layer**: Abstract storage interface pattern allowing for different database implementations
- **Development Setup**: Vite integration for development mode with HMR support
- **Production Build**: ESBuild for server bundling with Node.js target

## Data Storage
- **Database**: PostgreSQL with connection through Neon serverless
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema Design**: Relational model with entities for users, buildings, flats, residents, fee payments, maintenance requests, contact requests, and blog posts
- **Migrations**: Drizzle Kit for database migrations and schema updates

## Component System
- **UI Components**: shadcn/ui library providing accessible, customizable components
- **Layout Components**: Reusable navbar and footer components
- **Page Sections**: Modular sections for home page (hero, services, about, references, blog preview, contact form, admin preview, FAQ)
- **Admin Components**: Specialized dashboard components for statistics, activity feeds, and quick actions

## API Design
- **RESTful Endpoints**: Standard HTTP methods for CRUD operations
- **Request Validation**: Zod schemas for runtime type checking and validation
- **Error Handling**: Centralized error middleware with appropriate HTTP status codes
- **Response Format**: Consistent JSON responses with proper error messages

# External Dependencies

## Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL connection for scalable database access
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: CLI tool for migrations and schema management

## Frontend Libraries
- **@tanstack/react-query**: Server state management and API caching
- **@radix-ui/***: Headless UI components for accessibility
- **@hookform/resolvers**: Form validation resolvers
- **wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation utilities
- **class-variance-authority**: CSS-in-TS utility for component variants
- **tailwindcss**: Utility-first CSS framework

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **eslint & prettier**: Code linting and formatting
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Styling & UI
- **tailwindcss**: CSS framework with custom design tokens
- **lucide-react**: Icon library for consistent iconography
- **shadcn/ui**: Component library built on Radix UI primitives