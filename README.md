# Kenzie M6 E1

Esse é o repositório do Desafio Fullstack do aluno Lucas Soares do curso da Kenzie do M6.

## Rodando a Aplicação

Necessário instalar os pacotes tanto do back como do front!

```
pnpm i
```

Criar o seu arquivo .env:

```
DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
PORT =
SECRET_KEY =
```

Rodar as migrations na pasta api com o comando:

```
pnpm prisma migrate dev
```

Gerar o Prisma Cliente na pasta api com o comando:

```
pnpm prisma generate
```

Realizar o Build da api com o comando:

```
pnpm build
```

Rodar a api com o comando:

```
pnpm start
```

Configurar o link da api em app/src/services/api.ts:

```
export const api = axios.create({
  baseURL: "http://localhost:PORT/",
  timeout: 10000,
});
```

Realizar o Build do front com o comando:

```
pnpm build
```

Rodar o front com o comando:

```
pnpm start
```

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

# Visualizar Contatos:

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

# Deletar contato:

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

Esta página foi projetada para que o usúario entre na aplicação

![login](app/public/login.png)

# Página de Criar Conta

Esta página foi projetada para que o usúario crie sua conta para acessar a aplicação

![register](app/public/register.png)

# Página de Home

Esta página foi projetada para que o usúario realize todas as operações possiveis da aplicação

![home](app/public/home.png)

## Construído com

* [TypeScript]() - linguagem de programção 
* [Express]() - Framework web
* [Postegresql]() - Banco de dados
* [Prisma]() - ORM 
* [Nextjs]() - Framework React
