pipeline {
    agent any
    
    environment {
        DOCKER_HOST = "unix:///var/run/docker.sock"
    }
    
    stages {
        stage('Run Cypress') {
            steps {
                script {
                    // Simple direct docker run (no docker.inside)
                    sh '''
                    docker run --rm \
                      -v $PWD:/e2e -w /e2e \
                      cypress/included:14.4.1
                    '''
                }
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/*.mp4,cypress/screenshots/*.png'
        }
    }
}
