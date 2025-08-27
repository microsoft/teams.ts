import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/policy/labels/extractLabel': Operation<
    '/me/informationProtection/policy/labels/extractLabel',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/policy/labels/extractLabel`
 *
 * Using the metadata that exists on an already-labeled piece of information, resolve the metadata to a specific sensitivity label. The contentInfo input is resolved to informationProtectionContentLabel.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/policy/labels/extractLabel']['body'],
  params?: IEndpoints['POST /me/informationProtection/policy/labels/extractLabel']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/policy/labels/extractLabel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/policy/labels/extractLabel',
    paramDefs: [],
    params,
    body,
  };
}
