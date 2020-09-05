import { Key } from 'key';
import { Mastery, Masterable } from 'mastery';

import { Definitions, Definable } from '../definition';
import { Inflections, Inflectable } from '../inflection';
import { PickPartial, PickWithPartials } from 'util/typeUtils';

export type GreekWordConstructorOptions<K extends Key> = PickWithPartials<GreekWord<K>, "mnemonic", "creationDate" | "comments">

/**
 * Base class for Greek words.
 *
 * @since 21/04/20
 */
abstract class GreekWord<K extends Key>
  implements Definable<K>, Inflectable, Masterable {


  //------ Fields ------//

  public readonly definitions: Definitions<K>;
  abstract readonly inflections: Inflections;
  abstract readonly mastery: Mastery;

  public mnemonic: string;
  public readonly creationDate: Date;
  public comments?: string;

  //------ Constructor ------//

  public constructor({
    mnemonic,
    creationDate = new Date(),
    comments = undefined
  }: GreekWordConstructorOptions<K>) {
    this.definitions = new Definitions();
    this.mnemonic = mnemonic;
    this.creationDate = creationDate;
    this.comments = comments;
  }
}

export default GreekWord;
