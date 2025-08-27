import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive`
 *
 * Remove a contentModel from a SharePoint document library.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
    body,
  };
}
