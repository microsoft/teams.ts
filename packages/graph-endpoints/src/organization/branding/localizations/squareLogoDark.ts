import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark`
 *
 * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark`
 *
 * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark`
 *
 * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['response']
> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}
