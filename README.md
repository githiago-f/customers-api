# Costumers 🙋🏽‍♀️🙋🏽‍♂️

## Key words

`domain` - the main concepts of the project.

## Commands

> NOTE: It's necessary to build domain before all tests or execution commands because it's a common dependencie used to test data structures and validate all entities of this domain.

### Run tests

The following script will run:

1. domain build;
2. domain test;
3. server test;
4. client test;

```bash
 yarn test
```

### Run server and client

#### Client

This will build and run the client application (at port 3000)

```bash
 yarn client start
```

#### Server

This will build and setup an application to docker-cli (runned at port 8080).

```bash
 docker-compose up
```

### Routes open

`/customer` - GET, POST and PATCH - CRU(no D) routes

`/customer/:id` - GET - gets one customer by its ID

`/city` - GET and POST - CR(no U or D) routes

`/companies` - GET and POST - CR(no U or D) routes

### Considerations

#### Why Knex?
Consulted benchmark: [Knex Vs Sequelize](https://stackshare.io/stackups/knex-js-vs-sequelize).
