import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/providerTenantSettings/{providerTenantSetting-id}': Operation<
    '/security/providerTenantSettings/{providerTenantSetting-id}',
    'delete'
  >;
  'GET /security/providerTenantSettings': Operation<'/security/providerTenantSettings', 'get'>;
  'GET /security/providerTenantSettings/{providerTenantSetting-id}': Operation<
    '/security/providerTenantSettings/{providerTenantSetting-id}',
    'get'
  >;
  'PATCH /security/providerTenantSettings/{providerTenantSetting-id}': Operation<
    '/security/providerTenantSettings/{providerTenantSetting-id}',
    'patch'
  >;
  'POST /security/providerTenantSettings': Operation<'/security/providerTenantSettings', 'post'>;
}

/**
 * `DELETE /security/providerTenantSettings/{providerTenantSetting-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/providerTenantSettings/{providerTenantSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/providerTenantSettings/{providerTenantSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/providerTenantSettings/{providerTenantSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'providerTenantSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/providerTenantSettings`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/providerTenantSettings']['parameters']
): EndpointRequest<IEndpoints['GET /security/providerTenantSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/providerTenantSettings',
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
 * `GET /security/providerTenantSettings/{providerTenantSetting-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/providerTenantSettings/{providerTenantSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/providerTenantSettings/{providerTenantSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/providerTenantSettings/{providerTenantSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'providerTenantSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/providerTenantSettings/{providerTenantSetting-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/providerTenantSettings/{providerTenantSetting-id}']['body'],
  params?: IEndpoints['PATCH /security/providerTenantSettings/{providerTenantSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/providerTenantSettings/{providerTenantSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/providerTenantSettings/{providerTenantSetting-id}',
    paramDefs: [{ name: 'providerTenantSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/providerTenantSettings`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/providerTenantSettings']['body'],
  params?: IEndpoints['POST /security/providerTenantSettings']['parameters']
): EndpointRequest<IEndpoints['POST /security/providerTenantSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/providerTenantSettings',
    paramDefs: [],
    params,
    body,
  };
}
