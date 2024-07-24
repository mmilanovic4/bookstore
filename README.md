# Bookstore

## Requirements

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Install [Next.js](https://nextjs.org/)

```
npx create-next-app@latest
```

## Install [Prisma ORM](https://www.prisma.io/)

```
npm install prisma --save-dev
npx prisma init
```

- Check `.env`
- Create schema and sync it with database:

```
npx prisma db push
```

- Or generate schema if already exists:

```
npx prisma db pull
```

- Google "Best practice for instantiating Prisma Client with Next.js" -> `@/lib/db`
