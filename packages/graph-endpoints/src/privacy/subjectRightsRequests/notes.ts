import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'delete'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'get'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'get'
  >;
  'PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'patch'
  >;
  'POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'post'
  >;
}

/**
 * `DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
> {
  return {
    method: 'delete',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'authoredNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes`
 *
 * Get the list of authored notes assoicated with a subject rights request.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
> {
  return {
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
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
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
 *
 * List of notes associated with the request.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
> {
  return {
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
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
 * `PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['body'],
  params?: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
> {
  return {
    method: 'patch',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    paramDefs: [
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'authoredNote-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes`
 *
 * Create a new authoredNote object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['body'],
  params?: IEndpoints['POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
): EndpointRequest<
  IEndpoints['POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
> {
  return {
    method: 'post',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    paramDefs: [{ name: 'subjectRightsRequest-id', in: 'path' }],
    params,
    body,
  };
}
