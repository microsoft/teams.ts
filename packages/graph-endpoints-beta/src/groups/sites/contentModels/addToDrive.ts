import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive`
 *
 * Apply a contentModel to SharePoint document libraries. For an existing model that&#x27;s already trained, this action automatically processes new documents that are added to the SharePoint libraries.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
    body,
  };
}
