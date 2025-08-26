import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}': Operation<
    '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    'delete'
  >;
  'GET /directory/sharedEmailDomains': Operation<'/directory/sharedEmailDomains', 'get'>;
  'GET /directory/sharedEmailDomains/{sharedEmailDomain-id}': Operation<
    '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    'get'
  >;
  'PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}': Operation<
    '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    'patch'
  >;
  'POST /directory/sharedEmailDomains': Operation<'/directory/sharedEmailDomains', 'post'>;
}

/**
 * `DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/sharedEmailDomains/{sharedEmailDomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedEmailDomain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/sharedEmailDomains`
 *
 */
export function list(
  params?: IEndpoints['GET /directory/sharedEmailDomains']['parameters']
): EndpointRequest<IEndpoints['GET /directory/sharedEmailDomains']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/sharedEmailDomains',
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
 * `GET /directory/sharedEmailDomains/{sharedEmailDomain-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /directory/sharedEmailDomains/{sharedEmailDomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/sharedEmailDomains/{sharedEmailDomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedEmailDomain-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}']['body'],
  params?: IEndpoints['PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/sharedEmailDomains/{sharedEmailDomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/sharedEmailDomains/{sharedEmailDomain-id}',
    paramDefs: [{ name: 'sharedEmailDomain-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/sharedEmailDomains`
 *
 */
export function create(
  body: IEndpoints['POST /directory/sharedEmailDomains']['body'],
  params?: IEndpoints['POST /directory/sharedEmailDomains']['parameters']
): EndpointRequest<IEndpoints['POST /directory/sharedEmailDomains']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/sharedEmailDomains',
    paramDefs: [],
    params,
    body,
  };
}
