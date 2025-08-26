import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/favicon': Operation<
    '/organization/{organization-id}/branding/favicon',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/favicon': Operation<
    '/organization/{organization-id}/branding/favicon',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/favicon': Operation<
    '/organization/{organization-id}/branding/favicon',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/favicon`
 *
 * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/favicon']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/favicon']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/favicon',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/favicon`
 *
 * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/favicon']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}/branding/favicon']['response']> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/favicon',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/favicon`
 *
 * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/favicon']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/favicon']['parameters']
): EndpointRequest<IEndpoints['PUT /organization/{organization-id}/branding/favicon']['response']> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/favicon',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
