export * as localizations from './localizations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding': Operation<
    '/organization/{organization-id}/branding',
    'delete'
  >;
  'GET /organization/{organization-id}/branding': Operation<
    '/organization/{organization-id}/branding',
    'get'
  >;
  'PATCH /organization/{organization-id}/branding': Operation<
    '/organization/{organization-id}/branding',
    'patch'
  >;
  'GET /organization/{organization-id}/branding/backgroundImage': Operation<
    '/organization/{organization-id}/branding/backgroundImage',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/backgroundImage': Operation<
    '/organization/{organization-id}/branding/backgroundImage',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/backgroundImage': Operation<
    '/organization/{organization-id}/branding/backgroundImage',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/bannerLogo': Operation<
    '/organization/{organization-id}/branding/bannerLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/bannerLogo': Operation<
    '/organization/{organization-id}/branding/bannerLogo',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/bannerLogo': Operation<
    '/organization/{organization-id}/branding/bannerLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/customCSS': Operation<
    '/organization/{organization-id}/branding/customCSS',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/customCSS': Operation<
    '/organization/{organization-id}/branding/customCSS',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/customCSS': Operation<
    '/organization/{organization-id}/branding/customCSS',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/favicon': Operation<
    '/organization/{organization-id}/branding/favicon',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/favicon': Operation<
    '/organization/{organization-id}/branding/favicon',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/favicon': Operation<
    '/organization/{organization-id}/branding/favicon',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/headerLogo': Operation<
    '/organization/{organization-id}/branding/headerLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/headerLogo': Operation<
    '/organization/{organization-id}/branding/headerLogo',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/headerLogo': Operation<
    '/organization/{organization-id}/branding/headerLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/squareLogo': Operation<
    '/organization/{organization-id}/branding/squareLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/squareLogo': Operation<
    '/organization/{organization-id}/branding/squareLogo',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/squareLogo': Operation<
    '/organization/{organization-id}/branding/squareLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/squareLogoDark',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/squareLogoDark',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/squareLogoDark',
    'delete'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding`
 *
 * Delete the default organizational branding object. To delete the organizationalBranding object, all images (Stream types) must first be removed from the object.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding']['parameters']
): EndpointRequest<IEndpoints['DELETE /organization/{organization-id}/branding']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/branding',
    paramDefs: {
      header: ['If-Match'],
      path: ['organization-id'],
    },
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding`
 *
 * Retrieve the default organizational branding object, if the Accept-Language header is set to 0 or default. If no default organizational branding object exists, this method returns a 404 Not Found error. If the Accept-Language header is set to an existing locale identified by the value of its id, this method retrieves the branding for the specified locale. This method retrieves only non-Stream properties, for example, usernameHintText and signInPageText. To retrieve Stream types of the default branding, for example, bannerLogo and backgroundImage, use the GET organizationalBrandingLocalization method.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}/branding']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/branding',
    paramDefs: {
      path: ['organization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/branding`
 *
 * Update the properties of the default branding object specified by the organizationalBranding resource.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/branding']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/branding']['parameters']
): EndpointRequest<IEndpoints['PATCH /organization/{organization-id}/branding']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/branding',
    paramDefs: {
      path: ['organization-id'],
    },
    params,
    body,
  };
}

export const backgroundImage = {
  /**
   * `GET /organization/{organization-id}/branding/backgroundImage`
   *
   * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/backgroundImage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/backgroundImage']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/backgroundImage',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/backgroundImage`
   *
   * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/backgroundImage']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/backgroundImage']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/backgroundImage']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/backgroundImage',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/backgroundImage`
   *
   * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/backgroundImage']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/backgroundImage']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/backgroundImage',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const bannerLogo = {
  /**
   * `GET /organization/{organization-id}/branding/bannerLogo`
   *
   * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/bannerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/bannerLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/bannerLogo',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/bannerLogo`
   *
   * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/bannerLogo']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/bannerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/bannerLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/bannerLogo',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/bannerLogo`
   *
   * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/bannerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/bannerLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/bannerLogo',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const customCSS = {
  /**
   * `GET /organization/{organization-id}/branding/customCSS`
   *
   * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/customCSS']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/customCSS']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/customCSS',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/customCSS`
   *
   * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/customCSS']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/customCSS']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/customCSS']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/customCSS',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/customCSS`
   *
   * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/customCSS']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/customCSS']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/customCSS',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const favicon = {
  /**
   * `GET /organization/{organization-id}/branding/favicon`
   *
   * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/favicon']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/favicon']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/favicon',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/favicon`
   *
   * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/favicon']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/favicon']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/favicon']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/favicon',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/favicon`
   *
   * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/favicon']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/favicon']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/favicon',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const headerLogo = {
  /**
   * `GET /organization/{organization-id}/branding/headerLogo`
   *
   * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/headerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/headerLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/headerLogo',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/headerLogo`
   *
   * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/headerLogo']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/headerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/headerLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/headerLogo',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/headerLogo`
   *
   * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/headerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/headerLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/headerLogo',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const squareLogo = {
  /**
   * `GET /organization/{organization-id}/branding/squareLogo`
   *
   * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/squareLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/squareLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/squareLogo',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/squareLogo`
   *
   * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/squareLogo']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/squareLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/squareLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/squareLogo',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/squareLogo`
   *
   * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/squareLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/squareLogo']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/squareLogo',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};

export const squareLogoDark = {
  /**
   * `GET /organization/{organization-id}/branding/squareLogoDark`
   *
   * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/squareLogoDark']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/squareLogoDark']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/organization/{organization-id}/branding/squareLogoDark',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/squareLogoDark`
   *
   * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/squareLogoDark']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/squareLogoDark']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/squareLogoDark']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/organization/{organization-id}/branding/squareLogoDark',
      paramDefs: {
        path: ['organization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/squareLogoDark`
   *
   * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/squareLogoDark']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/squareLogoDark']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/organization/{organization-id}/branding/squareLogoDark',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id'],
      },
      params,
    };
  },
};
