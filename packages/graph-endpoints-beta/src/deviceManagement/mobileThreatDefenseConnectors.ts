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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The list of Mobile threat Defense connectors configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors']['response']> {
  return {
    ver: 'beta',
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
 * The list of Mobile threat Defense connectors configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/mobileThreatDefenseConnectors/{mobileThreatDefenseConnector-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['body'],
  params?: IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/mobileThreatDefenseConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/mobileThreatDefenseConnectors',
    paramDefs: [],
    params,
    body,
  };
}
