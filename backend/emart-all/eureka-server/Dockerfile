FROM java:8-jdk-alpine

COPY ./target/eureka-server-0.0.1-SNAPSHOT.jar /usr/app

WORKDIR /usr/app

RUN sh -c 'touch eureka-server-0.0.1-SNAPSHOT.jar'

EXPOSE 6001

ENTRYPOINT ["java", "-jar", "eureka-server-0.0.1-SNAPSHOT.jar"]
