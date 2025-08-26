import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/redirect',
    'post'
  >;
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect`
 *
 * Redirect a print job to a different printer. Redirecting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created.  For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/redirect']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/redirect',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
