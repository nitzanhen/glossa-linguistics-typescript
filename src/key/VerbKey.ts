import Key from './Key';
import GreekVerb from '../linguistics/pos/GreekVerb';

/**
 * Base implementation of a filter key, for Greek verbs.
 * Puts a constraint on the Key values, such that it extending classes
 * must have the type extend VerbInflections
 *
 * @see Key
 * @since 12/04/20
 */
abstract class VerbKey<I /* extends VerbInflections */> extends Key<I> { }
