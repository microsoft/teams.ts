import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/devices/{teamworkDevice-id}/health': Operation<
    '/teamwork/devices/{teamworkDevice-id}/health',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/health': Operation<
    '/teamwork/devices/{teamworkDevice-id}/health',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/health': Operation<
    '/teamwork/devices/{teamworkDevice-id}/health',
    'patch'
  >;
}

/**
 * `DELETE /teamwork/devices/{teamworkDevice-id}/health`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/health']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/health']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/devices/{teamworkDevice-id}/health',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/devices/{teamworkDevice-id}/health`
 *
 * Get the health details of a Microsoft Teams-enabled device. Device health is calculated based on the device configuration and other device parameters.
 */
export function get(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/health']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/health']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}/health',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/devices/{teamworkDevice-id}/health`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/health']['body'],
  params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/health']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/health']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/devices/{teamworkDevice-id}/health',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
