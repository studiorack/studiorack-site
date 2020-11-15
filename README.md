# studiorack-site
![Release](https://github.com/studiorack/studiorack-site/workflows/Release/badge.svg)

Audio plugin site with searchable plugin list, tools and documentation using:

* NodeJS 12.x
* TypeScript 4.x
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
    git push && git push origin --tags

This will run an automated build and deploy process on GitHub Actions:

    .github/workflows/release.yml


## Contact

For more information please contact kmturley
