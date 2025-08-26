import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics': Operation<
    '/teamwork/devices/{teamworkDevice-id}/runDiagnostics',
    'post'
  >;
}

/**
 * `POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics`
 *
 * Run and generate diagnostic logs for the specified Microsoft Teams-enabled device. This API triggers a long-running operation used to generate logs for a device.
 */
export function create(
  body: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics']['body'],
  params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/runDiagnostics']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/devices/{teamworkDevice-id}/runDiagnostics',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
