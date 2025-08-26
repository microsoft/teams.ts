import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/devices/{teamworkDevice-id}/activity': Operation<
    '/teamwork/devices/{teamworkDevice-id}/activity',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/activity': Operation<
    '/teamwork/devices/{teamworkDevice-id}/activity',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/activity': Operation<
    '/teamwork/devices/{teamworkDevice-id}/activity',
    'patch'
  >;
}

/**
 * `DELETE /teamwork/devices/{teamworkDevice-id}/activity`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/activity']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/activity']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/devices/{teamworkDevice-id}/activity',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/devices/{teamworkDevice-id}/activity`
 *
 * Get the activity status of a Microsoft Teams-enabled device.
 */
export function get(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/activity']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/activity']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}/activity',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/devices/{teamworkDevice-id}/activity`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/activity']['body'],
  params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/activity']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/activity']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/devices/{teamworkDevice-id}/activity',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
