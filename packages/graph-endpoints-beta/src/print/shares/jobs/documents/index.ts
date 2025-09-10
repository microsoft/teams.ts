import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'delete'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    'patch'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    'post'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession',
    'post'
  >;
}

/**
 * `DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id', 'printJob-id', 'printDocument-id'],
    },
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents`
 *
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id', 'printDocument-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id', 'printDocument-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents`
 *
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession`
   *
   * Create an upload session that allows an app to iteratively upload ranges of a binary file linked to the print document. As part of the response, this action returns an upload URL that can be used in subsequent sequential PUT queries. Request headers for each PUT operation can be used to specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.
   */
  create: function create(
    body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['body'],
    params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession',
      paramDefs: {
        path: ['printerShare-id', 'printJob-id', 'printDocument-id'],
      },
      params,
      body,
    };
  },
};
