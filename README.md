# neo4j-console
A web and command line interface for the Neo4j Graph Database.

## Quick Start
Download and install Neo4j, which can be found [here](https://neo4j.com/download/).
Then, start the database.

Configure the `config/default.json` file with the desired port for the webserver
to run on and the username, password and url to your database.

Clone the repository:

```shell
git clone https://github.com/itaisteinherz/neo4j-console.git
cd neo4j-console
```

Install the dependencies:

```shell
npm install
```

Start the server:

```shell
npm start
```

Then, go to [http://localhost:3000](http://localhost:3000) (or any other port
specified in the config/default.json file).

## License
[MIT License](LICENSE)

## Notes
This project adheres to the [Semantic Versioning](http://semver.org/).
