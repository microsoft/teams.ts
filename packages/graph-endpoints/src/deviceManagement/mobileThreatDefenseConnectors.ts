import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    'delete'
  >;
  'GET /deviceManagement/mobileThreatDefenseConnectors': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors',
    'get'
  >;
  'GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    'patch'
  >;
  'POST /deviceManagement/mobileThreatDefenseConnectors': Operation<
    '/deviceManagement/mobileThreatDefenseConnectors',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}`
 *
 * Deletes a mobileThreatDefenseConnector.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileThreatDefenseConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/mobileThreatDefenseConnectors`
 *
 * List properties and relationships of the mobileThreatDefenseConnector objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/mobileThreatDefenseConnectors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}`
 *
 * Read properties and relationships of the mobileThreatDefenseConnector object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileThreatDefenseConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}`
 *
 * Update the properties of a mobileThreatDefenseConnector object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}',
    paramDefs: [{ name: 'mobileThreatDefenseConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/mobileThreatDefenseConnectors`
 *
 * Create a new mobileThreatDefenseConnector object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['body'],
  params?: IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/mobileThreatDefenseConnectors',
    paramDefs: [],
    params,
    body,
  };
}
