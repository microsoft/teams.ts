import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon`
 *
 * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon`
 *
 * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon`
 *
 * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['response']
> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}
