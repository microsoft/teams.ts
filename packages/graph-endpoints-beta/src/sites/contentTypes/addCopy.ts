import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/contentTypes/addCopy': Operation<
    '/sites/{site-id}/contentTypes/addCopy',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/contentTypes/addCopy`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentTypes/addCopy']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentTypes/addCopy']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/contentTypes/addCopy']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/contentTypes/addCopy',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
