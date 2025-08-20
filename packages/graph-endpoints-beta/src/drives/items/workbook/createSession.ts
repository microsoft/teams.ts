import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/createSession',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession`
 *
 * Create a new workbook session.  Excel APIs can be called in one of two modes:  To represent the session in the API, use the workbook-session-id: {session-id} header.  In some cases, creating a new session requires an indeterminate time to complete. Microsoft Graph also provides a long running operations pattern. This pattern provides a way to poll for creation status updates, without waiting for the creation to complete. The following are the steps:
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/createSession']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/createSession',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
