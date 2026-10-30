# Recipe Rotator

Recipe Rotator is a full-stack recipe organizer that is intended to help you
decide what to cook. Add recipes to your collection, browse them, and
eventually let the application choose a recipe at random.

The project is split into:

- **Frontend** - React 19, Vite, React Router, Tailwind CSS, and Headless UI.
- **Backend** - Express 5, TypeScript, Prisma 7, and PostgreSQL.

## Project status

The backend currently provides a working CRUD API for recipes, including a
random-recipe endpoint. The frontend contains the application layout,
navigation, add-recipe dialog, recipe roller, and recipe-list views; some of
the UI is still a scaffold and is not yet connected to the API.

## Requirements

- Node.js 20 or newer
- npm
- PostgreSQL

## Getting started

Clone the repository and install dependencies in both application folders:

```bash
git clone https://github.com/SenPr/recipe-rotator.git
cd recipe-rotator

cd backend
npm install

cd ../frontend
npm install
```

### Configure the database

Create a PostgreSQL database, then create `backend/.env` with a
`DATABASE_URL` connection string:

```env
DATABASE_URL="postgresql://your_db_user:your_db_password@localhost:5432/recipe_rotator"
```

Apply the committed Prisma migrations and generate the Prisma client:

```bash
cd backend
npx prisma migrate deploy
npx prisma generate
```

For local development where you are changing the Prisma schema, use:

```bash
npx prisma migrate dev
```

Do not commit `backend/.env` or database credentials.

## Run the application

Start the backend from `backend/`. The backend source is TypeScript and the
current package does not define a start script, so run it with a TypeScript
runtime such as `tsx`:

```bash
cd backend
npx tsx src/app.ts
```

The API listens on `http://localhost:3000`.

In a second terminal, start the Vite development server:

```bash
cd frontend
npm run dev
```

Vite will print the local frontend URL, normally
`http://localhost:5173`.

## API

All recipe endpoints are served from `http://localhost:3000/recipes`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/recipes` | List all recipes |
| `GET` | `/recipes/random` | Return one random recipe |
| `GET` | `/recipes/:id` | Return a recipe by ID |
| `POST` | `/recipes` | Create a recipe |
| `PUT` | `/recipes/:id` | Update a recipe |
| `DELETE` | `/recipes/:id` | Delete a recipe |

Recipe requests use JSON. A recipe has the following fields:

```json
{
  "title": "Vegetable Stir Fry",
  "description": "A quick weeknight dinner",
  "ingredients": "Broccoli\nCarrots\nSoy sauce",
  "instructions": "Chop the vegetables.\nStir fry until tender."
}
```

For example, create a recipe with `curl`:

```bash
curl -X POST http://localhost:3000/recipes \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Vegetable Stir Fry\",\"description\":\"A quick weeknight dinner\",\"ingredients\":\"Broccoli\\nCarrots\\nSoy sauce\",\"instructions\":\"Chop the vegetables.\\nStir fry until tender.\"}"
```

An empty collection returns `404 No recipes found` from
`GET /recipes/random`.

## Useful commands

### Frontend

Run these commands from `frontend/`:

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

### Backend

Run these commands from `backend/`:

```bash
npx prisma migrate status  # Check migration status
npx prisma studio          # Open Prisma Studio
npx tsc --noEmit           # Type-check the backend
```

## Repository layout

```text
backend/
  prisma/                 Prisma schema and migrations
  src/
    controllers/          Recipe request handlers
    database/             Prisma/PostgreSQL connection
    routes/               Express routes
    app.ts                Express application entry point
frontend/
  src/
    components/           Reusable UI components
    pages/                Application pages
    App.jsx               Routes and application shell
```

## License

This project is distributed under the [MIT License](./LICENSE).
