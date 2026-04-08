# 🛠️ Technology Stack

## Frontend

* **Next.js** - Server-side rendering and static site generation
* **Tailwind CSS** - Utility-first CSS framework

## Backend

* **Node.js**
* **Express.js** - REST API development
* **Prisma** - Database ORM

## Database

* **PostgreSQL** - Relational database system

## Authentication

Implement authentication using:

* **JWT**
* **Better-Auth**

## Payment Integration

* **SSLCommerz**

## Deployment

You may deploy your project using:

* **Vercel**

### Vercel Environment Variables Setup

Before deploying to Vercel, you need to set up the following environment variables in your Vercel project dashboard:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

```
NEXT_PUBLIC_BASE_URL=https://planora-client.vercel.app
SSL_STORE_ID=your_ssl_store_id_here
SSL_STORE_PASSWORD=your_ssl_store_password_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password_here
```

**Important Notes:**
- Replace the placeholder values with your actual credentials
- For Gmail, use an App Password instead of your regular password
- SSLCommerz credentials are required for payment processing
- The `NEXT_PUBLIC_BASE_URL` should match your Vercel deployment URL

# 📤 Submission Details

Frontend Repo    : https://github.com/AsadFahimTEC/planora-client

Frontend Live    : https://planora-client.vercel.app

---