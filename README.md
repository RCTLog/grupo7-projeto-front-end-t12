<h1 align="center">
  <img alt="Logo da empresa" title="RCTLog | Fretes & Mudanças" src="https://kenzie.com.br/images/logoblue.svg" width="100px" />
</h1>

<h1 align="center">
 RCTLog | Fretes & Mudanças
</h1>

<p align = "center">
Para que serve esse site?

RCTLog | Fretes & Mudanças é uma plataforma voltada para motoristas se cadastrarem e oferecerem seus serviços de transporte, e ao mesmo tempo, para o cliente final que busca por esses serviços, ter a facilidade em poucos cliques de se cadastrar e de contratar os serviços de que precisa.
</p>

<blockquote align="center">“Faça ou não faça. Tentativa não há. - Mestre Yoda”</blockquote>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 2 endpoints, sendo em volta principalmente do usuário (Cliente) - podendo cadastrar seu perfil, logar em seu perfil, criar um post. <br/>
O JSON para utilizar no Insomnia é este aqui -> https://drive.google.com/file/d/1kALZ2TZywU4OOqwqWeVuu8H13fHrxt_2/view
Para importar o JSON no Insomnia é só baixar o arquivo. Na palavra "Insomnia" no canto superior esquerdo. Nesse dropdown é só clicar em "Import / Export > Import Data > From File" e selecionar o arquivo que foi feito download :v:

O url base da API é https://json-server-kenzie-fretes.herokuapp.com

## Rotas que não precisam de autenticação

<h2 align ='center'> Listando usuários </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os devs já cadastrados na plataforma, na API podemos acessar a lista dessa forma:
Aqui conseguimos ver os usuários, suas tecnologias e seus trabalhos cadastrados.

`GET https://json-server-kenzie-fretes.herokuapp.com/users - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": 1,
		"name": "Gabriel Fray",
		"email": "gabrielfray@email.com",
		"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
		"typeUser": "Cliente",
		"userImg": "",
		"contact": "19 98134-0029",
		"address": [
			{
				"street": "Rua dos Atumalacos",
				"number": 166,
				"distric": "Campinas",
				"state": "SP"
			}
		]
	},
	{
		"id": 2,
		"name": "Vinão Carioca",
		"email": "vinao@gmail.com",
		"password": "$2a$10$QXQVPw7XhD2RA2DUTBgy.ugte2Dlb4LHMd58rl.prAd4axbbJ5LHC",
		"typeUser": "Motorista",
		"userImg": "",
		"contact": "19 98134-0029",
		"address": [
			{
				"street": "Rua dos bobos",
				"number": 135,
				"distric": "Volta redonda",
				"state": "Rio de Janeiro"
			}
		]
	},
]
```


<h2 align ='center'> Criação de usuário </h2>

`POST https://json-server-kenzie-fretes.herokuapp.com/users/register - FORMATO DA REQUISIÇÃO`

```json
{
      "name": "Gabriel Fray",
      "email": "gabrielfray@email.com",
      "password": "Teste123",
      "typeUser": "Cliente"
}
```

Caso dê tudo certo, a resposta será assim:

`POST https://json-server-kenzie-fretes.herokuapp.com/users/users/register - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhcGhhZWxAZW1haWwuY29tIiwiaWF0IjoxNjYyMDQ4NDM4LCJleHAiOjE2NjIwNTIwMzgsInN1YiI6IjYifQ.1gok4g6EsChkv1VlIOet1GepwsNjcopfqdSntxqEIpM",
	"user": {
		"email": "raphael@email.com",
		"name": "Raphael",
		"typeUser": "Motorista",
		"id": 6
	}
}
```

1. O campo - "typeUser": Pode receber o tipo do usuário, se ele é cliente ou motorista.

<h2 align ='center'> Possíveis erros </h2>

A senha necessita de 6 caracteres, uma letra maiúscula e minúscula e números.

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": ["password: minimum is 6 characters"]
}
```

Email já cadastrado:

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": "Email already exists"
}
```

<h2 align = "center"> Login </h2>

`POST https://json-server-kenzie-fretes.herokuapp.com/login/users - FORMATO DA REQUISIÇÃO`

```json
{
      "email": "raphael@email.com",
      "password": "Teste123",
}
```

Caso dê tudo certo, a resposta será assim:

`POST https://json-server-kenzie-fretes.herokuapp.com/login/users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhcGhhZWxAZW1haWwuY29tIiwiaWF0IjoxNjYyMDQ5MDY5LCJleHAiOjE2NjIwNTI2NjksInN1YiI6IjYifQ.H4VIQmB4euM5zMwR8KJMzdlKEAFKQ1zkNVs0sFx7w3Y",
	"user": {
		"email": "gabrielfray@email.com",
		"name": "Gabriel Fray",
		"typeUser": "Cliente",
		"id": 6
	}
}
```

Com essa resposta, vemos que temos duas informações, o user e o token respectivo, dessa forma você pode guardar o token e o usuário logado no localStorage para fazer a gestão do usuário no seu frontend.

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

`GET /profile - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /profile - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "1f4b83fe-c3df-4818-8356-c8d4dedeb49b",
  "name": "Teste",
  "email": "teste@gmail.com",
  "course_module": "m3",
  "bio": "Teste",
  "contact": "linkedin/in/teste",
  "techs": [],
  "works": [],
  "created_at": "2022-08-08T00:08:22.920Z",
  "updated_at": "2022-08-08T00:08:22.920Z",
  "avatar_url": null
}
```

<h2 align ='center'> Criar tecnologias para o seu perfil </h2>

`POST /users/techs - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "React",
  "status": "Iniciante"
}
```

1. O campo - "status" deve receber respectivamente os 3 níveis de habilidade:
   - "Iniciante"
   - "Intermediário"
   - "Avançado"

Caso você tente criar uma tecnologia com o mesmo nome para o seu perfil, receberá este erro:

`POST /users/techs - FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "message": "User Already have this technology created, you can only update it"
}
```

Ou seja, você pode apenas dar update em quanto você avançou nas tecnologias que já está no seu perfil. Utilizando este endpoint:

`PUT /users/techs/:tech_id - FORMATO DA REQUISIÇÃO`

```json
{
  "status": "Avançado"
}
```

Também é possível deletar uma tecnologia, utilizando este endpoint:

`DELETE /users/techs/:tech_id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Criar trabalhos para o seu perfil </h2>

Da mesma forma de criar tecnologias, conseguimos criar trabalhos, dessa forma:

`POST /users/works - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "KenzieHub",
  "description": "I was the backend developer of this project, and i did it using Typescript and NodeJS",
  "deploy_url": "https://kenziehub.me"
}
```

Conseguimos atualizar o titulo, a descrição ou o deploy_url, qualquer uma das informações do respectivo trabalho.
Utilizando este endpoint:

`PUT /users/works/:work_id - FORMATO DA REQUISIÇÃO`

```json
{
  "title": "KenzieHub Atualizado",
  "description": "Nova descrição."
}
```

Também é possível deletar um trabalho do seu perfil, utilizando este endpoint:

`DELETE /users/works/:work_id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Atualizando os dados do perfil </h2>

Assim como os endpoints de tecnologias e trabalhos, nesse precisamos estar logados, com o token no cabeçalho da requisição. Estes endpoints são para atualizar seus dados como, foto de perfil, nome, ou qualquer outra informação em relação ao que foi utilizado na criação do usuário.

Endpoint para atualizar a foto de perfil:

`PATCH /users/avatar - FORMATO DA REQUISIÇÃO`

```multipart
avatar: <Arquivo de imagem>
```

Nesse endpoint podemos atualizar qualquer dado do usuário, e a senha também, porém é necessário enviar a antiga senha no campo "old_password" caso o usuário queira atualizar a senha.

`PUT /profile - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Gabriel Araujo",
  "contact": "linkedin/araujooj",
  "old_password": "123456",
  "password": "123456789"
}
```

---

Feito com ♥ by araujooj :wave:
