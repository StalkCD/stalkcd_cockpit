# StalkCD-Cockpit

####
This project provides the GUI for the StalkCD framework, inlcuding a dashboard for visualizing CI/CD pipeline metrics and cross-platform build file conversion.
To be able to use the available functions, the corresponding projects must also be installed. 
The [characteristics service](https://github.com/StalkCD/stalkcd_characteristics) is required to display the metrics and the [conversion service](https://github.com/StalkCD/stalkcd_extended) is required for the conversion.

## Installation
1. Clone the repository:
```bash
 git clone https://github.com/StalkCD/stalkcd_cockpit
```

2. Install dependencies:
```bash
 npm install
 ```

3. Clone and install the repositories of the required services.

## Usage
It is assumed that the StalkCD services are stored in one directory (e.g. source).
This simplifies the use of the Docker compose file.
It should look like:

source
- stalkcd_cockpit
- stalkcd_extended
- stalkcd_characteristics


Use the docker-compose.yml if you have your own atlas mongodb.
- The URL for accessing the database must be adapted in the [characteristics service](https://github.com/StalkCD/stalkcd_characteristics).
- The DBKEY for the connection has to be set as environment variable via 
```
export DBKEY=PutYourKeyHere
```

Otherwise use the docker-compose-mac.yml or docker-compose-windows.yml depending on the system.
Depending on whether the mongoDB is set up locally or in the cloud, the URL in the characteristics service found [here](https://github.com/StalkCD/stalkcd_characteristics/blob/main/src/database/Connection.ts) must be adapted.

After all services are succefull installed run 
```
docker-compose up
```
to generate the appropriate containers.

Then go to "http://localhost:8080" to visit the Cockpit.