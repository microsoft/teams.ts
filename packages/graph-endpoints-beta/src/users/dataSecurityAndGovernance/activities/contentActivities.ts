import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
    'get'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'patch'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'contentActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities`
 *
 * Collection of activity logs related to content processing.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
 *
 * Collection of activity logs related to content processing.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'contentActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contentActivity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/activities/contentActivities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/activities/contentActivities',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
