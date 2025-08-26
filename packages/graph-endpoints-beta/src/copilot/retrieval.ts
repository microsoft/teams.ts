import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /copilot/retrieval': Operation<'/copilot/retrieval', 'post'>;
}

/**
 * `POST /copilot/retrieval`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /copilot/retrieval']['body'],
  params?: IEndpoints['POST /copilot/retrieval']['parameters']
): EndpointRequest<IEndpoints['POST /copilot/retrieval']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/retrieval',
    paramDefs: [],
    params,
    body,
  };
}
