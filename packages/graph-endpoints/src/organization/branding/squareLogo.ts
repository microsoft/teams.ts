import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/squareLogo': Operation<
    '/organization/{organization-id}/branding/squareLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/squareLogo': Operation<
    '/organization/{organization-id}/branding/squareLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/squareLogo': Operation<
    '/organization/{organization-id}/branding/squareLogo',
    'put'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/squareLogo`
 *
 * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/squareLogo']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/squareLogo']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/squareLogo',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/squareLogo`
 *
 * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/squareLogo']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/squareLogo']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/squareLogo',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /organization/{organization-id}/branding/squareLogo`
 *
 * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
 */
export function set(
  body: IEndpoints['PUT /organization/{organization-id}/branding/squareLogo']['body'],
  params?: IEndpoints['PUT /organization/{organization-id}/branding/squareLogo']['parameters']
): EndpointRequest<
  IEndpoints['PUT /organization/{organization-id}/branding/squareLogo']['response']
> {
  return {
    method: 'put',
    path: '/organization/{organization-id}/branding/squareLogo',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
