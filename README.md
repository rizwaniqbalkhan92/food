
Food Order Application (Backend)

Description
This is a backend application for a food ordering system. It provides APIs for managing users, food items, orders, and authentication. The application is built using Node.js, Express.js, and MongoDB.

Features
- User registration and authentication
- Food item management (CRUD operations)
- Order placement and management
- Image handling for food items using Multer
- Secure API endpoints with JWT authentication
Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- JWT (JSON Web Token)
- bcrypt (for password hashing)



Authors

- [Github @rizwaniqbalkhan92](https://www.github.com/rizwaniqbalkhan92)



## 🚀 About Me
I'm a MERN Stack | React Native Developer 

👨‍💻 Software Engineer & YouTuber
🌐 Sharing Knowledge
🎥 Creating Engaging Programming... 


- [Linkedin @ririzwan-iqbal-4669931b3/ ](https://www.linkedin.com/in/rizwan-iqbal-4669931b3/)
- [Youtube @rizcode](https://www.youtube.com/channel/UCxZonkPaPi9IZ0MTOvjbSHg)
- [Instagram @rizcode99_official](https://www.instagram.com/rizcode99_official/)
- [Facebook @rizcode](https://www.facebook.com/profile.php?id=100088059096987)
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rizwaniqbal-portfolio.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rizwan-iqbal-4669931b3/)
## 🛠 Skills
Javascript,Node Js, Express , MongoDb, React Native, React JS


## Tech Stack

**Database:** MongoDb
**Server:** Node, Express


## API Reference

#### User Admin Registeration

```http
  POST /api/admin/registerAdmin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | **Required** |


#### User Admin Login

```http
  POST /api/admin/loginAdmin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | **Required** |




#### Add User In Organization by Admin 

```http
  POST /api/admin/addUserInOrganizationAdmin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | **Required** |




#### User Login 

```http
  POST /api/loginUser
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | **Required** |





#### Admin Create Food List 

```http
  POST /api/admin/createDayFood
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | **Required** |



#### Admin get single foodlist

```http
  GET /api/admin/allDayFood/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ID` | `string` | **Required** |




#### Admin update single foodlist

```http
  PUT /api/admin/updateDayFood/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ID` | `string` | **Required** |





#### Admin delete single foodlist

```http
  GET /api/admin/deleteDayFood/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ID` | `string` | **Required** |



#### User order food

```http
  POST /api/orderFood
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `object` | **Required** |



#### Admin update status of ordered food

```http
  PUT /api/admin/adminUpdateOrderStatusUser/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Id` | `string` | **Required** |

