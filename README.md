# Full-Stack MVC Application

This project is structured with a clear separation between backend and frontend.

## Backend (Quarkus)

- **Framework**: Quarkus
- **Databases**: MySQL and MongoDB
- **Security**: Bcrypt for password hashing, JWT for authentication, Role-Based Access Control (RBAC)

### Structure
- `models/`: Entity classes
- `controllers/`: REST endpoints
- `services/`: Business logic
- `repositories/`: Data access (if needed)
- `config/`: Configuration classes

### Running the Backend
1. Ensure MySQL and MongoDB are running.
2. Update `application.properties` with correct database credentials.
3. Run `mvn quarkus:dev` in the `backend` directory.

## Frontend (React)

- **Framework**: React
- **Styling**: Tailwind CSS

### Structure
- `src/components/`: Reusable components
- `src/pages/`: Page components
- `src/services/`: API calls
- `src/utils/`: Utility functions

### Running the Frontend
1. Run `npm install` in the `frontend` directory.
2. Run `npm start` to start the development server.

## Overall Structure
```
project/
├── backend/
│   ├── pom.xml
│   ├── src/main/java/com/example/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── config/
│   └── src/main/resources/
│       └── application.properties
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── public/
    │   └── index.html
    └── src/
        ├── components/
        ├── pages/
        ├── services/
        ├── utils/
        ├── App.js
        ├── index.js
        └── index.css
```

mongodb
mk : ZnNNmXhZq98owuOC
name: levanchinh13052005_db_user
mongodb+srv://levanchinh13052005_db_user:ZnNNmXhZq98owuOC@cluster0.j9w8jmh.mongodb.net/?appName=Cluster0


MySQL entities extend PanacheEntityBase và dùng @Entity, @Table của Jakarta Persistence.
MongoDB entities extend PanacheMongoEntityBase và dùng @MongoEntity của Quarkus.
Booking đặt Voucher là @ManyToOne nullable — khi không dùng voucher thì để null.
BookingService.priceAtBooking lưu giá tại thời điểm đặt để tránh ảnh hưởng khi admin đổi giá sau.
Bạn cần thêm dependency quarkus-mongodb-panache và quarkus-hibernate-orm-panache trong pom.xml nếu chưa có.


Luồng hoạt động chuẩn của request
    Client
    ↓
    Controller
    ↓
    DTO Request
    ↓
    Service
    ↓
    Repository
    ↓
    Database

Response:
    Database
    ↓
    Entity
    ↓
    Mapper
    ↓
    DTO Response
    ↓
    Controller
    ↓
    Client


config       → Cấu hình hệ thống / framework
controllers  → API endpoint nhận request từ client
dto          → Object trao đổi dữ liệu request/response
entity       → Mapping bảng database
repository   → Truy vấn và thao tác database
services     → Xử lý business logic
mapper       → Convert giữa Entity và DTO
exceptions   → Xử lý / định nghĩa lỗi hệ thống
security     → Authentication / Authorization / JWT
utils        → Hàm tiện ích dùng chung