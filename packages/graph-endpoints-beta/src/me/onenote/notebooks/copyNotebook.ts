import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/notebooks/{notebook-id}/copyNotebook': Operation<
    '/me/onenote/notebooks/{notebook-id}/copyNotebook',
    'post'
  >;
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/copyNotebook`
 *
 * Copies a notebook to the Notebooks folder in the destination Documents library. The folder is created if it doesn&#x27;t exist. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/copyNotebook']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/notebooks/{notebook-id}/copyNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/copyNotebook',
    paramDefs: [{ name: 'notebook-id', in: 'path' }],
    params,
    body,
  };
}
