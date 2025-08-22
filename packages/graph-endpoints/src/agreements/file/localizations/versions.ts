import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'delete'
  >;
  'GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
    'get'
  >;
  'GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    'patch'
  >;
  'POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions': Operation<
    '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
    'post'
  >;
}

/**
 * `DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
> {
  return {
    method: 'delete',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
      { name: 'agreementFileVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions`
 *
 * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
 */
export function list(
  params?: IEndpoints['GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['response']
> {
  return {
    method: 'get',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
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
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
 *
 * Read-only. Customized versions of the terms of use agreement in the Microsoft Entra tenant.
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
> {
  return {
    method: 'get',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
      { name: 'agreementFileVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}']['response']
> {
  return {
    method: 'patch',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}',
    paramDefs: [
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
      { name: 'agreementFileVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['body'],
  params?: IEndpoints['POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions']['response']
> {
  return {
    method: 'post',
    path: '/agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions',
    paramDefs: [
      { name: 'agreement-id', in: 'path' },
      { name: 'agreementFileLocalization-id', in: 'path' },
    ],
    params,
    body,
  };
}
