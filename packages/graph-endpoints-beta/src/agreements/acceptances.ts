import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'delete'
  >;
  'GET /agreements/{agreement-id}/acceptances': Operation<
    '/agreements/{agreement-id}/acceptances',
    'get'
  >;
  'GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'patch'
  >;
  'POST /agreements/{agreement-id}/acceptances': Operation<
    '/agreements/{agreement-id}/acceptances',
    'post'
  >;
}

/**
 * `DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/acceptances`
 *
 * Read-only. Information about acceptances of this agreement.
 */
export function list(
  params?: IEndpoints['GET /agreements/{agreement-id}/acceptances']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}/acceptances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/acceptances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
 *
 * Read-only. Information about acceptances of this agreement.
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /agreements/{agreement-id}/acceptances`
 *
 */
export function create(
  body: IEndpoints['POST /agreements/{agreement-id}/acceptances']['body'],
  params?: IEndpoints['POST /agreements/{agreement-id}/acceptances']['parameters']
): EndpointRequest<IEndpoints['POST /agreements/{agreement-id}/acceptances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/agreements/{agreement-id}/acceptances',
    paramDefs: [{ name: 'agreement-id', in: 'path' }],
    params,
    body,
  };
}
