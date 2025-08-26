import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/devices/{teamworkDevice-id}/updateSoftware': Operation<
    '/teamwork/devices/{teamworkDevice-id}/updateSoftware',
    'post'
  >;
}

/**
 * `POST /teamwork/devices/{teamworkDevice-id}/updateSoftware`
 *
 * Update the software for a Microsoft Teams-enabled device. This API triggers a long-running operation.
 */
export function create(
  body: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/updateSoftware']['body'],
  params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/updateSoftware']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/updateSoftware']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/devices/{teamworkDevice-id}/updateSoftware',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
