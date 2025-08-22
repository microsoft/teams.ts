import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete': Operation<
    '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/permanentDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'contactFolder-id', in: 'path' },
      { name: 'contactFolder-id1', in: 'path' },
    ],
    params,
    body,
  };
}
