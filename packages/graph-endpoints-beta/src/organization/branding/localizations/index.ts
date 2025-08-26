export * as backgroundImage from './backgroundImage';
export * as bannerLogo from './bannerLogo';
export * as customCSS from './customCSS';
export * as favicon from './favicon';
export * as headerLogo from './headerLogo';
export * as squareLogo from './squareLogo';
export * as squareLogoDark from './squareLogoDark';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations': Operation<
    '/organization/{organization-id}/branding/localizations',
    'get'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    'get'
  >;
  'PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    'patch'
  >;
  'POST /organization/{organization-id}/branding/localizations': Operation<
    '/organization/{organization-id}/branding/localizations',
    'post'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}`
 *
 * Delete a localized branding object. To delete the organizationalBrandingLocalization object, all images (Stream types) must first be removed from the object.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations`
 *
 * Retrieve all localization branding objects, including the default branding.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}`
 *
 * Read the properties and relationships of an organizationalBrandingLocalization object. To retrieve a localization branding object, specify the value of id in the URL.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}`
 *
 * Update the properties of an organizationalBrandingLocalization object for a specific localization.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'organizationalBrandingLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /organization/{organization-id}/branding/localizations`
 *
 * Create a new organizationalBrandingLocalization object. This creates a localized branding and at the same time, the default branding if it doesn&#x27;t exist. The default branding is created only once. It&#x27;s loaded when a localized branding isn&#x27;t configured for the user&#x27;s browser language. To retrieve the default branding, see Get branding.
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/branding/localizations']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/branding/localizations']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/branding/localizations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization/{organization-id}/branding/localizations',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
