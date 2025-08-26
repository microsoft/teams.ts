import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/associateWithHubSites',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
