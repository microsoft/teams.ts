import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /sites/remove': Operation<'/sites/remove', 'post'>;
}

/**
 * `POST /sites/remove`
 *
 * Unfollow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /sites/remove']['body'],
  params?: IEndpoints['POST /sites/remove']['parameters']
): EndpointRequest<IEndpoints['POST /sites/remove']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/remove',
    paramDefs: [],
    params,
    body,
  };
}
