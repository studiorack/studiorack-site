---
title: 'Getting started'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

## System Requirements:
- Linux, MacOS or Windows
- NodeJS 8+


## Installation

To install the command line tool, run the command:

    npm install @studiorack/studiorack-cli -g

Verify the tool has been installed by running:

    studiorack --version


## Usage

Navigate to a music project folder containing a project.json config, install all plugins using:

    studiorack install --global

Then start the project using

    studiorack start


## Creating a new project configuration

If music project folder does not contain a project.json, you can create a new one using:

    studiorack init

This will create a project.json with your configuration:

    {
      "name": "Example audio project",
      "version": "1.0.0",
      "description": "Example audio project description",
      "main": "Test.als",
      "preview": {
        "audio": "Test.wav",
        "image": "Test.png"
      },
      "plugins": {
        "plugin-name": "1.0.0"
      }
    }

For a full list of commands use:

    studiorack --help


## Finding, adding and removing plugins

Search the plugin registry using:

    studiorack search piano

Add a plugin and update project.json config using:

    studiorack install kmturley/studiorack-plugin --global

Remove a plugin and update project.json config using:
 
    studiorack uninstall kmturley/studiorack-plugin --global


## Creating and publishing a plugin

Create a new plugin using the starter template:

    studiorack create myplugin

Follow the instructions at ./myplugin/README.md to install and build your plugin

When ready to release, commit your plugin to Github and then run:

    studiorack publish
