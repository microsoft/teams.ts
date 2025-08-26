import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/associateWithHubSites',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
