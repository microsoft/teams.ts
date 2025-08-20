import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/me/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `POST /me/onenote/notebooks/getNotebookFromWebUrl`
 *
 * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/getNotebookFromWebUrl']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/getNotebookFromWebUrl']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/notebooks/getNotebookFromWebUrl']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/getNotebookFromWebUrl',
    paramDefs: [],
    params,
    body,
  };
}
