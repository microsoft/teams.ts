import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/partnerInformation': Operation<
    '/organization/{organization-id}/partnerInformation',
    'delete'
  >;
  'GET /organization/{organization-id}/partnerInformation': Operation<
    '/organization/{organization-id}/partnerInformation',
    'get'
  >;
  'PATCH /organization/{organization-id}/partnerInformation': Operation<
    '/organization/{organization-id}/partnerInformation',
    'patch'
  >;
}

/**
 * `DELETE /organization/{organization-id}/partnerInformation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/partnerInformation']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/partnerInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/partnerInformation',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/partnerInformation`
 *
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/partnerInformation']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/partnerInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/partnerInformation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/partnerInformation`
 *
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/partnerInformation']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/partnerInformation']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/partnerInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/partnerInformation',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
