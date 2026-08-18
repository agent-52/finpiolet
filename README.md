# FinPilot

FinPilot is a full-stack personal finance management platform that helps users keep track of their money, understand their spending habits, manage budgets and goals, and get AI-assisted insights from their financial data.

The main idea behind FinPilot was not to build another expense tracker with a few charts. I wanted the application to actually process the user's financial data and turn it into something useful.

## Live Demo

**Live:** https://finpiolet.vercel.app

## Features

### Authentication

- Email/password authentication
- Google OAuth
- Secure cookie-based refresh token flow
- Access token authentication
- Automatic token refresh through Axios interceptors
- Google account linking for existing users
- Protected routes

### Dashboard

The dashboard gives users a quick overview of their current financial situation.

- Total income
- Total expenses
- Current balance
- Budget overview
- Recent transactions
- Spending breakdown
- Financial trends
- AI-generated insights

### Transactions

Users can manage their income and expenses from one place.

- Create transactions
- Edit transactions
- Delete transactions
- Categorize transactions
- Filter and view transaction history
- Income and expense tracking
- Transaction statistics

### Categories

FinPilot supports both system-defined and user-created categories.

- Predefined system categories
- Custom user categories
- Create, update and delete custom categories
- Category-based spending analysis

System categories are shared across users while custom categories belong to the individual user.

### Budgets

Users can create budgets to control their spending.

- Create budgets
- Set spending limits
- Track budget usage
- Monitor remaining budget
- Compare actual spending against planned spending

### Financial Goals

Users can create financial goals and track their progress over time.

- Create goals
- Set target amounts
- Track progress
- Update goal information
- Monitor remaining amount

### Reports and Analytics

FinPilot processes transaction data to provide a better understanding of spending patterns.

- Income vs expense analysis
- Category-wise spending
- Spending trends
- Monthly financial summaries
- Budget performance
- Financial statistics
- Interactive charts

Charts and visualizations are built with Recharts.

### AI Insights

The AI layer is built around the user's actual financial data rather than simply providing a generic chatbot.

FinPilot analyzes stored financial information and generates insights such as:

- Unusual spending patterns
- High-spending categories
- Changes in spending behavior
- Budget-related observations
- Suggestions based on financial patterns

AI insights are generated periodically and stored in the database instead of generating a new AI request every time the dashboard is opened.

Groq is currently used for the AI generation layer.

### Data Import and Export

FinPilot also supports working with financial data outside the application.

- CSV transaction import
- CSV data export
- Structured transaction processing

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Zustand
- TanStack Query
- Tailwind CSS
- Recharts
- Axios

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis

### Infrastructure and Services

- Vercel — frontend deployment
- Render — backend deployment
- Supabase — PostgreSQL
- Upstash — Redis
- Groq — AI generation

## Architecture

The backend follows a service/repository structure instead of putting database and business logic directly inside controllers.

```text
Request
   |
   v
Controller
   |
   v
Service
   |
   +------> Repository ------> PostgreSQL
   |
   +------> Redis Cache
   |
   +------> AI Service
```

This keeps the responsibilities separated and makes the business logic easier to maintain.

### Caching

Redis is used as a cache layer for frequently accessed data.

FinPilot follows a cache-aside approach:

```text
Request
   |
   v
Check Redis
   |
   +---- Cache hit ----> Return data
   |
   +---- Cache miss
             |
             v
        PostgreSQL
             |
             v
        Store in Redis
             |
             v
        Return data
```

When data is modified, the relevant cache entries are invalidated so that subsequent requests receive fresh data.

### AI Insight Generation

AI insights are not generated on every request.

The backend periodically processes the user's financial data, sends the relevant information to the AI service, and stores the generated insight.

```text
Financial Data
      |
      v
AI Insight Job
      |
      v
Groq API
      |
      v
Generated Insight
      |
      v
PostgreSQL
```

The frontend can then retrieve the stored insight without making an unnecessary AI request every time the dashboard loads.

## Project Structure

A simplified version of the project structure looks like this:

```text
FinPilot
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── services
│   │   ├── store
│   │   └── ...
│   └── ...
│
└── Backend
    ├── src
    │   ├── controllers
    │   ├── services
    │   ├── repositories
    │   ├── routes
    │   ├── middleware
    │   ├── config
    │   └── ...
    │
    ├── prisma
    │   └── schema.prisma
    └── ...
```

## Run Locally with Docker

The easiest way to run FinPilot locally is with Docker Compose.

You don't need to install PostgreSQL or Redis separately. Docker starts the required services for you.

### Prerequisites

- Docker
- Docker Compose
- Git

### 1. Clone the repository

```bash
git clone https://github.com/agent-52/finpiolet.git
cd finpiolet
```

### 2. Create the environment file

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Fill in the required API credentials in `.env`.

### 3. Start the project

```bash
docker compose up --build
```

This starts the FinPilot application together with its local PostgreSQL and Redis services.

Once the containers are running:

```text
Frontend → http://localhost:5173
Backend  → http://localhost:3000
```

Prisma migrations and client generation are handled as part of the backend container startup.

### Environment Variables

An `.env.example` file is included in the repository.

```env
# -------------------------
# Backend
# -------------------------

PORT=3000
NODE_ENV=development

# Local PostgreSQL
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/finpilot

# Local Redis
REDIS_URL=redis://redis:6379

# Authentication
JWT_SECRET=change_this_to_a_random_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# AI
GROQ_API_KEY=your_groq_api_key

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Email / OTP
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
```

### Important

The `.env.example` file contains placeholders only.

Never commit your actual `.env` file, API keys, database passwords, JWT secrets, or OAuth secrets to GitHub.

### Useful Docker Commands

Start the application:

```bash
docker compose up
```

Start and rebuild after code/configuration changes:

```bash
docker compose up --build
```

Run in the background:

```bash
docker compose up -d
```

Stop the application:

```bash
docker compose down
```

Stop the application and remove the local database volume:

```bash
docker compose down -v
```

### Local Services

Docker Compose runs:

```text
┌─────────────────────────────────────┐
│          FinPilot Local             │
│                                     │
│  Frontend ────────► Backend         │
│                       │             │
│              ┌────────┴────────┐    │
│              ▼                 ▼    │
│         PostgreSQL           Redis  │
│                                     │
└─────────────────────────────────────┘
```

The local PostgreSQL and Redis containers are isolated from the production infrastructure.

Production uses:

```text
Frontend  → Vercel
Backend   → Render
Database  → Supabase
Redis     → Upstash
AI        → Groq
```

while Docker provides the equivalent local development environment.

## Troubleshooting

If the application was previously started and you want a completely fresh database:

```bash
docker compose down -v
docker compose up --build
```

This removes the local PostgreSQL volume and creates a fresh database.

If you only want to rebuild the containers without deleting your database:

```bash
docker compose down
docker compose up --build
```

## Run Locally without Docker

### Prerequisites

- Node.js
- PostgreSQL
- Redis or an Upstash Redis database
- Groq API key
- Google OAuth credentials if Google authentication is enabled

### Backend

```bash
cd Backend
npm install
```

Create a `.env` file with the required configuration:

```env
DATABASE_URL=
REDIS_URL=

JWT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GROQ_API_KEY=

FRONTEND_URL=

EMAIL_USER=
EMAIL_PASSWORD=
```

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=
VITE_GOOGLE_CLIENT_ID=
```

Start the frontend:

```bash
npm run dev
```

## Deployment

The production setup separates the frontend, backend and infrastructure services.

```text
                 Vercel
                   |
             React Frontend
                   |
                   v
                Render
                   |
             Express API
              /        \
             /          \
            v            v
       Supabase        Upstash
      PostgreSQL        Redis
            |
            v
        Groq API
```

The frontend is deployed on Vercel and the backend runs as a Node.js service on Render.

PostgreSQL is hosted on Supabase and Redis is hosted on Upstash.

## What I Learned Building It

FinPilot started as a finance tracker, but most of the interesting work ended up being around the parts behind the UI.

Some of the things I worked through while building it:

- Designing a service/repository backend architecture
- Handling authentication and token refresh flows
- Integrating Google OAuth with an existing authentication system
- Preventing duplicate accounts during OAuth account linking
- Designing cache invalidation around frequently changing financial data
- Working with Prisma and PostgreSQL in production
- Handling production database connection differences between local and hosted environments
- Integrating an AI service with application-generated financial data
- Storing AI results instead of repeatedly generating the same insights
- Deploying and connecting multiple independent services
- Managing frontend server state with TanStack Query

The project also gave me a better understanding of the difference between making something work locally and making the same system work reliably in production.

## Future Improvements

Some features I would like to explore in future versions include:

- Bank account integration
- Automatic transaction synchronization
- Receipt and bank-statement OCR
- Subscription detection
- More advanced financial forecasting
- Better anomaly detection
- Personalized financial recommendations
- More detailed financial reports

## License

This project is currently for learning and portfolio purposes.
