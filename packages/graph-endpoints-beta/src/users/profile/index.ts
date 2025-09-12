import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile': Operation<'/users/{user-id}/profile', 'delete'>;
  'GET /users/{user-id}/profile': Operation<'/users/{user-id}/profile', 'get'>;
  'PATCH /users/{user-id}/profile': Operation<'/users/{user-id}/profile', 'patch'>;
  'GET /users/{user-id}/profile/account': Operation<'/users/{user-id}/profile/account', 'get'>;
  'POST /users/{user-id}/profile/account': Operation<'/users/{user-id}/profile/account', 'post'>;
  'GET /users/{user-id}/profile/account/{userAccountInformation-id}': Operation<
    '/users/{user-id}/profile/account/{userAccountInformation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/account/{userAccountInformation-id}': Operation<
    '/users/{user-id}/profile/account/{userAccountInformation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/account/{userAccountInformation-id}': Operation<
    '/users/{user-id}/profile/account/{userAccountInformation-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/addresses': Operation<'/users/{user-id}/profile/addresses', 'get'>;
  'POST /users/{user-id}/profile/addresses': Operation<
    '/users/{user-id}/profile/addresses',
    'post'
  >;
  'GET /users/{user-id}/profile/addresses/{itemAddress-id}': Operation<
    '/users/{user-id}/profile/addresses/{itemAddress-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/addresses/{itemAddress-id}': Operation<
    '/users/{user-id}/profile/addresses/{itemAddress-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/addresses/{itemAddress-id}': Operation<
    '/users/{user-id}/profile/addresses/{itemAddress-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/anniversaries': Operation<
    '/users/{user-id}/profile/anniversaries',
    'get'
  >;
  'POST /users/{user-id}/profile/anniversaries': Operation<
    '/users/{user-id}/profile/anniversaries',
    'post'
  >;
  'GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/awards': Operation<'/users/{user-id}/profile/awards', 'get'>;
  'POST /users/{user-id}/profile/awards': Operation<'/users/{user-id}/profile/awards', 'post'>;
  'GET /users/{user-id}/profile/awards/{personAward-id}': Operation<
    '/users/{user-id}/profile/awards/{personAward-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/awards/{personAward-id}': Operation<
    '/users/{user-id}/profile/awards/{personAward-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/awards/{personAward-id}': Operation<
    '/users/{user-id}/profile/awards/{personAward-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/certifications': Operation<
    '/users/{user-id}/profile/certifications',
    'get'
  >;
  'POST /users/{user-id}/profile/certifications': Operation<
    '/users/{user-id}/profile/certifications',
    'post'
  >;
  'GET /users/{user-id}/profile/certifications/{personCertification-id}': Operation<
    '/users/{user-id}/profile/certifications/{personCertification-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/certifications/{personCertification-id}': Operation<
    '/users/{user-id}/profile/certifications/{personCertification-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/certifications/{personCertification-id}': Operation<
    '/users/{user-id}/profile/certifications/{personCertification-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/educationalActivities': Operation<
    '/users/{user-id}/profile/educationalActivities',
    'get'
  >;
  'POST /users/{user-id}/profile/educationalActivities': Operation<
    '/users/{user-id}/profile/educationalActivities',
    'post'
  >;
  'GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/emails': Operation<'/users/{user-id}/profile/emails', 'get'>;
  'POST /users/{user-id}/profile/emails': Operation<'/users/{user-id}/profile/emails', 'post'>;
  'GET /users/{user-id}/profile/emails/{itemEmail-id}': Operation<
    '/users/{user-id}/profile/emails/{itemEmail-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/emails/{itemEmail-id}': Operation<
    '/users/{user-id}/profile/emails/{itemEmail-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/emails/{itemEmail-id}': Operation<
    '/users/{user-id}/profile/emails/{itemEmail-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/interests': Operation<'/users/{user-id}/profile/interests', 'get'>;
  'POST /users/{user-id}/profile/interests': Operation<
    '/users/{user-id}/profile/interests',
    'post'
  >;
  'GET /users/{user-id}/profile/interests/{personInterest-id}': Operation<
    '/users/{user-id}/profile/interests/{personInterest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/interests/{personInterest-id}': Operation<
    '/users/{user-id}/profile/interests/{personInterest-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/interests/{personInterest-id}': Operation<
    '/users/{user-id}/profile/interests/{personInterest-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/languages': Operation<'/users/{user-id}/profile/languages', 'get'>;
  'POST /users/{user-id}/profile/languages': Operation<
    '/users/{user-id}/profile/languages',
    'post'
  >;
  'GET /users/{user-id}/profile/languages/{languageProficiency-id}': Operation<
    '/users/{user-id}/profile/languages/{languageProficiency-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/languages/{languageProficiency-id}': Operation<
    '/users/{user-id}/profile/languages/{languageProficiency-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/languages/{languageProficiency-id}': Operation<
    '/users/{user-id}/profile/languages/{languageProficiency-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/names': Operation<'/users/{user-id}/profile/names', 'get'>;
  'POST /users/{user-id}/profile/names': Operation<'/users/{user-id}/profile/names', 'post'>;
  'GET /users/{user-id}/profile/names/{personName-id}': Operation<
    '/users/{user-id}/profile/names/{personName-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/names/{personName-id}': Operation<
    '/users/{user-id}/profile/names/{personName-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/names/{personName-id}': Operation<
    '/users/{user-id}/profile/names/{personName-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/notes': Operation<'/users/{user-id}/profile/notes', 'get'>;
  'POST /users/{user-id}/profile/notes': Operation<'/users/{user-id}/profile/notes', 'post'>;
  'GET /users/{user-id}/profile/notes/{personAnnotation-id}': Operation<
    '/users/{user-id}/profile/notes/{personAnnotation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/notes/{personAnnotation-id}': Operation<
    '/users/{user-id}/profile/notes/{personAnnotation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/notes/{personAnnotation-id}': Operation<
    '/users/{user-id}/profile/notes/{personAnnotation-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/patents': Operation<'/users/{user-id}/profile/patents', 'get'>;
  'POST /users/{user-id}/profile/patents': Operation<'/users/{user-id}/profile/patents', 'post'>;
  'GET /users/{user-id}/profile/patents/{itemPatent-id}': Operation<
    '/users/{user-id}/profile/patents/{itemPatent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/patents/{itemPatent-id}': Operation<
    '/users/{user-id}/profile/patents/{itemPatent-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/patents/{itemPatent-id}': Operation<
    '/users/{user-id}/profile/patents/{itemPatent-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/phones': Operation<'/users/{user-id}/profile/phones', 'get'>;
  'POST /users/{user-id}/profile/phones': Operation<'/users/{user-id}/profile/phones', 'post'>;
  'GET /users/{user-id}/profile/phones/{itemPhone-id}': Operation<
    '/users/{user-id}/profile/phones/{itemPhone-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/phones/{itemPhone-id}': Operation<
    '/users/{user-id}/profile/phones/{itemPhone-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/phones/{itemPhone-id}': Operation<
    '/users/{user-id}/profile/phones/{itemPhone-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/positions': Operation<'/users/{user-id}/profile/positions', 'get'>;
  'POST /users/{user-id}/profile/positions': Operation<
    '/users/{user-id}/profile/positions',
    'post'
  >;
  'GET /users/{user-id}/profile/positions/{workPosition-id}': Operation<
    '/users/{user-id}/profile/positions/{workPosition-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/positions/{workPosition-id}': Operation<
    '/users/{user-id}/profile/positions/{workPosition-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/positions/{workPosition-id}': Operation<
    '/users/{user-id}/profile/positions/{workPosition-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/projects': Operation<'/users/{user-id}/profile/projects', 'get'>;
  'POST /users/{user-id}/profile/projects': Operation<'/users/{user-id}/profile/projects', 'post'>;
  'GET /users/{user-id}/profile/projects/{projectParticipation-id}': Operation<
    '/users/{user-id}/profile/projects/{projectParticipation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/projects/{projectParticipation-id}': Operation<
    '/users/{user-id}/profile/projects/{projectParticipation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/projects/{projectParticipation-id}': Operation<
    '/users/{user-id}/profile/projects/{projectParticipation-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/publications': Operation<
    '/users/{user-id}/profile/publications',
    'get'
  >;
  'POST /users/{user-id}/profile/publications': Operation<
    '/users/{user-id}/profile/publications',
    'post'
  >;
  'GET /users/{user-id}/profile/publications/{itemPublication-id}': Operation<
    '/users/{user-id}/profile/publications/{itemPublication-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/publications/{itemPublication-id}': Operation<
    '/users/{user-id}/profile/publications/{itemPublication-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/publications/{itemPublication-id}': Operation<
    '/users/{user-id}/profile/publications/{itemPublication-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/skills': Operation<'/users/{user-id}/profile/skills', 'get'>;
  'POST /users/{user-id}/profile/skills': Operation<'/users/{user-id}/profile/skills', 'post'>;
  'GET /users/{user-id}/profile/skills/{skillProficiency-id}': Operation<
    '/users/{user-id}/profile/skills/{skillProficiency-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/skills/{skillProficiency-id}': Operation<
    '/users/{user-id}/profile/skills/{skillProficiency-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/skills/{skillProficiency-id}': Operation<
    '/users/{user-id}/profile/skills/{skillProficiency-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/webAccounts': Operation<
    '/users/{user-id}/profile/webAccounts',
    'get'
  >;
  'POST /users/{user-id}/profile/webAccounts': Operation<
    '/users/{user-id}/profile/webAccounts',
    'post'
  >;
  'GET /users/{user-id}/profile/webAccounts/{webAccount-id}': Operation<
    '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}': Operation<
    '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}': Operation<
    '/users/{user-id}/profile/webAccounts/{webAccount-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/websites': Operation<'/users/{user-id}/profile/websites', 'get'>;
  'POST /users/{user-id}/profile/websites': Operation<'/users/{user-id}/profile/websites', 'post'>;
  'GET /users/{user-id}/profile/websites/{personWebsite-id}': Operation<
    '/users/{user-id}/profile/websites/{personWebsite-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/websites/{personWebsite-id}': Operation<
    '/users/{user-id}/profile/websites/{personWebsite-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/profile/websites/{personWebsite-id}': Operation<
    '/users/{user-id}/profile/websites/{personWebsite-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/profile`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/profile']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/profile`
 *
 * Represents properties that are descriptive of a user in a tenant.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/profile']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /users/{user-id}/profile/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/account']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/account']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/account',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/account`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/account']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/account']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/account']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/account',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/account/{userAccountInformation-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/profile/account/{userAccountInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/account/{userAccountInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/account/{userAccountInformation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'userAccountInformation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/account/{userAccountInformation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/account/{userAccountInformation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/account/{userAccountInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/account/{userAccountInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/account/{userAccountInformation-id}',
      paramDefs: {
        path: ['user-id', 'userAccountInformation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/account/{userAccountInformation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/account/{userAccountInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/account/{userAccountInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/account/{userAccountInformation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'userAccountInformation-id'],
      },
      params,
    };
  },
};

export const addresses = {
  /**
   * `GET /users/{user-id}/profile/addresses`
   *
   * Represents details of addresses associated with the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/addresses']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/addresses']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/addresses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/addresses`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/addresses']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/addresses']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/addresses']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/addresses',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/addresses/{itemAddress-id}`
   *
   * Represents details of addresses associated with the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/addresses/{itemAddress-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/addresses/{itemAddress-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/addresses/{itemAddress-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'itemAddress-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/addresses/{itemAddress-id}`
   *
   * Update the properties of an itemAddress object.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/addresses/{itemAddress-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/addresses/{itemAddress-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/addresses/{itemAddress-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/addresses/{itemAddress-id}',
      paramDefs: {
        path: ['user-id', 'itemAddress-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/addresses/{itemAddress-id}`
   *
   * Deletes an itemAddress object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/addresses/{itemAddress-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/addresses/{itemAddress-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/addresses/{itemAddress-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'itemAddress-id'],
      },
      params,
    };
  },
};

export const anniversaries = {
  /**
   * `GET /users/{user-id}/profile/anniversaries`
   *
   * Represents the details of meaningful dates associated with a person.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/anniversaries']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/anniversaries']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/anniversaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/anniversaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/anniversaries']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/anniversaries']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/anniversaries']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/anniversaries',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}`
   *
   * Represents the details of meaningful dates associated with a person.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personAnnualEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
      paramDefs: {
        path: ['user-id', 'personAnnualEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/anniversaries/{personAnnualEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/anniversaries/{personAnnualEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personAnnualEvent-id'],
      },
      params,
    };
  },
};

export const awards = {
  /**
   * `GET /users/{user-id}/profile/awards`
   *
   * Represents the details of awards or honors associated with a person.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/awards']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/awards']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/awards',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/awards`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/awards']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/awards']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/awards']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/awards',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/awards/{personAward-id}`
   *
   * Represents the details of awards or honors associated with a person.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/awards/{personAward-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/awards/{personAward-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/awards/{personAward-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personAward-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/awards/{personAward-id}`
   *
   * Update the properties of a personAward object from a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/awards/{personAward-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/awards/{personAward-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/awards/{personAward-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/awards/{personAward-id}',
      paramDefs: {
        path: ['user-id', 'personAward-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/awards/{personAward-id}`
   *
   * Delete a personAward object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/awards/{personAward-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/awards/{personAward-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/awards/{personAward-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personAward-id'],
      },
      params,
    };
  },
};

export const certifications = {
  /**
   * `GET /users/{user-id}/profile/certifications`
   *
   * Represents the details of certifications associated with a person.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/certifications']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/certifications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/certifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/certifications`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/certifications']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/certifications']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/certifications']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/certifications',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/certifications/{personCertification-id}`
   *
   * Represents the details of certifications associated with a person.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/certifications/{personCertification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/certifications/{personCertification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/certifications/{personCertification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personCertification-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/certifications/{personCertification-id}`
   *
   * Update the properties of a personCertification object from a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/certifications/{personCertification-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/certifications/{personCertification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/certifications/{personCertification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/certifications/{personCertification-id}',
      paramDefs: {
        path: ['user-id', 'personCertification-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/certifications/{personCertification-id}`
   *
   * Deletes a personCertification object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/certifications/{personCertification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/certifications/{personCertification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/certifications/{personCertification-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personCertification-id'],
      },
      params,
    };
  },
};

export const educationalActivities = {
  /**
   * `GET /users/{user-id}/profile/educationalActivities`
   *
   * Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/educationalActivities']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/educationalActivities']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/educationalActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/educationalActivities`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/educationalActivities']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/educationalActivities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/profile/educationalActivities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/educationalActivities',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}`
   *
   * Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'educationalActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
      paramDefs: {
        path: ['user-id', 'educationalActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/educationalActivities/{educationalActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/educationalActivities/{educationalActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'educationalActivity-id'],
      },
      params,
    };
  },
};

export const emails = {
  /**
   * `GET /users/{user-id}/profile/emails`
   *
   * Retrieve the properties and relationships of an itemEmail object in a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/emails']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/emails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/emails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/emails`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/emails']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/emails']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/emails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/emails',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/emails/{itemEmail-id}`
   *
   * Retrieve the properties and relationships of an itemEmail object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/emails/{itemEmail-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/emails/{itemEmail-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/emails/{itemEmail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'itemEmail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/emails/{itemEmail-id}`
   *
   * Update the properties of an itemEmail object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/emails/{itemEmail-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/emails/{itemEmail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/emails/{itemEmail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/emails/{itemEmail-id}',
      paramDefs: {
        path: ['user-id', 'itemEmail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/emails/{itemEmail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/emails/{itemEmail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/emails/{itemEmail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/emails/{itemEmail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'itemEmail-id'],
      },
      params,
    };
  },
};

export const interests = {
  /**
   * `GET /users/{user-id}/profile/interests`
   *
   * Provides detailed information about interests the user has associated with themselves in various services.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/interests']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/interests']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/interests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/interests`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/interests']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/interests']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/interests']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/interests',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/interests/{personInterest-id}`
   *
   * Provides detailed information about interests the user has associated with themselves in various services.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/interests/{personInterest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/interests/{personInterest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/interests/{personInterest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personInterest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/interests/{personInterest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/interests/{personInterest-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/interests/{personInterest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/interests/{personInterest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/interests/{personInterest-id}',
      paramDefs: {
        path: ['user-id', 'personInterest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/interests/{personInterest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/interests/{personInterest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/interests/{personInterest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/interests/{personInterest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personInterest-id'],
      },
      params,
    };
  },
};

export const languages = {
  /**
   * `GET /users/{user-id}/profile/languages`
   *
   * Represents detailed information about languages that a user has added to their profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/languages']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/languages']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/languages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/languages`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/languages']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/languages']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/languages']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/languages',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/languages/{languageProficiency-id}`
   *
   * Represents detailed information about languages that a user has added to their profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/languages/{languageProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/languages/{languageProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/languages/{languageProficiency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'languageProficiency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/languages/{languageProficiency-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/languages/{languageProficiency-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/languages/{languageProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/languages/{languageProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/languages/{languageProficiency-id}',
      paramDefs: {
        path: ['user-id', 'languageProficiency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/languages/{languageProficiency-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/languages/{languageProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/languages/{languageProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/languages/{languageProficiency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'languageProficiency-id'],
      },
      params,
    };
  },
};

export const names = {
  /**
   * `GET /users/{user-id}/profile/names`
   *
   * Represents the names a user has added to their profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/names']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/names']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/names',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/names`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/names']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/names']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/names']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/names',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/names/{personName-id}`
   *
   * Represents the names a user has added to their profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/names/{personName-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/names/{personName-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/names/{personName-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personName-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/names/{personName-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/names/{personName-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/names/{personName-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/names/{personName-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/names/{personName-id}',
      paramDefs: {
        path: ['user-id', 'personName-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/names/{personName-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/names/{personName-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/names/{personName-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/names/{personName-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personName-id'],
      },
      params,
    };
  },
};

export const notes = {
  /**
   * `GET /users/{user-id}/profile/notes`
   *
   * Represents notes that a user has added to their profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/notes']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/notes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/notes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/notes`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/notes']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/notes']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/notes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/notes',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/notes/{personAnnotation-id}`
   *
   * Represents notes that a user has added to their profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/notes/{personAnnotation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/notes/{personAnnotation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/notes/{personAnnotation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personAnnotation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/notes/{personAnnotation-id}`
   *
   * Update the properties of a personAnnotation object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/notes/{personAnnotation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/notes/{personAnnotation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/notes/{personAnnotation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/notes/{personAnnotation-id}',
      paramDefs: {
        path: ['user-id', 'personAnnotation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/notes/{personAnnotation-id}`
   *
   * Deletes a personAnnotation object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/notes/{personAnnotation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/notes/{personAnnotation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/notes/{personAnnotation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personAnnotation-id'],
      },
      params,
    };
  },
};

export const patents = {
  /**
   * `GET /users/{user-id}/profile/patents`
   *
   * Represents patents that a user has added to their profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/patents']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/patents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/patents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/patents`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/patents']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/patents']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/patents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/patents',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/patents/{itemPatent-id}`
   *
   * Represents patents that a user has added to their profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/patents/{itemPatent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/patents/{itemPatent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/patents/{itemPatent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'itemPatent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/patents/{itemPatent-id}`
   *
   * Update the properties of an itemPatent object.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/patents/{itemPatent-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/patents/{itemPatent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/patents/{itemPatent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/patents/{itemPatent-id}',
      paramDefs: {
        path: ['user-id', 'itemPatent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/patents/{itemPatent-id}`
   *
   * Deletes an itemPatent object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/patents/{itemPatent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/patents/{itemPatent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/patents/{itemPatent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'itemPatent-id'],
      },
      params,
    };
  },
};

export const phones = {
  /**
   * `GET /users/{user-id}/profile/phones`
   *
   * Represents detailed information about phone numbers associated with a user in various services.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/phones']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/phones']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/phones',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/phones`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/phones']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/phones']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/phones']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/phones',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/phones/{itemPhone-id}`
   *
   * Represents detailed information about phone numbers associated with a user in various services.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/phones/{itemPhone-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/phones/{itemPhone-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/phones/{itemPhone-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'itemPhone-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/phones/{itemPhone-id}`
   *
   * Update the properties of an itemPhone object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/phones/{itemPhone-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/phones/{itemPhone-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/phones/{itemPhone-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/phones/{itemPhone-id}',
      paramDefs: {
        path: ['user-id', 'itemPhone-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/phones/{itemPhone-id}`
   *
   * Delete an itemPhone object from the user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/phones/{itemPhone-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/phones/{itemPhone-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/phones/{itemPhone-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'itemPhone-id'],
      },
      params,
    };
  },
};

export const positions = {
  /**
   * `GET /users/{user-id}/profile/positions`
   *
   * Represents detailed information about work positions associated with a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/positions']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/positions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/positions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/positions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/positions']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/positions']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/positions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/positions',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/positions/{workPosition-id}`
   *
   * Represents detailed information about work positions associated with a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/positions/{workPosition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/positions/{workPosition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/positions/{workPosition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'workPosition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/positions/{workPosition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/positions/{workPosition-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/positions/{workPosition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/positions/{workPosition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/positions/{workPosition-id}',
      paramDefs: {
        path: ['user-id', 'workPosition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/positions/{workPosition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/positions/{workPosition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/positions/{workPosition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/positions/{workPosition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'workPosition-id'],
      },
      params,
    };
  },
};

export const projects = {
  /**
   * `GET /users/{user-id}/profile/projects`
   *
   * Represents detailed information about projects associated with a user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/projects']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/projects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/projects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/projects`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/projects']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/projects']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/projects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/projects',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/projects/{projectParticipation-id}`
   *
   * Represents detailed information about projects associated with a user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/projects/{projectParticipation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/projects/{projectParticipation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/projects/{projectParticipation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'projectParticipation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/projects/{projectParticipation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/projects/{projectParticipation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/projects/{projectParticipation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/projects/{projectParticipation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/projects/{projectParticipation-id}',
      paramDefs: {
        path: ['user-id', 'projectParticipation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/projects/{projectParticipation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/projects/{projectParticipation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/projects/{projectParticipation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/projects/{projectParticipation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'projectParticipation-id'],
      },
      params,
    };
  },
};

export const publications = {
  /**
   * `GET /users/{user-id}/profile/publications`
   *
   * Represents details of any publications a user has added to their profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/publications']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/publications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/publications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/publications`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/publications']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/publications']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/publications']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/publications',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/publications/{itemPublication-id}`
   *
   * Represents details of any publications a user has added to their profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/publications/{itemPublication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/publications/{itemPublication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/publications/{itemPublication-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'itemPublication-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/publications/{itemPublication-id}`
   *
   * Update the properties of an itemPublication object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/publications/{itemPublication-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/publications/{itemPublication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/publications/{itemPublication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/publications/{itemPublication-id}',
      paramDefs: {
        path: ['user-id', 'itemPublication-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/publications/{itemPublication-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/publications/{itemPublication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/publications/{itemPublication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/publications/{itemPublication-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'itemPublication-id'],
      },
      params,
    };
  },
};

export const skills = {
  /**
   * `GET /users/{user-id}/profile/skills`
   *
   * Represents detailed information about skills associated with a user in various services.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/skills']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/skills']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/skills',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/skills`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/skills']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/skills']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/skills']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/skills',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/skills/{skillProficiency-id}`
   *
   * Represents detailed information about skills associated with a user in various services.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/skills/{skillProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/skills/{skillProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/skills/{skillProficiency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'skillProficiency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/skills/{skillProficiency-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/skills/{skillProficiency-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/skills/{skillProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/skills/{skillProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/skills/{skillProficiency-id}',
      paramDefs: {
        path: ['user-id', 'skillProficiency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/skills/{skillProficiency-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/skills/{skillProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/skills/{skillProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/skills/{skillProficiency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'skillProficiency-id'],
      },
      params,
    };
  },
};

export const webAccounts = {
  /**
   * `GET /users/{user-id}/profile/webAccounts`
   *
   * Represents web accounts the user has indicated they use or has added to their user profile.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/webAccounts']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/webAccounts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/webAccounts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/webAccounts`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/webAccounts']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/webAccounts']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/webAccounts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/webAccounts',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/webAccounts/{webAccount-id}`
   *
   * Represents web accounts the user has indicated they use or has added to their user profile.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/webAccounts/{webAccount-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/webAccounts/{webAccount-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/webAccounts/{webAccount-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'webAccount-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/webAccounts/{webAccount-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/webAccounts/{webAccount-id}',
      paramDefs: {
        path: ['user-id', 'webAccount-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/webAccounts/{webAccount-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/webAccounts/{webAccount-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'webAccount-id'],
      },
      params,
    };
  },
};

export const websites = {
  /**
   * `GET /users/{user-id}/profile/websites`
   *
   * Represents detailed information about websites associated with a user in various services.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/profile/websites']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/websites']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/websites',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/profile/websites`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/profile/websites']['body'],
    params?: IEndpoints['POST /users/{user-id}/profile/websites']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/websites']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/profile/websites',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/profile/websites/{personWebsite-id}`
   *
   * Represents detailed information about websites associated with a user in various services.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/profile/websites/{personWebsite-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/profile/websites/{personWebsite-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/profile/websites/{personWebsite-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'personWebsite-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/profile/websites/{personWebsite-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/profile/websites/{personWebsite-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/profile/websites/{personWebsite-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/profile/websites/{personWebsite-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/profile/websites/{personWebsite-id}',
      paramDefs: {
        path: ['user-id', 'personWebsite-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/profile/websites/{personWebsite-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/profile/websites/{personWebsite-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/profile/websites/{personWebsite-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/profile/websites/{personWebsite-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'personWebsite-id'],
      },
      params,
    };
  },
};
