# BankLoanSystem (Take Home Assignment)

## objective 
Design and develop an application for applicants to apply for loans and bank to track and give loans. 

## Assumptions:
1. Application shows both user and bank point of view
2. Authentication & Authorization are already implemented thus this assignment will not implement login page and permissions
3. User may apply for different type of loans
4. User may pay partial/ full loan
5. Bank may approve or reject loan applied

## Tech stack:
1. React JS, Material UI

## app directory highlights
├── src  
│   ├── ...
│   ├── components 
|   |   ├── ...
│   |   └── VerticalTab.js   // Handle changing application views between user and bank
│   ├── context 
│   |   └── userContext.js   // Handle user views and future information pertaining to a user
│   ├── pages           
│   ├── api.js              // Mock APIs for fetching data     
│   ├── data.js             // Mock data for application  
│   ├── util.js            
│   └── ...                 
└── ...

## Start up
1. npm install
2. npm run start
3. Go to localhost:3000
 
## User view
### Main page
![image](https://github.com/BrendonLau/BankLoanSystem/assets/66625773/42d44cd0-500f-4d06-aa24-db830d691e49)
### Add loan
![image](https://github.com/BrendonLau/BankLoanSystem/assets/66625773/4b6199b6-858b-43bd-999c-8e16e434d608)
### Add payment
![image](https://github.com/BrendonLau/BankLoanSystem/assets/66625773/9f8f1128-9d76-42d1-a2c1-0db78d9d83ba)

## Bank view
### Main page
![image](https://github.com/BrendonLau/BankLoanSystem/assets/66625773/5d537d19-7536-4106-8e2d-a74ce0031890)
### Approve/ Reject loan
![image](https://github.com/BrendonLau/BankLoanSystem/assets/66625773/ec7c50d2-3c06-43a3-b9ea-a954bd121953)






