export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    'delete'
  >;
  'GET /agreements/{agreement-id}/file/localizations': Operation<
    '/agreements/{agreement-id}/file/localizations',
    'get'
  >;
  'GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    'patch'
  >;
  'POST /agreements/{agreement-id}/file/localizations': Operation<
    '/agreements/{agreement-id}/file/localizations',
    'post'
  >;
}

/**
 * `DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/file/localizations`
 *
 * Get a list of the default and localized agreement files.
 */
export function list(
  params?: IEndpoints['GET /agreements/{agreement-id}/file/localizations']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}/file/localizations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/file/localizations',
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
 * `GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}`
 *
 * The localized version of the terms of use agreement files attached to the agreement.
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}',
    paramDefs: [
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /agreements/{agreement-id}/file/localizations`
 *
 */
export function create(
  body: IEndpoints['POST /agreements/{agreement-id}/file/localizations']['body'],
  params?: IEndpoints['POST /agreements/{agreement-id}/file/localizations']['parameters']
): EndpointRequest<IEndpoints['POST /agreements/{agreement-id}/file/localizations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/agreements/{agreement-id}/file/localizations',
    paramDefs: [{ name: 'agreement-id', in: 'path' }],
    params,
    body,
  };
}
