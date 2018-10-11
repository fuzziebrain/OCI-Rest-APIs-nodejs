var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function create( auth, parameters, callback ){
  ocirest.process( auth,
                   { path : auth.RESTversion + '/nodePools',
                     host : endpoint.service.containerEngine[auth.region],
                     method : 'POST',
                     'opc-retry-token' : parameters['opc-retry-token'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body }, 
                   callback );
}

function update( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/nodePools/' + encodeURIComponent(parameters.nodePoolId),
                     host : endpoint.service.containerEngine[auth.region],
                     method : 'PUT',
                     'if-match' : parameters['if-match'],
                     'opc-request-id' : parameters['opc-request-id'],
                     body : parameters.body },
                   callback );
};

function get( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/nodePools/' + encodeURIComponent(parameters.nodePoolId),
                     host : endpoint.service.containerEngine[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

function drop( auth, parameters, callback ) {
  ocirest.process( auth,
                   { path : auth.RESTversion + '/nodePools/' + encodeURIComponent(parameters.nodePoolId),
                     host : endpoint.service.containerEngine[auth.region],
                     'if-match' : parameters['if-match'],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'DELETE' },
                    callback );
};

module.exports = {
    update: update,
    get: get,
    create: create,
    drop: drop
    };
