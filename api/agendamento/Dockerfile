FROM openjdk:17-jdk-slim
WORKDIR /app
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src ./src
RUN ./mvnw clean package
COPY target/agendamento-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]