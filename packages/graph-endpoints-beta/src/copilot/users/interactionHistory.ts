import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/users/{aiUser-id}/interactionHistory': Operation<
    '/copilot/users/{aiUser-id}/interactionHistory',
    'delete'
  >;
  'GET /copilot/users/{aiUser-id}/interactionHistory': Operation<
    '/copilot/users/{aiUser-id}/interactionHistory',
    'get'
  >;
  'PATCH /copilot/users/{aiUser-id}/interactionHistory': Operation<
    '/copilot/users/{aiUser-id}/interactionHistory',
    'patch'
  >;
}

/**
 * `DELETE /copilot/users/{aiUser-id}/interactionHistory`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/users/{aiUser-id}/interactionHistory']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/users/{aiUser-id}/interactionHistory']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/users/{aiUser-id}/interactionHistory',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'aiUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/interactionHistory`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/interactionHistory']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users/{aiUser-id}/interactionHistory']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/interactionHistory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aiUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/users/{aiUser-id}/interactionHistory`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/users/{aiUser-id}/interactionHistory']['body'],
  params?: IEndpoints['PATCH /copilot/users/{aiUser-id}/interactionHistory']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/users/{aiUser-id}/interactionHistory']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/users/{aiUser-id}/interactionHistory',
    paramDefs: [{ name: 'aiUser-id', in: 'path' }],
    params,
    body,
  };
}
