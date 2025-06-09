pipeline {
    agent any

  environment {
        DOCKER_IMAGE = 'cypress-docker-ci'
  }

  stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
      }
    }

    stage('Run Cypress Tests in Docker') {
            steps {
                sh 'docker run --rm $DOCKER_IMAGE'
      }
    }
  }

  post {
        always {
            echo 'Pipeline finished. Collect logs or results here if needed.'
            junit 'cypress/results/*.xml'
    }
  }
}
