export * as parent from './parent';
export * as register from './register';
export * as roleAssignmentRequests from './roleAssignmentRequests';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleSettings from './roleSettings';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}': Operation<
    '/governanceResources/{governanceResource-id}',
    'delete'
  >;
  'GET /governanceResources': Operation<'/governanceResources', 'get'>;
  'GET /governanceResources/{governanceResource-id}': Operation<
    '/governanceResources/{governanceResource-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}': Operation<
    '/governanceResources/{governanceResource-id}',
    'patch'
  >;
  'POST /governanceResources': Operation<'/governanceResources', 'post'>;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /governanceResources/{governanceResource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceResources']['parameters']
): EndpointRequest<IEndpoints['GET /governanceResources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources',
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
 * `GET /governanceResources/{governanceResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}']['parameters']
): EndpointRequest<IEndpoints['GET /governanceResources/{governanceResource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /governanceResources/{governanceResource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}',
    paramDefs: [{ name: 'governanceResource-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /governanceResources`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources']['body'],
  params?: IEndpoints['POST /governanceResources']['parameters']
): EndpointRequest<IEndpoints['POST /governanceResources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources',
    paramDefs: [],
    params,
    body,
  };
}
