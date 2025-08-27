import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/associateWithHubSites',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
