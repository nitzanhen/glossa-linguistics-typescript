import AddNounService from './pos/AddNounService';

/**
 * A set of useful AddWordServices with methods connecting between the AddWord view and the liguistic backend.
 *
 * @since 21/4/20
 */
const addWordServices = {
  GreekNoun: AddNounService,
  //...
};

export default addWordServices;
