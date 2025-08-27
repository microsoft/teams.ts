import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel',
    'post'
  >;
}

/**
 * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel`
 *
 * Cancel a print job. Print jobs can be canceled only on behalf of a user, using delegated permissions.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/cancel',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
