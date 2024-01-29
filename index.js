'use strict';

const path = require('path');
const express = require('express');
const app = express();

const {
    port,
    host,
    storageEngine,
    storage
} = require('./config.json');


const storageEnginePath = path.join(__dirname,storageEngine.folder);

const dataStoragePath =
    path.join(storageEnginePath, storageEngine.dataStorageFile);

const storagePath = path.join(__dirname,storage.folder);
const {createDataStorage} = require(dataStoragePath);
const dataStorage=
    createDataStorage(storagePath,storage.storageConfigFile);

dataStorage.getAll().then(console.log);


//app.listen(port, host, ()=>console.log(`${host}:${port} serving...`));

