import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/modules': Operation<
    '/education/classes/{educationClass-id}/modules',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/modules/{educationModule-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/modules': Operation<
    '/education/classes/{educationClass-id}/modules',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/pin',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/publish',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    'delete'
  >;
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/unpin',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}`
 *
 * Delete an existing module in a class. Only teachers within a class can delete modules.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationClass-id', 'educationModule-id'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/modules`
 *
 * Retrieve a list of module objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can see all module objects for the class. Students can only see published modules.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/modules']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/modules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/modules',
    paramDefs: {
      path: ['educationClass-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/modules/{educationModule-id}`
 *
 * Get the properties and relationships of a module. Only teachers, students, and applications with application permissions can perform this operation. Students can only see published modules; teachers and applications with application permissions can see all modules in a class.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationModule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}`
 *
 * Update an educationModule object in a class. Only teachers in the class can perform this operation. Note that you can&#x27;t use a PATCH request to change the status of a module. Use the publish action to change the module status.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationModule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/modules`
 *
 * Create a new module in a class. Only teachers in a class can create a module. Modules start in the draft state, which means that students won&#x27;t see the modules until publication.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules']['parameters']
): EndpointRequest<IEndpoints['POST /education/classes/{educationClass-id}/modules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules',
    paramDefs: {
      path: ['educationClass-id'],
    },
    params,
    body,
  };
}

export const pin = {
  /**
   * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin`
   *
   * Pin an educationModule in the class work list. This action sets the isPinned property to true for an educationModule. Only teachers can perform this action and only one module at a time can be pinned in the class work list.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/pin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/pin',
      paramDefs: {
        path: ['educationClass-id', 'educationModule-id'],
      },
      params,
    };
  },
};

export const publish = {
  /**
   * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish`
   *
   * Change the state of an educationModule from its original draft status to the published status. Only teachers in the class can perform this operation. When a module is in draft status, students won&#x27;t see the module. When you call this API, the module appears in the student&#x27;s class work list.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/publish',
      paramDefs: {
        path: ['educationClass-id', 'educationModule-id'],
      },
      params,
    };
  },
};

export const resources = {
  /**
   * `GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources`
   *
   * Get all the educationModuleResource objects associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id', 'educationModule-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources`
   *
   * Create a resource in a module. Only teachers can perform this operation. You can create the following types of module resources: Every resource has an @odata.type property to indicate which type of resource is being created.
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
      paramDefs: {
        path: ['educationClass-id', 'educationModule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}`
   *
   * Get the properties of a resource associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationModule-id', 'educationModuleResource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}`
   *
   * Update a resource in a module. Only teachers can perform this operation. The only one property that can be updated is displayName, for all resource types.
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
      paramDefs: {
        path: ['educationClass-id', 'educationModule-id', 'educationModuleResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}`
   *
   * Delete a specific educationModuleResource attached to a module. Only teachers in the class can remove a resource.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationClass-id', 'educationModule-id', 'educationModuleResource-id'],
      },
      params,
    };
  },
};

export const setUpResourcesFolder = {
  /**
   * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder`
   *
   * Create a SharePoint folder to upload files for a given educationModule. Only teachers can perform this operation. The teacher determines what resources to upload to the SharePoint folder for the module.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/setUpResourcesFolder',
      paramDefs: {
        path: ['educationClass-id', 'educationModule-id'],
      },
      params,
    };
  },
};

export const unpin = {
  /**
   * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin`
   *
   * Unpin an educationModule in the classwork list. This action sets the isPinned property to false for an educationModule. Only teachers in the class can perform this operation.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/unpin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/unpin',
      paramDefs: {
        path: ['educationClass-id', 'educationModule-id'],
      },
      params,
    };
  },
};
