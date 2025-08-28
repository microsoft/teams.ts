import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}': Operation<
    '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    'delete'
  >;
  'GET /dataClassification/exactMatchUploadAgents': Operation<
    '/dataClassification/exactMatchUploadAgents',
    'get'
  >;
  'GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}': Operation<
    '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    'get'
  >;
  'PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}': Operation<
    '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    'patch'
  >;
  'POST /dataClassification/exactMatchUploadAgents': Operation<
    '/dataClassification/exactMatchUploadAgents',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exactMatchUploadAgent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchUploadAgents`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/exactMatchUploadAgents']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/exactMatchUploadAgents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchUploadAgents',
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
 * `GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exactMatchUploadAgent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/exactMatchUploadAgents/{exactMatchUploadAgent-id}',
    paramDefs: [{ name: 'exactMatchUploadAgent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/exactMatchUploadAgents`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchUploadAgents']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchUploadAgents']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/exactMatchUploadAgents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchUploadAgents',
    paramDefs: [],
    params,
    body,
  };
}
