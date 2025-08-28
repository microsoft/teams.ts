import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob',
    'post'
  >;
}

/**
 * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/startPrintJob',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
