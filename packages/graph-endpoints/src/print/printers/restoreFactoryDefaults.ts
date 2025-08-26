import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /print/printers/{printer-id}/restoreFactoryDefaults': Operation<
    '/print/printers/{printer-id}/restoreFactoryDefaults',
    'post'
  >;
}

/**
 * `POST /print/printers/{printer-id}/restoreFactoryDefaults`
 *
 * Restore a printer&#x27;s default settings to the values specified by the manufacturer.
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/restoreFactoryDefaults']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/restoreFactoryDefaults']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/restoreFactoryDefaults']['response']
> {
  return {
    method: 'post',
    path: '/print/printers/{printer-id}/restoreFactoryDefaults',
    paramDefs: [{ name: 'printer-id', in: 'path' }],
    params,
    body,
  };
}
