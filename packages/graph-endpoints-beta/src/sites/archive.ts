import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/archive': Operation<'/sites/{site-id}/archive', 'post'>;
}

/**
 * `POST /sites/{site-id}/archive`
 *
 * Archive an active SharePoint site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/archive']['body'],
  params?: IEndpoints['POST /sites/{site-id}/archive']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/archive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/archive',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
