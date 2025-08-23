import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/interactionHistory': Operation<'/copilot/interactionHistory', 'delete'>;
  'GET /copilot/interactionHistory': Operation<'/copilot/interactionHistory', 'get'>;
  'PATCH /copilot/interactionHistory': Operation<'/copilot/interactionHistory', 'patch'>;
}

/**
 * `DELETE /copilot/interactionHistory`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/interactionHistory']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/interactionHistory']['response']> {
  return {
    method: 'delete',
    path: '/copilot/interactionHistory',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /copilot/interactionHistory`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/interactionHistory']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/interactionHistory']['response']> {
  return {
    method: 'get',
    path: '/copilot/interactionHistory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/interactionHistory`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/interactionHistory']['body'],
  params?: IEndpoints['PATCH /copilot/interactionHistory']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/interactionHistory']['response']> {
  return {
    method: 'patch',
    path: '/copilot/interactionHistory',
    paramDefs: [],
    params,
    body,
  };
}
