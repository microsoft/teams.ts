import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive`
 *
 * Remove a contentModel from a SharePoint document library.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'contentModel-id', in: 'path' },
    ],
    params,
    body,
  };
}
