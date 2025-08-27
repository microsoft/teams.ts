import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/unarchive': Operation<'/sites/{site-id}/unarchive', 'post'>;
}

/**
 * `POST /sites/{site-id}/unarchive`
 *
 * Unarchive an archived SharePoint site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/unarchive']['body'],
  params?: IEndpoints['POST /sites/{site-id}/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/unarchive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/unarchive',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
