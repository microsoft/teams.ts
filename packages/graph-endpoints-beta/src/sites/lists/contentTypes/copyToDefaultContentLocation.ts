import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
