export * as host from './host';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostCookies': Operation<
    '/security/threatIntelligence/hostCookies',
    'get'
  >;
  'GET /security/threatIntelligence/hostCookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostCookies': Operation<
    '/security/threatIntelligence/hostCookies',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostCookie-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostCookies`
 *
 * Read the properties and relationships of a hostCookie object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostCookies']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostCookies']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostCookies',
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
 * `GET /security/threatIntelligence/hostCookies/{hostCookie-id}`
 *
 * Read the properties and relationships of a hostCookie object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostCookie-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    paramDefs: [{ name: 'hostCookie-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostCookies`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostCookies']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hostCookies']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostCookies']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostCookies',
    paramDefs: [],
    params,
    body,
  };
}
