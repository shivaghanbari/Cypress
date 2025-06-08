pipeline {
    agent {
        docker {
            image 'cypress/included:14.4.0'
            args '-u root' // allows installing dependencies if needed
        }
    }

    environment {
        HOME = '.'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/shivaghanbari/Cypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
        }
    }
}
