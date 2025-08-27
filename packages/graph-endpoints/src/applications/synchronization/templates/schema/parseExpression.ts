import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression`
 *
 * Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Microsoft Entra ID.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
