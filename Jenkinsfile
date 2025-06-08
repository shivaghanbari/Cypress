pipeline {
    agent any

    stages {
        stage('Run Cypress') {
            steps {
                sh '''
                docker run \
                  -v $PWD:/e2e \
                  -w /e2e \
                  cypress/included:14.4.1
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts 'cypress/videos/*.mp4'
        }
    }
}