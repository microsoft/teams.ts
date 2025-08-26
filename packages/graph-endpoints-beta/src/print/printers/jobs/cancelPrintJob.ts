import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob',
    'post'
  >;
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/cancelPrintJob',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
