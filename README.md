# Aplicativo Projetos de pesquisa
  Aplicativo desenvolvido para disciplina **Programação para Dispositivos Móveis, Unisinos 2021/2**

## Sobre o projeto

- Existem 2 perfis de usuários: Administrador e Pesquisador (criados via mock, user e senha estão no arquivo app/system.service.ts)

- O perfil de Administrador pode visualizar e alterar status dos projetos de pesquisa. Ele também pode alterar o status do projeto para "em andamento", "concluído" e "pendências".

- O perfil de Pesquisador pode cadastrar projetos de pesquisa, informando título do projeto, data de conclusão estimada, texto longo descrevendo metodologia, um texto longo para os resultados esperados e um texto longo para conclusão.

- Quando o registro do projeto é criado, o status inicial é "criado" e deve ser associado ao id do usuário. 

- O usuário apenas visualiza o campo status. Os demais valores para status são definidos apenas pelo Administrador.
 
- Cada pesquisador pode ter no máximo um projeto cadastrado, portanto, a tela de cadastro e de alteração é a mesma.

### Utilização

Desenvolvido com Angular e Ionic.

Para instalar:

```sh
  npm install
```

Para compilar (e abrir no navegador)

```sh
  ionic serve -o
```
