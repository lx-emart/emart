# emart-project

eMart is an online eCommerce

Milestone 1:

    Screenflow/Wireframes reference Screenflow_Wireframe .xlsx

Milestone 2:

    Frontend - Angular Application(source code)

Milestone 3:

    kackend - Java Application(source code)
        ·Entity classes
        ·Model classes
        ·Repository,
        ·Service Layer,
        ·Individual Microservices
        ·Unit Testing, Integration Testing of Individual Microservices
    Refer to project
        ·emart-user-api    →　 source code added
        ·emart-common      →　 source code added
        ·emart-buyer-api   →　 source code added
        ·emart-seller-api  →　 source code added

Milestone 4:

    eureak, zull

Milestone 4:

    jenkinsfile, dockerfile, JMeter


## How to Run

Start the backend server before the frontend client.  

**Backend**

  1. Install [mysql](https://www.mysql.org/download/) 
  2. Configure datasource in `application.yml`.
  3. `cd backend`.
  4. Run `mvn install`.
  5. Run `mvn spring-boot:run`.
  6. Spring Boot will import mock data into database by executing `import.sql` automatically.
  7. The backend server is running on [localhost:8080]().

**Frontend**
  1. Install [Node.js and npm](https://www.npmjs.com/get-npm)
  2. `cd frontend`.
  3. Run `npm install`.
  4. Run `ng serve`
  5. The frontend client is running on [localhost:4200]().
  
Note: The backend API url is configured in `src/environments/environment.ts` of the frontend project. It is `localhost:7001/api` by default.
