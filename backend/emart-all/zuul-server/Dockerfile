FROM java:8-jdk-alpine

COPY ./target/zuul-server-0.0.1-SNAPSHOT.jar /usr/app

WORKDIR /usr/app

RUN sh -c 'touch zuul-server-0.0.1-SNAPSHOT.jar'

EXPOSE 5001

ENTRYPOINT ["java", "-jar", "zuul-server-0.0.1-SNAPSHOT.jar"]


