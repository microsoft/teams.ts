import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/policy/labels': Operation<
    '/sites/{site-id}/informationProtection/policy/labels',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/policy/labels': Operation<
    '/sites/{site-id}/informationProtection/policy/labels',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/policy/labels/evaluateApplication': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/evaluateApplication',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/evaluateRemoval',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/policy/labels/extractLabel': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/extractLabel',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'informationProtectionLabel-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/policy/labels',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      path: ['site-id', 'informationProtectionLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/policy/labels/{informationProtectionLabel-id}',
    paramDefs: {
      path: ['site-id', 'informationProtectionLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/policy/labels`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/policy/labels',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const evaluateApplication = {
  /**
   * `POST /sites/{site-id}/informationProtection/policy/labels/evaluateApplication`
   *
   * Compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set manually or explicitly by a user or service, rather than automatically based on file contents.  Given contentInfo, which includes existing content metadata key/value pairs, and labelingOptions as an input, the API returns an informationProtectionAction object that contains one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateApplication']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateApplication']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateApplication']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/policy/labels/evaluateApplication',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const evaluateClassificationResults = {
  /**
   * `POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults`
   *
   * Using classification results, compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service. To evaluate based on classification results, provide contentInfo, which includes existing content metadata key/value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const evaluateRemoval = {
  /**
   * `POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval`
   *
   * Indicate to the consuming application what actions it should take to remove the label information. Given contentInfo as an input, which includes existing content metadata key/value pairs, the API returns an informationProtectionAction that contains some combination of one of more of the following:
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/policy/labels/evaluateRemoval',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const extractLabel = {
  /**
   * `POST /sites/{site-id}/informationProtection/policy/labels/extractLabel`
   *
   * Using the metadata that exists on an already-labeled piece of information, resolve the metadata to a specific sensitivity label. The contentInfo input is resolved to informationProtectionContentLabel.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/extractLabel']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/extractLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/extractLabel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/policy/labels/extractLabel',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};
