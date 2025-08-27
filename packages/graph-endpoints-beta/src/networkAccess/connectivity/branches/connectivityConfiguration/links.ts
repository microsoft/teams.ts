import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'connectivityConfigurationLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links`
 *
 * List of connectivity configurations for deviceLink objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
 *
 * List of connectivity configurations for deviceLink objects.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'connectivityConfigurationLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    paramDefs: [
      { name: 'branchSite-id', in: 'path' },
      { name: 'connectivityConfigurationLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
    paramDefs: [{ name: 'branchSite-id', in: 'path' }],
    params,
    body,
  };
}
