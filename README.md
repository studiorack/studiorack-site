# studiorack-site

![Release](https://github.com/studiorack/studiorack-site/workflows/Release/badge.svg)

StudioRack audio plugin manager site. Search, view, download and install audio plugins.

![StudioRack Site](/screenshot.jpg)

<a href="https://github.com/open-audio-stack" target="_blank"><img src="https://raw.githubusercontent.com/open-audio-stack/open-audio-stack-registry/refs/heads/main/src/assets/powered-by-open-audio-stack.svg" alt="Powered by Open Audio Stack"></a>

## Developer information

StudioRack Site was built using:

- NodeJS 20.x
- TypeScript 5.x
- NextJS 14.x
- React 18.x

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
