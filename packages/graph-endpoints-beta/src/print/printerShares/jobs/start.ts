import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/start',
    'post'
  >;
}

/**
 * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/start']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/start',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
