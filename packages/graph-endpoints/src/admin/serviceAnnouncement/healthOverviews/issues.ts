import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
    'get'
  >;
  'GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues': Operation<
    '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
    'post'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['response']
> {
  return {
    method: 'delete',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceHealth-id', in: 'path' },
      { name: 'serviceHealthIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues`
 *
 * A collection of issues that happened on the service, with detailed information for each issue.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['response']
> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceHealth-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}`
 *
 * A collection of issues that happened on the service, with detailed information for each issue.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['response']
> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceHealth-id', in: 'path' },
      { name: 'serviceHealthIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}']['response']
> {
  return {
    method: 'patch',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues/{serviceHealthIssue-id}',
    paramDefs: [
      { name: 'serviceHealth-id', in: 'path' },
      { name: 'serviceHealthIssue-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues']['response']
> {
  return {
    method: 'post',
    path: '/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}/issues',
    paramDefs: [{ name: 'serviceHealth-id', in: 'path' }],
    params,
    body,
  };
}
