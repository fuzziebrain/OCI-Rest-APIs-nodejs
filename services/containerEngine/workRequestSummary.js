var ocirest = require('../../ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function list( auth, parameters, callback ) {
  var query = '';
  query = query + '?compartmentId=' + encodeURIComponent( parameters.compartmentId);
  if ( 'limit' in parameters )
    query = query + '&limit=' + encodeURIComponent( parameters.limit );
  if ( 'page' in parameters )
    query = query + '&page=' + encodeURIComponent( parameters.page );
  if ( 'sortBy' in parameters )
    query = query + '&sortBy=' + encodeURIComponent( parameters.sortBy );
  if ( 'sortOrder' in parameters )
    query = query + '&sortOrder=' + encodeURIComponent( parameters.sortOrder );
  if ( 'clusterId' in parameters )
    query = query + '&clusterId=' + encodeURIComponent( parameters.clusterId );
  if ( 'resourceId' in parameters )
    query = query + '&resourceId=' + encodeURIComponent( parameters.resourceId );
  if ( 'resourceType' in parameters )
    query = query + '&resourceType=' + encodeURIComponent( parameters.resourceType );
  if ( 'status' in parameters )
    query = query + '&status=' + encodeURIComponent( parameters.status );

  ocirest.process( auth,
                   { path : auth.RESTversion + '/workRequests' + query,
                     host : endpoint.service.containerEngine[auth.region],
                     'opc-request-id' : parameters['opc-request-id'],
                     method : 'GET' },
                    callback );
};

module.exports = {
    list: list
    };
