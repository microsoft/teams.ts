import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    'get'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    'post'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles',
    'post'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions',
    'get'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}',
    'get'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
    'get'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
    'post'
  >;
  'GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    'patch'
  >;
  'DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
    'delete'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove',
    'post'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles',
    'post'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles',
    'post'
  >;
  'POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion': Operation<
    '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyUploadedDefinitionFile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles`
 *
 * The available group policy uploaded definition files for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}`
 *
 * The available group policy uploaded definition files for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    paramDefs: {
      path: ['groupPolicyUploadedDefinitionFile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}',
    paramDefs: {
      path: ['groupPolicyUploadedDefinitionFile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyUploadedDefinitionFiles',
    body,
  };
}

export const addLanguageFiles = {
  /**
   * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/addLanguageFiles',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
      body,
    };
  },
};

export const definitions = {
  /**
   * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions`
   *
   * The group policy definitions associated with the file.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}`
   *
   * The group policy definitions associated with the file.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/definitions/{groupPolicyDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyUploadedDefinitionFile-id', 'groupPolicyDefinition-id'],
      },
      params,
    };
  },
};

export const groupPolicyOperations = {
  /**
   * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations`
   *
   * The list of operations on the uploaded ADMX file.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}`
   *
   * The list of operations on the uploaded ADMX file.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyUploadedDefinitionFile-id', 'groupPolicyOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id', 'groupPolicyOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['groupPolicyUploadedDefinitionFile-id', 'groupPolicyOperation-id'],
      },
      params,
    };
  },
};

export const remove = {
  /**
   * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/remove',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
    };
  },
};

export const removeLanguageFiles = {
  /**
   * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/removeLanguageFiles',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
      body,
    };
  },
};

export const updateLanguageFiles = {
  /**
   * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/updateLanguageFiles',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
      body,
    };
  },
};

export const uploadNewVersion = {
  /**
   * `POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion']['body'],
    params?: IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/uploadNewVersion',
      paramDefs: {
        path: ['groupPolicyUploadedDefinitionFile-id'],
      },
      params,
      body,
    };
  },
};
