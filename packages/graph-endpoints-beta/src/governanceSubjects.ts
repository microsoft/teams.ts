import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /governanceSubjects/{governanceSubject-id}': Operation<
    '/governanceSubjects/{governanceSubject-id}',
    'delete'
  >;
  'GET /governanceSubjects': Operation<'/governanceSubjects', 'get'>;
  'GET /governanceSubjects/{governanceSubject-id}': Operation<
    '/governanceSubjects/{governanceSubject-id}',
    'get'
  >;
  'PATCH /governanceSubjects/{governanceSubject-id}': Operation<
    '/governanceSubjects/{governanceSubject-id}',
    'patch'
  >;
  'POST /governanceSubjects': Operation<'/governanceSubjects', 'post'>;
}

/**
 * `DELETE /governanceSubjects/{governanceSubject-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceSubjects/{governanceSubject-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /governanceSubjects/{governanceSubject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceSubjects/{governanceSubject-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceSubject-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceSubjects`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceSubjects']['parameters']
): EndpointRequest<IEndpoints['GET /governanceSubjects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceSubjects',
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
 * `GET /governanceSubjects/{governanceSubject-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceSubjects/{governanceSubject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /governanceSubjects/{governanceSubject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceSubjects/{governanceSubject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceSubject-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceSubjects/{governanceSubject-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceSubjects/{governanceSubject-id}']['body'],
  params?: IEndpoints['PATCH /governanceSubjects/{governanceSubject-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /governanceSubjects/{governanceSubject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceSubjects/{governanceSubject-id}',
    paramDefs: [{ name: 'governanceSubject-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /governanceSubjects`
 *
 */
export function create(
  body: IEndpoints['POST /governanceSubjects']['body'],
  params?: IEndpoints['POST /governanceSubjects']['parameters']
): EndpointRequest<IEndpoints['POST /governanceSubjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceSubjects',
    paramDefs: [],
    params,
    body,
  };
}
