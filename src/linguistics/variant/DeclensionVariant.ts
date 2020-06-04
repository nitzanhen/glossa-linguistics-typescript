/**
 * @todo doc
 */

export type FirstDeclensionVariant = "alpha" | "alpha_long" | "alpha_short" | "eta";

/**
 * @Todo
 */
export type ThirdDeclensionVariant = never;

export type DeclensionVariant = FirstDeclensionVariant | ThirdDeclensionVariant;