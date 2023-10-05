import scanner from 'sonarqube-scanner';
import dotenv from 'dotenv';

dotenv.config();

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: process.env.SONAR_TOKEN,
    options: {
      'sonar.projectName': process.env.SONAR_PROJECT_NAME,
      'sonar.projectDescription': 'Here I can add a description of my project',
      'sonar.projectKey': process.env.SONAR_PROJECT_KEY,
      'sonar.projectVersion': '0.0.1',
      'sonar.exclusions': '',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit(),
);
