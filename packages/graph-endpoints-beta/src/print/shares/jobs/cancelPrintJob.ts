import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob',
    'post'
  >;
}

/**
 * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/cancelPrintJob',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
