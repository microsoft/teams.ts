import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/policy/labels': Operation<
    '/users/{user-id}/informationProtection/policy/labels',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/policy/labels': Operation<
    '/users/{user-id}/informationProtection/policy/labels',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication': Operation<
    '/users/{user-id}/informationProtection/policy/labels/evaluateApplication',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults': Operation<
    '/users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/policy/labels/evaluateRemoval': Operation<
    '/users/{user-id}/informationProtection/policy/labels/evaluateRemoval',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/policy/labels/extractLabel': Operation<
    '/users/{user-id}/informationProtection/policy/labels/extractLabel',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'informationProtectionLabel-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/policy/labels']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/policy/labels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/policy/labels',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      path: ['user-id', 'informationProtectionLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      path: ['user-id', 'informationProtectionLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/policy/labels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/policy/labels',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const evaluateApplication = {
  /**
   * `POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication`
   *
   * Compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set manually or explicitly by a user or service, rather than automatically based on file contents.  Given contentInfo, which includes existing content metadata key/value pairs, and labelingOptions as an input, the API returns an informationProtectionAction object that contains one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/policy/labels/evaluateApplication',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const evaluateClassificationResults = {
  /**
   * `POST /users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults`
   *
   * Using classification results, compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service. To evaluate based on classification results, provide contentInfo, which includes existing content metadata key/value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/policy/labels/evaluateClassificationResults',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const evaluateRemoval = {
  /**
   * `POST /users/{user-id}/informationProtection/policy/labels/evaluateRemoval`
   *
   * Indicate to the consuming application what actions it should take to remove the label information. Given contentInfo as an input, which includes existing content metadata key/value pairs, the API returns an informationProtectionAction that contains some combination of one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateRemoval']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateRemoval']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateRemoval']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/policy/labels/evaluateRemoval',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const extractLabel = {
  /**
   * `POST /users/{user-id}/informationProtection/policy/labels/extractLabel`
   *
   * Using the metadata that exists on an already-labeled piece of information, resolve the metadata to a specific sensitivity label. The contentInfo input is resolved to informationProtectionContentLabel.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/extractLabel']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/extractLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/extractLabel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/policy/labels/extractLabel',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
