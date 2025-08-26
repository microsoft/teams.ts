export * as issues from './issues';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews': Operation<
    '/admin/serviceAnnouncement/healthOverviews',
    'get'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/healthOverviews': Operation<
    '/admin/serviceAnnouncement/healthOverviews',
    'post'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceHealth-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/healthOverviews`
 *
 * Retrieve the serviceHealth resources from the healthOverviews navigation property. This operation provides the health report of all subscribed services for a tenant.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement/healthOverviews']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/healthOverviews',
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
 * `GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}`
 *
 * Retrieve the properties and relationships of a serviceHealth object. This operation provides the health information of a specified service for a tenant.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceHealth-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}',
    paramDefs: [{ name: 'serviceHealth-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/healthOverviews`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/healthOverviews']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/healthOverviews',
    paramDefs: [],
    params,
    body,
  };
}
