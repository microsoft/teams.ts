import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession',
    'post'
  >;
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession`
 *
 * Create an upload session that allows an app to iteratively upload ranges of a binary file linked to the print document. As part of the response, this action returns an upload URL that can be used in subsequent sequential PUT queries. Request headers for each PUT operation can be used to specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession']['response']
> {
  return {
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/documents/{printDocument-id}/createUploadSession',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printDocument-id', in: 'path' },
    ],
    params,
    body,
  };
}
