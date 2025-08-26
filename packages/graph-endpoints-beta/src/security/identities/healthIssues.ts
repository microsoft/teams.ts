import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'delete'
  >;
  'GET /security/identities/healthIssues': Operation<'/security/identities/healthIssues', 'get'>;
  'GET /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'get'
  >;
  'PATCH /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'patch'
  >;
  'POST /security/identities/healthIssues': Operation<'/security/identities/healthIssues', 'post'>;
}

/**
 * `DELETE /security/identities/healthIssues/{healthIssue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/identities/healthIssues/{healthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/identities/healthIssues/{healthIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/identities/healthIssues/{healthIssue-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'healthIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/identities/healthIssues`
 *
 * Get a list of health issue objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/identities/healthIssues']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/healthIssues']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities/healthIssues',
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
 * `GET /security/identities/healthIssues/{healthIssue-id}`
 *
 * Read the properties and relationships of a healthIssue object.
 */
export function get(
  params?: IEndpoints['GET /security/identities/healthIssues/{healthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/identities/healthIssues/{healthIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities/healthIssues/{healthIssue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'healthIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/identities/healthIssues/{healthIssue-id}`
 *
 * Update the properties of a healthIssue object.
 */
export function update(
  body: IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['body'],
  params?: IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/identities/healthIssues/{healthIssue-id}',
    paramDefs: [{ name: 'healthIssue-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/identities/healthIssues`
 *
 */
export function create(
  body: IEndpoints['POST /security/identities/healthIssues']['body'],
  params?: IEndpoints['POST /security/identities/healthIssues']['parameters']
): EndpointRequest<IEndpoints['POST /security/identities/healthIssues']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/identities/healthIssues',
    paramDefs: [],
    params,
    body,
  };
}
