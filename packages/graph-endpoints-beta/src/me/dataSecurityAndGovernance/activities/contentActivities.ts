import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities',
    'get'
  >;
  'GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    'patch'
  >;
  'POST /me/dataSecurityAndGovernance/activities/contentActivities': Operation<
    '/me/dataSecurityAndGovernance/activities/contentActivities',
    'post'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contentActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/activities/contentActivities`
 *
 * Collection of activity logs related to content processing.
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/dataSecurityAndGovernance/activities/contentActivities',
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
 * `GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
 *
 * Collection of activity logs related to content processing.
 */
export function get(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contentActivity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/activities/contentActivities/{contentActivity-id}',
    paramDefs: [{ name: 'contentActivity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/dataSecurityAndGovernance/activities/contentActivities`
 *
 * Create a content activity for the signed-in user.
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/activities/contentActivities']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/activities/contentActivities']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/dataSecurityAndGovernance/activities/contentActivities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/dataSecurityAndGovernance/activities/contentActivities',
    paramDefs: [],
    params,
    body,
  };
}
