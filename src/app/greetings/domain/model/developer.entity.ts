/**
 * Developer entity representing a developer with first and last names.
 *
 * @remarks
 * This class encapsulates the properties and behaviors of a developer.
 * It provides methods to access the developer's first name, last name, and full name.
 *
 * @example
 * ```typescript
 * const dev = new Developer('John', 'Doe');
 * console.log(dev.fullName); // Output: 'John Doe'
 * ```
 */
export class Developer {
  private readonly _firstName: string;
  private readonly _lastName: string;

  /**
   * Creates an instance of Developer.
   * @param {string} firstName - The first name of the developer.
   * @param {string} lastName - The last name of the developer.
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Gets the first name of the developer.
   * @returns {string} The first name.
   *
   * @remarks
   * This property is read-only and cannot be modified after the instance is created.
   */
  get firstName(): string {
    return this._firstName;
  }

  /**
   * Gets the last name of the developer.
   * @returns {string} The last name.
   *
   * @remarks
   * This property is read-only and cannot be modified after the instance is created.
   */
  get lastName(): string {
    return this._lastName;
  }

  /**
   * Gets the full name of the developer by combining first and last names.
   * @returns {string} The full name.
   *
   * @remarks
   * This property is computed and cannot be modified directly.
   */
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`.trim();
  }

}
