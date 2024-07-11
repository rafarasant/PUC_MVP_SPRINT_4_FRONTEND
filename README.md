# Sistema de Agendamento e Gerenciamento de Consultas (SAGC) - APP FRONT-END

O **Sistema de Agendamento e Gerenciamento de Consultas (SAGC)** busca prover aos profissionais de secretariado 
um modo ágil e prático de agendar e administrar consultas virtualmente.

No presente projeto, o SAGC é empregado no contexto de um consultório odontológico, cujos serviços são 
prestados por um único profissional dentista. Cabe ao seu (sua) secretário(a) o uso dessa ferramenta 
para cadastrar os pacientes e marcar suas consultas.

Este projeto foi desenvolvido para o MVP da Sprint 1 da **Pós Gradução de Engenharia de Softwarer da PUC-Rio**. 

---
### 1 - Clone o repositório

Clone o repositório através do comando abaixo:

```
[git clone (...)] (https://github.com/rafarasant/PUC_MVP_SPRINT_4_FRONTEND.git)
```

### 2 
---
## Interface da aplicação

A aplicação foi desenvolvida para funcionar em uma única página *web*.

---
## Funcionalidades

Nesta aplicação, o usuário do sistema pode agendar e excluir consultas, assim como visualizá-las numa única listagem.


## Comandos Docker

Construir a imagem do docker: docker build -t frontend-project .

Executar imagem do docker:  docker run -d -p 8000:8000 frontend-project

Acessar o frontend pelo borwser: http://localhost:8000/index.html

