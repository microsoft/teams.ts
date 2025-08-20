import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook`
 *
 * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
    ],
    params,
    body,
  };
}
