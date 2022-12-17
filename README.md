# World CUP Score List
### Projeto desenvolvido em  react-native com o objetivo de salvar e exibir os placares de jogos da copa

## How to start?
#### Para baixar as dependencias do projeto utilizar o comando "npm install".
#### Após baixar as dependencias voce deve instalar o json-server, caso não tenha instalado na sua maquina
### npm i -g json-server 
#### Voce tambem pode instalá-lo como dependencia do projeto rodando: "npm i json-server"

### Para rodar o json-server voce precisa executar o comando "npm run server"
### Para subir a aplicação rodar o comando "npm run start"
### Irá aparecer as orientações para voce utilizar o app no expo. 

## Importante!!
### Em alguns casos o json-server não consegue comunicar-se com o emulador ou aparelho conectado a aplicação.Caso ocorra esse problema você deve abrir o arquivo package.json ir em scripts>serverLocal e editar o comando, substituindo o "XXX.XXX.X.XXX" pelo ip local da sua máquina.
### Deve-se também editar o arquivo "ScoreAPI", editando a const baseURL, substituindo o ip "10.0.2.2", pelo ip local da sua máquina.

### Após realizado esses ajustes executar o comando "npm run serverLocal" ao invés de "npm run server".

 
