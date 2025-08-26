import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/start': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/start',
    'post'
  >;
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/start`
 *
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/start']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/start']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/start']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/start',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
