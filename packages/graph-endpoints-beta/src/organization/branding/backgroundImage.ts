import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/backgroundImage': Operation<
    '/organization/{organization-id}/branding/backgroundImage',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/backgroundImage': Operation<
    '/organization/{organization-id}/branding/backgroundImage',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/backgroundImage': Operation<
    '/organization/{organization-id}/branding/backgroundImage',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/backgroundImage`
 *
 * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/backgroundImage']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/backgroundImage']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/branding/backgroundImage',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/backgroundImage`
 *
 * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/backgroundImage']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/backgroundImage']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/branding/backgroundImage',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/backgroundImage`
 *
 * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/backgroundImage']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/backgroundImage']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/backgroundImage']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/organization/{organization-id}/branding/backgroundImage',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
