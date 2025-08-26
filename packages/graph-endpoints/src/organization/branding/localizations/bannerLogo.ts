import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo`
 *
 * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo`
 *
 * Read the properties and relationships of an organizationalBrandingLocalization object. To retrieve a localization branding object, specify the value of id in the URL.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo`
 *
 * Update the properties of an organizationalBrandingLocalization object for a specific localization.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['response']
> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}
