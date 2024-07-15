

Food Delivery Full-Stack Website

<br>
This project is a full-stack web application that allows users to order food online, featuring a user-friendly interface, filtering by category, secure payment processing with Stripe, a comprehensive checkout page, and an admin panel for restaurant management.
<br>
<br>
Features:



 1.User-friendly Interface:  The website is designed to be easy to navigate and use for customers with a focus on clarity   and intuitive interactions.
 
 2.Category Filtering:  Users can easily filter restaurants by category, making it simpler to find their desired food options.

 3.Secure Payment Processing:  Stripe integration ensures a safe and reliable payment experience for customers.

 4.Comprehensive Checkout Page:  The checkout page clearly summarizes the order details (items, quantities, prices, delivery fees) and provides multiple payment options with Stripe.

 5.Admin Panel:  Restaurant owners or administrators can manage their menus, update pricing, track orders, and access important statistics through a dedicated admin interface.


<br>
<br>
Technologies:


 Frontend: React <br>
 Backend: Node.js/Express.js<br>
 Database: MongoDB<br>
 Payment Gateway: Stripe<br>


<br>
<br>
Live website 🔗:https://food-del-frontend-7swt.onrender.com<br>


<br>
<br>
Installation:




  step 1: Clone the repository:

      https://github.com/riyalchandrakar/Full-Stack.git   
   <br>
  step 2: Install dependencies:
   
   cd food-del\admin><br>
   npm install 

   cd food-del\backend><br>
   npm install

   cd food-del\frontend><br>
   npm install


<br>
<br>
Note: you can skip step 3 & 4 if you don't want to create your own connection string and stripe API key.

<br>
<br>
   
step 3: Configure database connection:<br>


   - create and Copy the Connection String And Paste It inside food-del\backend\config>  file `db.js` replace password    with password you set previously.


<br>

step 4: Configure Stripe:<br>


   - Create a Stripe account and obtain your API key.
   -Open .env file in backend folder paste your stripe secret key in STRIPE_SECRET_KEY variable.

<br>
<br>

Running the Application:


   step 1: 
   
   Start the development server:
   
   cd food-del\backend><br>
   npm  run server

   step 2:
  
   cd food-del\admin><br>
   npm  run dev

   cd food-del\frontend><br>
   npm  run dev
   
 The application will typically launch in your default web browser.



