export * as resources from './resources';
export * as submissions from './submissions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments': Operation<
    '/education/users/{educationUser-id}/assignments',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/assignments': Operation<
    '/education/users/{educationUser-id}/assignments',
    'post'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate',
    'post'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
    'get'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
    'post'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/deactivate': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/deactivate',
    'post'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingCategory': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingCategory',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingScheme': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingScheme',
    'get'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/publish': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/publish',
    'post'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    'patch'
  >;
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    'delete'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    'post'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
    'post'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationUser-id', 'educationAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments`
 *
 * Returns a list of educationAssignment assigned to a educationUser for all classes. Only teachers, students, and applications with application permissions can perform this operation. This method allows a caller to find all the assignments belonging to a student or a teacher in a single call rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. Use the methods defined for the assignment for all other operations.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/assignments']['response']> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments',
    paramDefs: {
      path: ['educationUser-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}`
 *
 * Assignments belonging to the user.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    paramDefs: {
      path: ['educationUser-id', 'educationAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    paramDefs: {
      path: ['educationUser-id', 'educationAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments']['parameters']
): EndpointRequest<IEndpoints['POST /education/users/{educationUser-id}/assignments']['response']> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments',
    paramDefs: {
      path: ['educationUser-id'],
    },
    params,
    body,
  };
}

export const activate = {
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate`
   *
   * Activate an inactive educationAssignment to signal that the assignment has further action items for teachers or students. This action can only be performed by a teacher on currently inactive assignments.
   */
  create: function create(
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/activate',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const categories = {
  /**
   * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories`
   *
   * When set, enables users to easily find assignments of a given type. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['response']
  > {
    return {
      method: 'get',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['body'],
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/categories',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
      body,
    };
  },
};

export const deactivate = {
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/deactivate`
   *
   * Mark an assigned educationAssignment as inactive to signal that the assignment has no further action items for teachers and students. This action can only be performed by a teacher on assigned assignments.
   */
  create: function create(
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/deactivate']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/deactivate',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const gradingCategory = {
  /**
   * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingCategory`
   *
   * When set, enables users to weight assignments differently when computing a class average grade.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingCategory']['response']
  > {
    return {
      method: 'get',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const gradingScheme = {
  /**
   * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingScheme`
   *
   * When set, enables users to configure custom string grades based on the percentage of total points earned on this assignment.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingScheme']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingScheme']['response']
  > {
    return {
      method: 'get',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/gradingScheme',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const publish = {
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/publish`
   *
   * Publish an education assignment. Change the status of an educationAssignment from its original draft status to the published status.  You can change the status from draft to scheduled if the assignment is scheduled for a future date.  Only a teacher in the class can make this call. When an assignment is in draft status, students will not see the assignment, nor will there be any submission objects. Calling this API creates educationSubmission objects and displays the assignment in each student&#x27;s list. The status of the assignment goes back to draft if there is any backend failure during publish process. To update the properties of a published assignment, see update an assignment.
   */
  create: function create(
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/publish']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/publish',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const rubric = {
  /**
   * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric`
   *
   * When set, the grading rubric attached to this assignment.
   */
  get: function get(
    params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      method: 'get',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['body'],
    params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      method: 'patch',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      method: 'delete',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const setUpFeedbackResourcesFolder = {
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder`
   *
   * Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.
   */
  create: function create(
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const setUpResourcesFolder = {
  /**
   * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder`
   *
   * Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment&#x27;s folder.
   */
  create: function create(
    params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['response']
  > {
    return {
      method: 'post',
      path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
      paramDefs: {
        path: ['educationUser-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};
