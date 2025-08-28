import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/devices/{teamworkDevice-id}/configuration': Operation<
    '/teamwork/devices/{teamworkDevice-id}/configuration',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/configuration': Operation<
    '/teamwork/devices/{teamworkDevice-id}/configuration',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/configuration': Operation<
    '/teamwork/devices/{teamworkDevice-id}/configuration',
    'patch'
  >;
}

/**
 * `DELETE /teamwork/devices/{teamworkDevice-id}/configuration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/configuration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/configuration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/devices/{teamworkDevice-id}/configuration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/devices/{teamworkDevice-id}/configuration`
 *
 * Get the configuration details of a Microsoft Teams-enabled device, including software versions, peripheral device configuration (for example, camera, display, microphone, and speaker), hardware configuration, and Microsoft Teams client configuration.
 */
export function get(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/configuration']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/configuration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}/configuration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/devices/{teamworkDevice-id}/configuration`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/configuration']['body'],
  params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/configuration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/configuration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/devices/{teamworkDevice-id}/configuration',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
