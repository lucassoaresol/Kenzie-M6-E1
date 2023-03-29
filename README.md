# Kenzie M6 E1

Esse é o repositório do Desafio Fullstack do aluno Lucas Soares do curso da Kenzie do M6.

## URL

URL utilizara para as requisições do json-server:

https://projeto-frontend-api.herokuapp.com

### Rotas que não precisam de autorização

## Cadastro

POST /users

Exemplo do body:

```json
{
	"fullName": "Lucas Soares de Oliveira",
	"username": "lucas",
	"password": "1234",
	"listEmail": [
		{
			"email": "lucas@mail.com"
		}
	],
	"listPhoneNumber": [
		{
			"phoneNumber": "9999999999"
		}
	]
}
```

Exemplo da resposta:

```json
{
	"id": "0887ef55-0c41-47d7-8c82-c5b62828f40c",
	"fullName": "Lucas Soares de Oliveira",
	"username": "lucas",
	"listEmail": [
		{
			"id": "084e98ee-eb65-43fb-bf28-e666706a5da0",
			"email": "lucas@mail.com"
		}
	],
	"listPhoneNumber": [
		{
			"id": "a4c44b1e-fc4e-44a3-99a7-bbd6b8a4373e",
			"phoneNumber": "9999999999"
		}
	],
	"createdAt": "2023-03-29T05:56:10.153Z"
}
```

Exemplo de erro:

```json
"message": "user already exists"
```

## Login

POST /login

Exemplo do body:

```json
{
	"login": "lucas",
	"password": "1234"
}
```

Exemplo da resposta:

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAwNjk0MjgsImV4cCI6MTY4MDE1NTgyOCwic3ViIjoiMDg4N2VmNTUtMGM0MS00N2Q3LThjODItYzViNjI4MjhmNDBjIn0.fDTRiDehCmXKpPx18bM7JpmUYWEu96HEMWqLCD3GGEE"
}
```

Exemplo de erro:

```json
"message": "wrong login or password"
```

### Rotas que precisam de autorização

## Contatos

# Visualizar anúncios:

GET /users/contacts

Exemplo da resposta:

```json
[
	{
		"id": "9112c0d6-fc15-43da-b3e2-99534ba04708",
		"fullName": "Pedro Soares de Oliveira",
		"listEmail": [
			{
				"id": "8c807b5f-e6ba-49e5-903d-29805ef0cc4f",
				"email": "pedro@mail.com"
			}
		],
		"listPhoneNumber": [
			{
				"id": "a7b00f67-6ea3-4aa7-a9d5-8676fd8d0331",
				"phoneNumber": "999999999"
			}
		],
		"createdAt": "2023-03-29T06:00:02.197Z"
	},
	{
		"id": "073b309c-241a-4b51-ae13-589628c92e99",
		"fullName": "Santos Soares de Oliveira",
		"listEmail": [
			{
				"id": "adea5332-6bc7-49f5-a808-00a0c679aaa5",
				"email": "santos@mail.com"
			}
		],
		"listPhoneNumber": [
			{
				"id": "4a214abc-5070-4f32-8cde-80ac748766a9",
				"phoneNumber": "999999999"
			}
		],
		"createdAt": "2023-03-29T06:00:11.509Z"
	},
	{
		"id": "d57d1100-b6d8-495c-ab2a-393813aa1d66",
		"fullName": "Iago Soares de Oliveira",
		"listEmail": [
			{
				"id": "76294576-3435-4085-b0ae-048177dc1c44",
				"email": "iago@mail.com"
			}
		],
		"listPhoneNumber": [
			{
				"id": "f577d865-36fe-4403-899c-cf902234feb1",
				"phoneNumber": "999999999"
			}
		],
		"createdAt": "2023-03-29T06:00:19.577Z"
	}
]
```

# Criar contato:

POST /contacts

Exemplo do body:

```json
{
	"fullName": "Iago Soares de Oliveira",
	"listEmail": [
		{
			"email": "iago@mail.com"
		}
	],
	"listPhoneNumber": [
		{
			"phoneNumber": "999999999"
		}
	]
}
```

Exemplo da resposta:

```json
{
	"id": "d57d1100-b6d8-495c-ab2a-393813aa1d66",
	"fullName": "Iago Soares de Oliveira",
	"listEmail": [
		{
			"id": "76294576-3435-4085-b0ae-048177dc1c44",
			"email": "iago@mail.com"
		}
	],
	"listPhoneNumber": [
		{
			"id": "f577d865-36fe-4403-899c-cf902234feb1",
			"phoneNumber": "999999999"
		}
	],
	"createdAt": "2023-03-29T06:00:19.577Z"
}
```

# Deletar anúncio:

DELETE /contacts/${contactId}

Nâo tem resposta.

## Usuário

# Editar usuário:

PATCH /users

Exemplo de body:

```json
{
	"fullName": "Lucas Patch"
}
```

Exemplo da resposta:

```json
{
	"id": "0887ef55-0c41-47d7-8c82-c5b62828f40c",
	"fullName": "Lucas Patch",
	"username": "lucas",
	"createdAt": "2023-03-29T05:56:10.153Z"
}
```
## Páginas da aplicação

# Página inicial

Está página foi projetada para que o usúario tenha conhecimento sobre o que é a Disclosure

![2022-11-09 (2)](https://user-images.githubusercontent.com/104391972/200872012-f0ecb2ba-d583-493a-85c2-2c35e061e1f6.png)

# Página de Quem somos nós

Está página é uma descrição de todas as informações de como surgiu a disclosure e quem participou do construção da mesma

![2022-11-09 (5)](https://user-images.githubusercontent.com/104391972/200872631-9fbc09aa-f13d-4cfa-9222-a227736ab499.png)

# Página de Contato

Está página foi feita para que pessoas que estiverem com duvidas referente ao site ou serviços, poderam entrar em contato com nossa equipe.

![2022-11-09 (6)](https://user-images.githubusercontent.com/104391972/200872857-2bf239c4-7a7d-4280-9a36-7c45f0e8b38f.png)

# Página de Login

Está página permite que o usuário faça o login para ter acesso a nossa página principal.

![2022-11-09 (9)](https://user-images.githubusercontent.com/104391972/200873217-58f5abb5-dc7f-4ce3-bb7b-c31ce7da0c2a.png)

# Página de Cadasro

Está página permite o cadastro o usuário para ele poder fazer parte da comunidade Disclosure

![2022-11-09 (8)](https://user-images.githubusercontent.com/104391972/200873854-d1dc136b-57a5-488b-aa3c-d8ee7fc398bb.png)

