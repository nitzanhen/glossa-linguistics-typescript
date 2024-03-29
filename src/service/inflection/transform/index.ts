/**
 * The Inflection transform module provides transformations on letters, syllables and forms
 * regarding inflecting them into the correct form.
 *
 * @since 06/06/20
 */

export { default as composeVerbInflectionFunction } from '../composition/composeVerbInflectionFunction';
export { default as augment } from './augment';
export { default as suffixer } from './suffixer';
export { default as contractor } from './contractor';