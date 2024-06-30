

Food Delivery Full-Stack Website

This project is a full-stack web application that allows users to order food online, featuring a user-friendly interface, filtering by category, secure payment processing with Stripe, a comprehensive checkout page, and an admin panel for restaurant management.

Features:

 User-friendly Interface: The website is designed to be easy to navigate and use for customers with a focus on clarity   and intuitive interactions.
 
 Category Filtering:Users can easily filter restaurants by category, making it simpler to find their desired food options.

 Secure Payment Processing: Stripe integration ensures a safe and reliable payment experience for customers.

 Comprehensive Checkout Page: The checkout page clearly summarizes the order details (items, quantities, prices, delivery fees) and provides multiple payment options with Stripe.

 Admin Panel: Restaurant owners or administrators can manage their menus, update pricing, track orders, and access important statistics through a dedicated admin interface.

Technologies:

 Frontend: React 
 Backend: Node.js/Express.js
 Database: MongoDB
 Payment Gateway: Stripe

Installation:


1. Clone the repository:

  https://github.com/riyalchandrakar/Full-Stack.git   
   
2. Install dependencies:
   
   cd food-del\admin>
   npm install 

   cd food-del\backend>
   npm install

   cd food-del\frontend>
   npm install
   
3. Configure database connection:

   - create and Copy the Connection String And Paste It inside food-del\backend\config>  file `db.js` replace password with password you set previously.


4. Configure Stripe:

   - Create a Stripe account and obtain your API key.
   -Open .env file in backend folder paste your stripe secret key in STRIPE_SECRET_KEY variable.


Running the Application:

1. Start the development server:
   
   cd food-del\backend>
   npm  run server

   cd food-del\admin>
   npm  run dev

   cd food-del\frontend>
   npm  run dev
   
 The application will typically launch in your default web browser.



