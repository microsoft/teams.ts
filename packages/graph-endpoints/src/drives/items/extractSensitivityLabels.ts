import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
