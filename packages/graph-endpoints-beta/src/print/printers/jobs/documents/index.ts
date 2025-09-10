import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'delete'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/documents': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    'get'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'get'
  >;
  'PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'patch'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/documents': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    'post'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession',
    'post'
  >;
}

/**
 * `DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printer-id', 'printJob-id', 'printDocument-id'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/documents`
 *
 * Download the binary file associated with a printDocument. Calling this method yields a redirect response with a preauthenticated URL that can be used to download the payload.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    paramDefs: {
      path: ['printer-id', 'printJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: {
      path: ['printer-id', 'printJob-id', 'printDocument-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: {
      path: ['printer-id', 'printJob-id', 'printDocument-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/documents`
 *
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents',
    paramDefs: {
      path: ['printer-id', 'printJob-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession`
   *
   * Create an upload session that allows an app to iteratively upload ranges of a binary file linked to the print document. As part of the response, this action returns an upload URL that can be used in subsequent sequential PUT queries. Request headers for each PUT operation can be used to specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.
   */
  create: function create(
    body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['body'],
    params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession',
      paramDefs: {
        path: ['printer-id', 'printJob-id', 'printDocument-id'],
      },
      params,
      body,
    };
  },
};
