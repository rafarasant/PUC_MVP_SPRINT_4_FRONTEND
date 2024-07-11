# Sistema de Agendamento e Gerenciamento de Consultas (SAGC) - APP FRONT-END

O **Sistema de Agendamento e Gerenciamento de Consultas (SAGC)** busca prover aos profissionais de secretariado 
um modo ágil e prático de agendar e administrar consultas virtualmente.

No presente projeto, o SAGC é empregado no contexto de um consultório odontológico, cujos serviços são 
prestados por um único profissional dentista. Cabe ao seu (sua) secretário(a) o uso dessa ferramenta 
para cadastrar os pacientes e marcar suas consultas.

Este projeto foi desenvolvido para o MVP da Sprint 4 da **Pós Gradução de Engenharia de Softwarer da PUC-Rio e
trata-se de uma atualização do projeto da Srint 1 do mesmo curso.**. 

---
### 1 - Clone o repositório

Clone o repositório através do comando abaixo:

```
[git clone (...)] (https://github.com/rafarasant/PUC_MVP_SPRINT_4_FRONTEND.git)
```

### 2 - Crie e execute a imagem do Docker e o container para o componente back-end da aplicação

Para que seja possível executar a aplicação, é preciso proceder primeiramente à criação tanto da imagem do Docker quanto
do container para o componente front-end da aplicação. Isso deve ser feito no diretório raiz do projeto, a partir do terminal, através do seguinte comando:

```
docker build -t frontend-project .
```

Em seguida, a imagem deve ser executada através do comando abaixo:

```
docker run -d -p 8000:8000 frontend-project
```

### 3 - Interface da aplicação

A aplicação foi desenvolvida para funcionar em uma única página *web*. Ela deve ser acessada a partir do *browser*, através
do seguinte endereço:

```
http://localhost:8000/index.html
```

### 4 - Funcionalidades

Nesta aplicação, o usuário do sistema pode cadastrar pacientes, agendar e excluir consultas, além de visualizá-las numa única listagem. Também pode atualizar os dados dos pacientes e das consultas.

### 5 - API Externa

O componente front-end da aplicação faz uso de uma API externa - o ViaCEP. Quando fornecido um determinando CEP (Código de Endereçamento Postal) a ela, são retornados os dados de endereço associados ao código.

### 6 - Vídeo de apresentação da aplicação

O vídeo de apresentação do trabalho pode ser acessado através do link abaixo:

```
https://drive.google.com/file/d/1jMUT1OJBV_OoOJ0radaH3sA5VcgCTCC5/view?usp=sharing
```

### 7 - Diagrama da aplicação

O diagrama explicativo da aplicação pode ser acessado através do link abaixo:

```
https://drive.google.com/file/d/1p7vrFVLHh67FFoNMlFysfsfsFu9qZtmb/view?usp=sharing
```
