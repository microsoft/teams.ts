/**
 * https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#legalagegroupclassification-values
 */
export type LegalAgeGroupClassification =
  | 'adult'
  | 'minorNoParentalConsentRequired'
  | 'minorWithoutParentalConsent'
  | 'minorWithParentalConsent'
  | 'nonAdult';

/**
 * https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#legalagegroupclassification-values
 */
export enum LegalAgeGroupClassifications {
  /**
   * The user is considered an adult based on the age-related regulations of their country or region.
   */
  Adult = 'adult',

  /**
   * The user is a minor but is from a country or region that has no age-related regulations.
   */
  MinorNoParentalConsentRequired = 'minorNoParentalConsentRequired',

  /**
   * Reserved for future use
   */
  MinorWithoutParentalConsent = 'minorWithoutParentalConsent',

  /**
   * The user is considered a minor based on the age-related regulations of their country or region, and the administrator
   * of the account obtained appropriate consent from a parent or guardian.
   */
  MinorWithParentalConsent = 'minorWithParentalConsent',

  /**
   * The user is from a country or region that has additional age-related regulations, such as the United States,
   * United Kingdom, European Union, or South Korea, and the user's age is between a minor and an adult age
   * (as stipulated based on country or region). Generally, this means that teenagers are considered as notAdult in regulated countries.
   */
  NonAdult = 'nonAdult',
}
