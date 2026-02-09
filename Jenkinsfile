pipeline {
    agent any

    environment {
        AWS_REGION = "us-east-1"
        ACCOUNT_ID = "532465846775"
        ECR_REPO   = "project1-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
        APP_EC2_IP = "54.144.241.3"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${ECR_REPO}:${IMAGE_TAG} .'
            }
        }

        stage('Push Image to ECR') {
            steps {
                sh """
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login --username AWS --password-stdin \
                ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

                docker tag ${ECR_REPO}:${IMAGE_TAG} \
                ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}

                docker push \
                ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}
                """
            }
        }

        stage('Deploy to Application EC2') {
            steps {
                sshagent(['app-ec2-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ec2-user@${APP_EC2_IP} '
                    aws ecr get-login-password --region ${AWS_REGION} | \
                    docker login --username AWS --password-stdin \
                    ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

                    docker pull ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}
                    docker stop nodeapp || true
                    docker rm nodeapp || true
                    docker run -d -p 80:3000 --name nodeapp \
                    ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}
                    '
                    """
                }
            }
        }

    }

    post {
        success {
            echo "✅ Deployment successful"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}

