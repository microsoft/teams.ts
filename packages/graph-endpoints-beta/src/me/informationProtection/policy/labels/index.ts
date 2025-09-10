import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'delete'
  >;
  'GET /me/informationProtection/policy/labels': Operation<
    '/me/informationProtection/policy/labels',
    'get'
  >;
  'GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'get'
  >;
  'PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'patch'
  >;
  'POST /me/informationProtection/policy/labels': Operation<
    '/me/informationProtection/policy/labels',
    'post'
  >;
  'POST /me/informationProtection/policy/labels/evaluateApplication': Operation<
    '/me/informationProtection/policy/labels/evaluateApplication',
    'post'
  >;
  'POST /me/informationProtection/policy/labels/evaluateClassificationResults': Operation<
    '/me/informationProtection/policy/labels/evaluateClassificationResults',
    'post'
  >;
  'POST /me/informationProtection/policy/labels/evaluateRemoval': Operation<
    '/me/informationProtection/policy/labels/evaluateRemoval',
    'post'
  >;
  'POST /me/informationProtection/policy/labels/extractLabel': Operation<
    '/me/informationProtection/policy/labels/extractLabel',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['informationProtectionLabel-id'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/policy/labels`
 *
 * Get a collection of information protection labels available to the user or to the organization.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/policy/labels']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection/policy/labels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/policy/labels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      path: ['informationProtectionLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      path: ['informationProtectionLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/policy/labels']['body']
): EndpointRequest<IEndpoints['POST /me/informationProtection/policy/labels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/policy/labels',
    body,
  };
}

export const evaluateApplication = {
  /**
   * `POST /me/informationProtection/policy/labels/evaluateApplication`
   *
   * Compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set manually or explicitly by a user or service, rather than automatically based on file contents.  Given contentInfo, which includes existing content metadata key/value pairs, and labelingOptions as an input, the API returns an informationProtectionAction object that contains one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/policy/labels/evaluateApplication']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/policy/labels/evaluateApplication']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/policy/labels/evaluateApplication',
      body,
    };
  },
};

export const evaluateClassificationResults = {
  /**
   * `POST /me/informationProtection/policy/labels/evaluateClassificationResults`
   *
   * Using classification results, compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service. To evaluate based on classification results, provide contentInfo, which includes existing content metadata key/value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/policy/labels/evaluateClassificationResults']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/policy/labels/evaluateClassificationResults']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/policy/labels/evaluateClassificationResults',
      body,
    };
  },
};

export const evaluateRemoval = {
  /**
   * `POST /me/informationProtection/policy/labels/evaluateRemoval`
   *
   * Indicate to the consuming application what actions it should take to remove the label information. Given contentInfo as an input, which includes existing content metadata key/value pairs, the API returns an informationProtectionAction that contains some combination of one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/policy/labels/evaluateRemoval']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/policy/labels/evaluateRemoval']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/policy/labels/evaluateRemoval',
      body,
    };
  },
};

export const extractLabel = {
  /**
   * `POST /me/informationProtection/policy/labels/extractLabel`
   *
   * Using the metadata that exists on an already-labeled piece of information, resolve the metadata to a specific sensitivity label. The contentInfo input is resolved to informationProtectionContentLabel.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/policy/labels/extractLabel']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/policy/labels/extractLabel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/policy/labels/extractLabel',
      body,
    };
  },
};
