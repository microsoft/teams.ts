import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl`
 *
 * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
