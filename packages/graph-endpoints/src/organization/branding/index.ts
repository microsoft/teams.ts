export * as backgroundImage from './backgroundImage';
export * as bannerLogo from './bannerLogo';
export * as customCSS from './customCSS';
export * as favicon from './favicon';
export * as headerLogo from './headerLogo';
export * as localizations from './localizations';
export * as squareLogo from './squareLogo';
export * as squareLogoDark from './squareLogoDark';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding': Operation<
    '/organization/{organization-id}/branding',
    'delete'
  >;
  'GET /organization/{organization-id}/branding': Operation<
    '/organization/{organization-id}/branding',
    'get'
  >;
  'PATCH /organization/{organization-id}/branding': Operation<
    '/organization/{organization-id}/branding',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding`
 *
 * Delete the default organizational branding object. To delete the organizationalBranding object, all images (Stream types) must first be removed from the object.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding']['parameters']
): EndpointRequest<IEndpoints['DELETE /organization/{organization-id}/branding']['response']> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding`
 *
 * Retrieve the default organizational branding object, if the Accept-Language header is set to 0 or default. If no default organizational branding object exists, this method returns a 404 Not Found error. If the Accept-Language header is set to an existing locale identified by the value of its id, this method retrieves the branding for the specified locale. This method retrieves only non-Stream properties, for example, usernameHintText and signInPageText. To retrieve Stream types of the default branding, for example, bannerLogo and backgroundImage, use the GET organizationalBrandingLocalization method.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}/branding']['response']> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/branding`
 *
 * Update the properties of the default branding object specified by the organizationalBranding resource.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/branding']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/branding']['parameters']
): EndpointRequest<IEndpoints['PATCH /organization/{organization-id}/branding']['response']> {
  return {
    method: 'patch',
    path: '/organization/{organization-id}/branding',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
