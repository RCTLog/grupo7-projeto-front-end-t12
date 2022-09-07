<h1 align="center">
  <img alt="Logo da empresa" title="RCTLog | Fretes & Mudanças" src="https://www.camionline.com.br/img/mudanca.png" width="800vw" height="350vh" />
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

A API tem um total de 2 endpoints, sendo em volta principalmente do usuário (Cliente) - podendo cadastrar seu perfil, logar em seu perfil e criar um post. <br/>

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
		"cpf": "",
      		"cnpj": "",
		"contact": "19 98134-0029",
		"address": [
			{
				"street": "Rua dos Atumalacos",
				"number": 166,
				"city": "Campinas",
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
		"cpf": "",
      		"cnpj": "",
		"contact": "19 98134-0029",
		"address": [
			{
				"street": "Rua dos bobos",
				"number": 135,
				"city": "Volta redonda",
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
  "message": "A senha precisa ter no mínimo uma letra maiúscula e minúscula e números."
}
```

Email já cadastrado:

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": "O email já existe"
}
```

<h2 align = "center"> Login </h2>

`POST https://json-server-kenzie-fretes.herokuapp.com/login/users - FORMATO DA REQUISIÇÃO`

```json
{
      "email": "gabrielfray@email.com",
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

<h2 align ='center'> Listando posts </h2>

Nesse endpoint listara todos os posts feitos por Clientes.

`GET https://json-server-kenzie-fretes.herokuapp.com/services - FORMATO DA RESPOSTA - STATUS 200`

```json
[
    {
      "createUserId": 1,
      "getUserid": 2,

      "description": "Preciso de uma mudança urgente!",
      "origin": [
        {
          "city": "Campinas",
          "state": "SP"
        }
      ],
      "destination": [
        {
          "city": "Resende",
          "state": "RJ"
        }
      ],
      "typeUser": "Cliente",
      "id": 1
    },
    {
      "createUserId": 3,
      "getUserid": 2,
      "description": "Estou precisando fazer uma mudança, pago bem.",
      "origin": [
        {
          "city": "Indaiatuba",
          "state": "SP"
        }
      ],
      "destination": [
        {
          "city": "Cuiabá",
          "state": "MT"
        }
      ],
      "typeUser": "Cliente",
      "id": 2
    },
    {
      "createUserId": 2,
      "description": "Faço fretes na região, dependendo faço fretes em outros estados.",
      "contact": "24 98134-0029",
      "typeUser": "Motorista",

      "id": 1

    },
    {
      "createUserId": 3,
      "description": "Faço fretes na região.",
      "contact": "24 98134-0029",
      "typeUser": "Motorista",

      "id": 2
    }
  ]
}

```

<h2 align ='center'> Criar um post de serviço </h2>

`POST /services - FORMATO DA REQUISIÇÃO`

```json
{
      "createUserId": 1,
      "getUserid": 2,

      "description": "Preciso de uma mudança urgente!",
      "origin": [
        {
          "city": "Campinas",
          "state": "SP"
        }
      ],
      "destination": [
        {
          "city": "Resende",
          "state": "RJ"
        }
      ],
      "typeUser": "Cliente",
      "id": 1
    },
    {
      "createUserId": 3,
      "getUserid": 2,
      "description": "Estou precisando fazer uma mudança, pago bem.",
      "origin": [
        {
          "city": "Indaiatuba",
          "state": "SP"
        }
      ],
      "destination": [
        {
          "city": "Cuiabá",
          "state": "MT"
        }
      ],
      "typeUser": "Cliente",
      "id": 2
    },

```

Você poderá editar os posts feitos

`PATCH /services/${post_id} - FORMATO DA REQUISIÇÃO`

```json
{	
  "description": "Preciso de um carreto urgente!",
  "origin": [
    {
      "city": "Indaiatuba",
      "state": "SP"
    }
  ],
  "destination": [
    {
      "city": "Cuiabá",
      "state": "MT"
    }
  ]
}
```

Também é possível deletar uma tecnologia, utilizando este endpoint:

`DELETE /services/${post_id}`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Criar trabalhos para o seu perfil </h2>

Da mesma forma de criar tecnologias, conseguimos criar trabalhos, dessa forma:

`POST https://json-server-kenzie-fretes.herokuapp.com/services- FORMATO DA REQUISIÇÃO`

```json
{
  "description": "Faço fretes na região, dependendo faço fretes em outros estados.",
  "contact": "24 98134-0029"
}
```

Conseguimos atualizar a descrição e o contato, qualquer uma das informações do respectivo trabalho.
Utilizando este endpoint:

`PATCH https://json-server-kenzie-fretes.herokuapp.com/services/${post_id} - FORMATO DA REQUISIÇÃO`

```json
{
  "description": "Faço fretes na região, dependendo faço fretes em outros estados.",
  "contact": "24 98134-0029"
}
```

Também é possível deletar um trabalho do seu perfil, utilizando este endpoint:

`DELETE https://json-server-kenzie-fretes.herokuapp.com/services/${post_id}`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Atualizando os dados do perfil </h2>

Assim como os endpoints de tecnologias e trabalhos, nesse precisamos estar logados, com o token no cabeçalho da requisição. Estes endpoints são para atualizar seus dados como, foto de perfil, nome, ou qualquer outra informação em relação ao que foi utilizado na criação do usuário.

Endpoint para atualizar a foto de perfil:

`PATCH https://json-server-kenzie-fretes.herokuapp.com/users/${user_id} - FORMATO DA REQUISIÇÃO`

```multipart
{
  "userImg": "https://img.quizur.com/f/img628e3091c2f679.37459174.jpg?lastEdited=1653485722",
}
```

Com esse endpoint poderá adicionar/editar o sobre do usuário:

`PATCH https://json-server-kenzie-fretes.herokuapp.com/users/${user_id} - FORMATO DA REQUISIÇÃO`

```multipart
{
  "about": "Sou motorista a 20 anos, sou muito dedicado a minha profissão. Justo com os preços, e não gosto que me subestimem.",
}
```

Nesse endpoint podemos atualizar qualquer dado do usuário, e a senha também, porém é necessário enviar a antiga senha no campo "old_password" caso o usuário queira atualizar a senha.

`PATCH /users - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Gabriel Fray",
  "contact": "19 98134-0029",
  "old_password": "123456",
  "password": "Teste123"
   "address": [
        {
          "street": "Rua dos bobos",
          "number": 166,
          "distric": "Volta redonda",
          "state": "Rio de Janeiro"
        }
      ]
}
```

---

Feito by Gabriel Fray :wave:
