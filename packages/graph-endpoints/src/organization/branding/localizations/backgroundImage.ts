import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage`
 *
 * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage`
 *
 * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage`
 *
 * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['response']
> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}
