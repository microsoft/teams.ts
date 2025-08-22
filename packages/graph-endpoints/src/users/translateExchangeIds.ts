import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/translateExchangeIds': Operation<
    '/users/{user-id}/translateExchangeIds',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/translateExchangeIds`
 *
 * Translate identifiers of Outlook-related resources between formats.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/translateExchangeIds']['body'],
  params?: IEndpoints['POST /users/{user-id}/translateExchangeIds']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/translateExchangeIds']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/translateExchangeIds',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
