import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/agreementAcceptances/{agreementAcceptance-id}',
    'delete'
  >;
  'GET /agreementAcceptances': Operation<'/agreementAcceptances', 'get'>;
  'GET /agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
  'PATCH /agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/agreementAcceptances/{agreementAcceptance-id}',
    'patch'
  >;
  'POST /agreementAcceptances': Operation<'/agreementAcceptances', 'post'>;
}

/**
 * `DELETE /agreementAcceptances/{agreementAcceptance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreementAcceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /agreementAcceptances/{agreementAcceptance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreementAcceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreementAcceptances`
 *
 */
export function list(
  params?: IEndpoints['GET /agreementAcceptances']['parameters']
): EndpointRequest<IEndpoints['GET /agreementAcceptances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreementAcceptances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /agreementAcceptances/{agreementAcceptance-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /agreementAcceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<IEndpoints['GET /agreementAcceptances/{agreementAcceptance-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreementAcceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreementAcceptances/{agreementAcceptance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreementAcceptances/{agreementAcceptance-id}']['body'],
  params?: IEndpoints['PATCH /agreementAcceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /agreementAcceptances/{agreementAcceptance-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreementAcceptances/{agreementAcceptance-id}',
    paramDefs: [{ name: 'agreementAcceptance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /agreementAcceptances`
 *
 */
export function create(
  body: IEndpoints['POST /agreementAcceptances']['body'],
  params?: IEndpoints['POST /agreementAcceptances']['parameters']
): EndpointRequest<IEndpoints['POST /agreementAcceptances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/agreementAcceptances',
    paramDefs: [],
    params,
    body,
  };
}
