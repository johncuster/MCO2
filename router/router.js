const express = require('express');
const controller = require('../controller/controller.js');
const app = express();

/*
app.get('/filter', controller.getIndex);
app.get('/editMovie?:id?:year', controller.getEditMovie);
app.get('/deleteMovie?:id?:year', controller.getDeleteMovie);
app.get('/test_query', controller.testQuery);
app.get(`/ping_node/:id`, controller.pingNode);
app.get('/syncfragment3', controller.syncFragmentNode3);
app.get('/syncfragment2', controller.syncFragmentNode2);
app.get('/synccentral', controller.syncCentral);

app.post('/update', controller.postUpdateMovie);
app.post('/add', controller.postAddMovie);
*/
app.get('/', controller.getIndex); //show all the data from db 


//app.get('/appointments', controller.getAppointments);
//app.post('/devMenu/select', controller.postQuerySelect);
//app.post('/delete/:id/:year', controller.postDeleteAppointment);
//app.post('/add', controller.postInsertAppointment);
//app.put('/edit/:id', controller.postUpdateAppointment);

//app.get('*', function(req, res) { res.render('error', {}); } );

module.exports = app;