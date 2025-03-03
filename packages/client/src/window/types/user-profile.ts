import { DataResidency } from './data-residency';

export interface UserProfile {
  /**
   * The intended recipient of the token. The application that receives the token must verify that the audience
   * value is correct and reject any tokens intended for a different audience.
   */
  aud: string;

  /**
   * Identifies how the subject of the token was authenticated.
   */
  amr: string[];

  /**
   * Stores the time at which the token was issued. It is often used to measure token freshness.
   */
  iat: number;

  /**
   * Identifies the security token service (STS) that constructs and returns the token. In the tokens that Microsoft Entra
   * returns, the issuer is sts.windows.net. The GUID in the issuer claim value is the tenant ID of the Microsoft Entra
   * directory. The tenant ID is an immutable and reliable identifier of the directory.
   */
  iss: string;

  /**
   * Provides the last name, surname, or family name of the user as defined in the Microsoft Entra user object.
   */
  family_name: string;

  /**
   * Provides the first or "given" name of the user, as set on the Microsoft Entra user object.
   */
  given_name: string;

  /**
   * Provides a human-readable value that identifies the subject of the token. This value is not guaranteed to
   * be unique within a tenant and is designed to be used only for display purposes.
   */
  unique_name: string;

  /**
   * Contains a unique identifier of an object in Microsoft Entra. This value is immutable and cannot be reassigned or
   * reused. Use the object ID to identify an object in queries to Microsoft Entra.
   */
  oid: string;

  /**
   * Identifies the principal about which the token asserts information, such as the user of an application.
   * This value is immutable and cannot be reassigned or reused, so it can be used to perform authorization
   * checks safely. Because the subject is always present in the tokens the Microsoft Entra issues, we recommended
   * using this value in a general-purpose authorization system.
   */
  sub: string;

  /**
   * An immutable, non-reusable identifier that identifies the directory tenant that issued the token. You can
   * use this value to access tenant-specific directory resources in a multitenant application. For example,
   * you can use this value to identify the tenant in a call to the Graph API.
   */
  tid: string;

  /**
   * Defines the end of the time interval within which a token is valid. The service that validates the token
   * should verify that the current date is within the token lifetime; otherwise it should reject the token. The
   * service might allow for up to five minutes beyond the token lifetime to account for any differences in clock
   * time ("time skew") between Microsoft Entra and the service.
   */
  exp: number;

  /**
   * Defines the start of the time interval within which a token is valid. The service that validates the token
   * should verify that the current date is within the token lifetime; otherwise it should reject the token. The
   * service might allow for up to five minutes beyond the token lifetime to account for any differences in clock
   * time ("time skew") between Microsoft Entra and the service.
   */
  nbf: number;

  /**
   * Stores the user name of the user principal.
   */
  upn: string;

  /**
   * Stores the version number of the token.
   */
  ver: string;

  /**
   * Stores the data residency of the user.
   */
  dataResidency?: DataResidency;
}
