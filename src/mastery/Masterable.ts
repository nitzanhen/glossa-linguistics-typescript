import Mastery from './Mastery';

/**
 * The Masterable interface is simply a container for the Mastery object, to be added to anything masterable.
 *
 * @see Mastery
 * @since 3/3/20
 */
interface Masterable {
  mastery: Mastery;
}

export default Masterable;
