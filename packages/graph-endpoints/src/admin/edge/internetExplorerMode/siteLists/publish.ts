import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish',
    'post'
  >;
}

/**
 * `POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish`
 *
 * Publish the specified browserSiteList for devices to download.
 */
export function create(
  body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish']['body'],
  params?: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish']['response']
> {
  return {
    method: 'post',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/publish',
    paramDefs: [{ name: 'browserSiteList-id', in: 'path' }],
    params,
    body,
  };
}
