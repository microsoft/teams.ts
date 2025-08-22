import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/create': Operation<'/print/printers/create', 'post'>;
}

/**
 * `POST /print/printers/create`
 *
 * Create (register) a printer with the Universal Print service. This is a long-running operation and as such, it returns a printerCreateOperation that can be used to track and verify the registration of the printer. For help creating the required Certificate Signing Request (CSR) for creating printer, see the CSR generation code sample.
 */
export function create(
  body: IEndpoints['POST /print/printers/create']['body'],
  params?: IEndpoints['POST /print/printers/create']['parameters']
): EndpointRequest<IEndpoints['POST /print/printers/create']['response']> {
  return {
    method: 'post',
    path: '/print/printers/create',
    paramDefs: [],
    params,
    body,
  };
}
