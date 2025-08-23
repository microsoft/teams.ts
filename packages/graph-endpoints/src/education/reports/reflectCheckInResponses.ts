import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}': Operation<
    '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    'delete'
  >;
  'GET /education/reports/reflectCheckInResponses': Operation<
    '/education/reports/reflectCheckInResponses',
    'get'
  >;
  'GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}': Operation<
    '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    'get'
  >;
  'PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}': Operation<
    '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    'patch'
  >;
  'POST /education/reports/reflectCheckInResponses': Operation<
    '/education/reports/reflectCheckInResponses',
    'post'
  >;
}

/**
 * `DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'reflectCheckInResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/reports/reflectCheckInResponses`
 *
 * Get a list of Reflect check-ins that were submitted by a student.
 */
export function list(
  params?: IEndpoints['GET /education/reports/reflectCheckInResponses']['parameters']
): EndpointRequest<IEndpoints['GET /education/reports/reflectCheckInResponses']['response']> {
  return {
    method: 'get',
    path: '/education/reports/reflectCheckInResponses',
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
 * `GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'reflectCheckInResponse-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['body'],
  params?: IEndpoints['PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/reports/reflectCheckInResponses/{reflectCheckInResponse-id}',
    paramDefs: [{ name: 'reflectCheckInResponse-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/reports/reflectCheckInResponses`
 *
 */
export function create(
  body: IEndpoints['POST /education/reports/reflectCheckInResponses']['body'],
  params?: IEndpoints['POST /education/reports/reflectCheckInResponses']['parameters']
): EndpointRequest<IEndpoints['POST /education/reports/reflectCheckInResponses']['response']> {
  return {
    method: 'post',
    path: '/education/reports/reflectCheckInResponses',
    paramDefs: [],
    params,
    body,
  };
}
