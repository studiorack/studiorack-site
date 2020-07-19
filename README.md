# studiorack-registry

Audio plugin registry containing plugin metadata, which is searchable and filterable, using:

* NodeJS 14.4.x
* NextJS 9.3.x
* React 16.13.x


## Installation

Install dependencies using:

    npm install


## Usage

Run the development server using:

    npm run dev

View the site at:

    http://localhost:3000

Get the api at:

    http://localhost:3000/api/plugins


## Deployment

Release an updated version on GitHub by simply creating a version tag:

    npm version patch
    git push origin --tags

This will run an automated build and deploy process on GitHub Actions:

    .github/workflows/workflow.yml


## Contact

For more information please contact kmturley
