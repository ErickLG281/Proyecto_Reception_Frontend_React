pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/ErickLG281/Proyecto_Reception_Frontend_React.git'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                script {
            
                    bat 'npm install'  
                }
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                script {
                    // Ejecutamos las pruebas
                    bat 'npm test -- --coverage' 
                }
            }
        }
        stage('Construir Producción') {
            steps {
                script {
                   
                    bat 'npm run build'  
                }
            }
        }
        stage('Desplegar') {
            steps {
                script {
                   
                    bat 'docker build -t nombre-imagen-react .'
                    bat 'docker run -d -p 3000:3000 nombre-imagen-react'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente!'
        }
        failure {
            echo 'Hubo un error en la ejecución del pipeline.'
        }
    }
}
