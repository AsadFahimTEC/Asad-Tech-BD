# Asad Tech BD

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![SSLCommerz](https://img.shields.io/badge/SSLCommerz-FF6B35?style=for-the-badge&logo=ssl&logoColor=white)](https://www.sslcommerz.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A comprehensive platform designed to connect tutors and students, facilitating seamless booking, payment processing, and management through an intuitive web application.

## 🚀 Features

- **User Authentication**: Secure registration and login using JWT and Better-Auth
- **Tutor Profiles**: Detailed profiles with availability management
- **Booking System**: Easy scheduling and management of tutoring sessions
- **Payment Integration**: Secure payments via SSLCommerz
- **Admin Dashboard**: Comprehensive admin panel for managing users, bookings, and categories
- **Review System**: User reviews and ratings for tutors
- **Email Notifications**: Automated emails for bookings, payments, and rewards
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

## 🛠️ Technology Stack

### Frontend
- **Next.js** - Server-side rendering and static site generation for optimal performance
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for REST API development
- **Prisma** - Next-generation ORM for type-safe database access

### Database
- **PostgreSQL** - Robust relational database system

### Authentication
- **JWT** - JSON Web Tokens for secure authentication
- **Better-Auth** - Enhanced authentication library

### Payment Integration
- **SSLCommerz** - Secure payment gateway for Bangladesh

### Deployment
- **Vercel** - Cloud platform for static sites and serverless functions

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AsadFahimTEC/Asad-Tech-BD.git
   cd Asad-Tech-BD
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   SSL_STORE_ID=your_ssl_store_id_here
   SSL_STORE_PASSWORD=your_ssl_store_password_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password_here
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🚀 Deployment

### Vercel Deployment

1. **Push your code to GitHub**:
   Ensure your repository is pushed to GitHub.

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com) and sign in.
   - Click "New Project" and import your GitHub repository.

3. **Configure Environment Variables**:
   In your Vercel project dashboard:
   - Navigate to **Settings** → **Environment Variables**.
   - Add the following variables:
     ```
     NEXT_PUBLIC_BASE_URL=https://planora-client.vercel.app
     SSL_STORE_ID=your_ssl_store_id_here
     SSL_STORE_PASSWORD=your_ssl_store_password_here
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_app_password_here
     DATABASE_URL=your_database_connection_string
     ```

4. **Deploy**:
   - Vercel will automatically deploy your application.
   - Your site will be live at the provided Vercel URL.

**Important Notes**:
- Replace placeholder values with your actual credentials.
- For Gmail, use an App Password instead of your regular password.
- SSLCommerz credentials are required for payment processing.
- Ensure the `NEXT_PUBLIC_BASE_URL` matches your Vercel deployment URL.

## 📤 Submission Details

- **Frontend Repository**: [https://github.com/AsadFahimTEC/Asad-Tech-BD](https://github.com/AsadFahimTEC/Asad-Tech-BD)
- **Frontend Live**: [https://planora-client.vercel.app](https://planora-client.vercel.app)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Next.js and Tailwind CSS.