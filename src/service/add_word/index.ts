import AddNounService from './pos/AddNounService';

/**
 * A set of useful AddWordServices with methods connecting between the AddWord view and the liguistic backend.
 *
 * @since 21/4/20
 */
const AddWordServices = {
  GreekNoun: AddNounService,
  //...
};

export default Object.freeze(AddWordServices);
