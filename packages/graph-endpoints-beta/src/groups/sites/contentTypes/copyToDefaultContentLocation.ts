import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
