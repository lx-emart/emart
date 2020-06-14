FROM java:8-jdk-alpine

COPY ./target/seller-api-0.0.1-SNAPSHOT.jar /usr/app

WORKDIR /usr/app

RUN sh -c 'touch seller-api-0.0.1-SNAPSHOT.jar'

EXPOSE 9001

ENTRYPOINT ["java", "-jar", "seller-api-0.0.1-SNAPSHOT.jar"]
