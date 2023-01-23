# :shopping: Front-end Online Store


Desenvolver uma aplicação React de loja online consumindo dados da API do Mercado Livre. Também tivemos que utilizar metodologias de desenvolvimento ágil como Scrum e Kanban.



## 👨‍💻 Requisitos


* Trabalhar em grupo usando metodologias de desenvolvimento ágil
* Desenvolver uma aplicação React usando React Router
* Consumir dados de uma API pública
* Usar a Context API do React para gerenciamento de estado
<br />


## :memo: Methodologies/Metodologias

* Mobile First
* Kanban
* Scrum

## :hammer: Ferramentas

* HTML5
* CSS3
* JavaScript ES6+
* React.js
* React Router
* React Context API
* React Icons (icon library)

<br />
<hr />

## :sparkles: Executando a aplicação


<details>
  <summary markdown="span"><strong>Via Docker Compose (Recomendado)</strong></summary><br />

  #### :warning:  Atenção
  - **É necessário ter o Docker e o Docker Compose instalados na máquina.**
  - **É necessário que as portas 8080 e 3001 estejam desocupadas.**

  > Após clonar o repositório, sequir os sequintes passos.

  <br />

  :whale2: **Subindo os containers com as imagens**

  - Acessar o diretório raiz do projeto e execute o seguinte comando:
  ```bash
  docker-compose up --build
  ```
- OBS.: 
  - Este comando irá rodar as migrations e seeders automaticamente, removendo os dados anteriores.
  - Os três containers serão criados e iniciados: backend, frontend e o db. 
  - Executar o docker-compose **sem** a flag ```-d``` para que o compose funcione corretamente.

  <br />

  **Acessando a aplicação**

  - Para Acessar a aplicação é só digitar a seguinte URL em seu navegador: http://localhost:8080

  <br />

  **Parando os containers**

  ```bash
  ctrl + c
  ```
  
<br />

  **Removendo os containers**

  ```bash
  docker-compose down
  ```

<br />
</details>
<br />

<details>
  <summary markdown="span"><strong>Localmente</strong></summary><br />

  #### :warning:  Atenção
  - **É necessário ter o Node e o MySql instalados na máquina.**
  - **É necessário que as portas 8080 e 3001 estejam desocupadas.**
  
  
  > Após clonar o repositório, seguir os seguintes passos.
  
  
  
  **Back-end**
  
  - Acessar o diretório do back-end.
  ```bash
  cd backend 
  ```

  - Definir as varáveis de ambiente em um arquivo .env; 
    - É necessário criar um arquivo .env na raiz do diretório do back-end.
    - A seguir, definir as seguintes variáveis de ambiente:
    - Exemplo:
  
  ```env
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=docker
  DB_NAME=cashforce 
  DB_PORT=3306
  ```

  - OBS: o arquivo example.env contém um exemplo de como deve ser o arquivo .env.
    - É necessário renomear o arquivo example.env para .env. e preencher as variáveis de ambiente conforme sua configuração.

  <br />

  - Instalar as dependências.
  ```bash  
  npm install
  ``` 
  
  - Rodar o back-end.
  ```bash  
  npm start
  ```
    - OBS.: este comando irá rodar as migrations e seeders do banco de dados automaticamente, removendo os dados anteriores.

  <br />

  **Front-end**

  - Acessar o diretório do front-end.
  ```bash
  cd frontend 
  ```

  - Instalar as dependências.
  ```bash  
  npm install
  ```
  
  - Rodar o front-end.
  ```bash  
  npm start
  ```
  - Acessar a aplicação em http://localhost:8080
  

<br />
</details>
<br />

</details>


<br />
<hr />
