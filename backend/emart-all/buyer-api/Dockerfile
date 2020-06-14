FROM java:8-jdk-alpine

COPY ./target/buyer-api-0.0.1-SNAPSHOT.jar /usr/app

WORKDIR /usr/app

RUN sh -c 'touch buyer-api-0.0.1-SNAPSHOT.jar'

EXPOSE 8001

ENTRYPOINT ["java", "-jar", "buyer-api-0.0.1-SNAPSHOT.jar"]