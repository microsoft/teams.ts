import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /sites/add': Operation<'/sites/add', 'post'>;
}

/**
 * `POST /sites/add`
 *
 * Follow a user&#x27;s site or multiple sites.
 */
export function create(
  body: IEndpoints['POST /sites/add']['body'],
  params?: IEndpoints['POST /sites/add']['parameters']
): EndpointRequest<IEndpoints['POST /sites/add']['response']> {
  return {
    method: 'post',
    path: '/sites/add',
    paramDefs: [],
    params,
    body,
  };
}
