import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'delete'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'get'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'get'
  >;
  'PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'patch'
  >;
  'POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'post'
  >;
}

/**
 * `DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'authoredNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes`
 *
 * List of notes associated with the request.
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
 *
 * List of notes associated with the request.
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'authoredNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['body'],
  params?: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    paramDefs: [
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'authoredNote-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes`
 *
 */
export function create(
  body: IEndpoints['POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['body'],
  params?: IEndpoints['POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    paramDefs: [{ name: 'subjectRightsRequest-id', in: 'path' }],
    params,
    body,
  };
}
