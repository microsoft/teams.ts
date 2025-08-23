import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/auditEvents/{auditEvent-id}': Operation<
    '/deviceManagement/auditEvents/{auditEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/auditEvents': Operation<'/deviceManagement/auditEvents', 'get'>;
  'GET /deviceManagement/auditEvents/{auditEvent-id}': Operation<
    '/deviceManagement/auditEvents/{auditEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/auditEvents/{auditEvent-id}': Operation<
    '/deviceManagement/auditEvents/{auditEvent-id}',
    'patch'
  >;
  'POST /deviceManagement/auditEvents': Operation<'/deviceManagement/auditEvents', 'post'>;
}

/**
 * `DELETE /deviceManagement/auditEvents/{auditEvent-id}`
 *
 * Deletes a auditEvent.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/auditEvents/{auditEvent-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/auditEvents/{auditEvent-id}']['response']> {
  return {
    method: 'delete',
    path: '/deviceManagement/auditEvents/{auditEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'auditEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/auditEvents`
 *
 * List properties and relationships of the auditEvent objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/auditEvents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/auditEvents']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/auditEvents',
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
 * `GET /deviceManagement/auditEvents/{auditEvent-id}`
 *
 * Read properties and relationships of the auditEvent object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/auditEvents/{auditEvent-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/auditEvents/{auditEvent-id}']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/auditEvents/{auditEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'auditEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/auditEvents/{auditEvent-id}`
 *
 * Update the properties of a auditEvent object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/auditEvents/{auditEvent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/auditEvents/{auditEvent-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/auditEvents/{auditEvent-id}']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement/auditEvents/{auditEvent-id}',
    paramDefs: [{ name: 'auditEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/auditEvents`
 *
 * Create a new auditEvent object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/auditEvents']['body'],
  params?: IEndpoints['POST /deviceManagement/auditEvents']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/auditEvents']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/auditEvents',
    paramDefs: [],
    params,
    body,
  };
}
