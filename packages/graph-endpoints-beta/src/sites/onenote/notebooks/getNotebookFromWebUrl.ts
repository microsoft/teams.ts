import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl`
 *
 * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
