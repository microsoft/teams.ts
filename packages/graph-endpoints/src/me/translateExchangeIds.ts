import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/translateExchangeIds': Operation<'/me/translateExchangeIds', 'post'>;
}

/**
 * `POST /me/translateExchangeIds`
 *
 * Translate identifiers of Outlook-related resources between formats.
 */
export function create(
  body: IEndpoints['POST /me/translateExchangeIds']['body'],
  params?: IEndpoints['POST /me/translateExchangeIds']['parameters']
): EndpointRequest<IEndpoints['POST /me/translateExchangeIds']['response']> {
  return {
    method: 'post',
    path: '/me/translateExchangeIds',
    paramDefs: [],
    params,
    body,
  };
}
