# E-CART

This is a e-commerce web application mimicing few functionalities of original e-commerce website.

## Instructions To start the application:
-> npm run dev
### If you just want to run server then:
-> npm run server
### If you just want to run frontend:
-> npm run client
### To import already existing data:
-> npm run data:import
### To Destro already existing data:
-> npm run data:destroy

## Technologies Used

MERN stack
1) MongoDB 
2) Express.js
3) ReactJS
4) NodeJS
6) Bootstrap
7) VSCode
6) Git

## Functionalities Implemented : 
1) User/Customer 
    * Login(For existing user)
    * Register(New User)    
2) Administrator/Seller 
    * Login(For existing seller)
    * Register(New Seller)
3) Seller can 
    * Create
    * Update
    * Delete Products and all their attributes.
4) User can search for items using search box
5) User can modify their cart 
    * Delete from cart
    * Add more items
    * Add more quantity of same item
6) Dummy RazorPay Interface is implemented where user can pay in any mode of transaction
    * UPI
    * NetBanking 
    * QR 
    * Credit/Debit Card 
7) Since it is Dummy interface he can have any number of accounts
8) Ordered items will be shown on seller interface 
9) Seller Controls the Delivery i.e he can mark as Delivered
9) Seller Dashboard contains items which are delivered or not delivered
10) Seller is considered as advertiser in this case , so seller can 
    * CREATE
    * DELETE
    * MODIFY coupons for a given product
11) Discount amount will be displayed and reduced from overall amount of user items.
12) Checkout steps
13) Pagination and carousel implemented in frontend.



