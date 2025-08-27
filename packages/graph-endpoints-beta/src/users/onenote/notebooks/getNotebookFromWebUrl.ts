import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/users/{user-id}/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl`
 *
 * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/notebooks/getNotebookFromWebUrl',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
