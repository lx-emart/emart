FROM java:8-jdk-alpine

COPY ./target/user-api-0.0.1-SNAPSHOT.jar /usr/app

WORKDIR /usr/app

RUN sh -c 'touch user-api-0.0.1-SNAPSHOT.jar'

EXPOSE 7001

ENTRYPOINT ["java", "-jar", "user-api-0.0.1-SNAPSHOT.jar"]

