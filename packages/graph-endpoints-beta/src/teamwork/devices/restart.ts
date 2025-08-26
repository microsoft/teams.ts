import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/devices/{teamworkDevice-id}/restart': Operation<
    '/teamwork/devices/{teamworkDevice-id}/restart',
    'post'
  >;
}

/**
 * `POST /teamwork/devices/{teamworkDevice-id}/restart`
 *
 * Restart the specified Microsoft Teams-enabled device asynchronously.  A device is restarted after the async operation completes successfully, which might occur subsequent to a response from this API.
 */
export function create(
  body: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/restart']['body'],
  params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/restart']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/restart']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/devices/{teamworkDevice-id}/restart',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
