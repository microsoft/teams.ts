import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content',
    'get'
  >;
  'PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content',
    'put'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewSet-id', in: 'path' },
      { name: 'ediscoveryFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content`
 *
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewSet-id', in: 'path' },
      { name: 'ediscoveryFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content`
 *
 */
export function set(
  body: IEndpoints['PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['body'],
  params?: IEndpoints['PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/files/{ediscoveryFile-id}/content',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewSet-id', in: 'path' },
      { name: 'ediscoveryFile-id', in: 'path' },
    ],
    params,
    body,
  };
}
