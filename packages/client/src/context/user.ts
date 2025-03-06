import { TenantContext } from './tenant';

/**
 * Represents User information.
 */
export type UserContext = {
  /**
   * The Microsoft Entra object id of the current user.
   *
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a optimization hint as to who the user is and never as proof of identity.
   * Specifically, this value should never be used to determine if a user is authorized to access
   * a resource; access tokens should be used for that.
   * See {@link authentication.getAuthToken} and {@link authentication.authenticate} for more information on access tokens.
   *
   * This field is available only when the identity permission is requested in the manifest.
   */
  id: string;

  /**
   * The address book name of the current user.
   */
  displayName?: string;

  /**
   * Represents whether calling is allowed for the current logged in User
   */
  isCallingAllowed?: boolean;

  /**
   * Represents whether PSTN calling is allowed for the current logged in User
   */
  isPSTNCallingAllowed?: boolean;

  /**
   * The license type for the current user. Possible values are:
   * "Unknown", "Teacher", "Student", "Free", "SmbBusinessVoice", "SmbNonVoice", "FrontlineWorker", "Anonymous"
   */
  licenseType?: string;

  /**
   * A value suitable for use when providing a login_hint to Microsoft Entra ID for authentication purposes.
   * See [Provide optional claims to your app](https://learn.microsoft.com/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set)
   * for more information about the use of login_hint
   *
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a optimization hint as to who the user is and never as proof of identity.
   * Specifically, this value should never be used to determine if a user is authorized to access
   * a resource; access tokens should be used for that.
   * See {@link authentication.getAuthToken} and {@link authentication.authenticate} for more information on access tokens.
   */
  loginHint?: string;

  /**
   * The UPN of the current user. This may be an externally-authenticated UPN (e.g., guest users).
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a optimization hint as to who the user is and never as proof of identity.
   * Specifically, this value should never be used to determine if a user is authorized to access
   * a resource; access tokens should be used for that.
   * See {@link authentication.getAuthToken} and {@link authentication.authenticate} for more information on access tokens.
   */
  userPrincipalName?: string;

  /**
   * The tenant related info of the current user.
   */
  tenant?: TenantContext;
};
