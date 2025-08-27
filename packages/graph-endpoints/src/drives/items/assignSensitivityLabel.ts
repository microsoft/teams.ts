import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
