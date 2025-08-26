import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo`
 *
 * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo`
 *
 * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo`
 *
 * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['response']
> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}
