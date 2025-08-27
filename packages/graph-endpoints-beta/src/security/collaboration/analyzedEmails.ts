import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}': Operation<
    '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    'delete'
  >;
  'GET /security/collaboration/analyzedEmails': Operation<
    '/security/collaboration/analyzedEmails',
    'get'
  >;
  'GET /security/collaboration/analyzedEmails/{analyzedEmail-id}': Operation<
    '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    'get'
  >;
  'PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}': Operation<
    '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    'patch'
  >;
  'POST /security/collaboration/analyzedEmails': Operation<
    '/security/collaboration/analyzedEmails',
    'post'
  >;
}

/**
 * `DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/collaboration/analyzedEmails/{analyzedEmail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'analyzedEmail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/collaboration/analyzedEmails`
 *
 * Read the properties and relationships of an analyzedEmail object.
 */
export function list(
  params?: IEndpoints['GET /security/collaboration/analyzedEmails']['parameters']
): EndpointRequest<IEndpoints['GET /security/collaboration/analyzedEmails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/collaboration/analyzedEmails',
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
 * `GET /security/collaboration/analyzedEmails/{analyzedEmail-id}`
 *
 * Read the properties and relationships of an analyzedEmail object.
 */
export function get(
  params?: IEndpoints['GET /security/collaboration/analyzedEmails/{analyzedEmail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/collaboration/analyzedEmails/{analyzedEmail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'analyzedEmail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}']['body'],
  params?: IEndpoints['PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/collaboration/analyzedEmails/{analyzedEmail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/collaboration/analyzedEmails/{analyzedEmail-id}',
    paramDefs: [{ name: 'analyzedEmail-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/collaboration/analyzedEmails`
 *
 */
export function create(
  body: IEndpoints['POST /security/collaboration/analyzedEmails']['body'],
  params?: IEndpoints['POST /security/collaboration/analyzedEmails']['parameters']
): EndpointRequest<IEndpoints['POST /security/collaboration/analyzedEmails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/collaboration/analyzedEmails',
    paramDefs: [],
    params,
    body,
  };
}
