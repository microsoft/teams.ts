import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/issues': Operation<'/admin/serviceAnnouncement/issues', 'get'>;
  'GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/issues': Operation<'/admin/serviceAnnouncement/issues', 'post'>;
}

/**
 * `DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceHealthIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/issues`
 *
 * Retrieve serviceHealthIssue resources from the issues navigation property. This operation retrieves information about all service health issues that exist for the tenant.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/issues']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement/issues']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/issues',
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
 * `GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}`
 *
 * Retrieve the properties and relationships of a serviceHealthIssue object. This operation retrieves a specified service health issue for tenant. The operation returns an error if the issue does not exist for the tenant.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceHealthIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/issues/{serviceHealthIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/serviceAnnouncement/issues/{serviceHealthIssue-id}',
    paramDefs: [{ name: 'serviceHealthIssue-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/issues`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/issues']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/issues']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/issues']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/issues',
    paramDefs: [],
    params,
    body,
  };
}
