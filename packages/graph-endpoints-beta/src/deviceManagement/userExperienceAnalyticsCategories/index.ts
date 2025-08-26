export * as metricValues from './metricValues';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsCategories': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsCategories': Operation<
    '/deviceManagement/userExperienceAnalyticsCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsCategories`
 *
 * User experience analytics categories
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsCategories',
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
 * `GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}`
 *
 * User experience analytics categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsCategories/{userExperienceAnalyticsCategory-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsCategories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsCategories',
    paramDefs: [],
    params,
    body,
  };
}
