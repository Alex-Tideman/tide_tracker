const $ = require('jquery');
const electron = require('electron');
const moment = require('moment')


$('#today').append(moment().format('MMMM Do YYYY'))
$('#time').append(moment().format('h:mm:ss a'))
