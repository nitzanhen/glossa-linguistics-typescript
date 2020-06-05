****# Glossa Core #

Core logic for the Glossa app. Written in Typescript.

## imports ##

The Glossa core entails a complex hierarchy of modules, wide and deep.
To keep imports between modules as clean and clear as possible, some
basic path aliases are in place, and some guidelines are to be followed:

- '#' at the beginning of an import refers to the source folder, src;
    ```typescript
    import { Key, NounKey } from '#/key'
    ```
    imports the Key and NounKey classes from src/key/index.ts, for example.
- A top-level folder or module, for the sake of this discussion,
is a direct descendant of the src folder, such as "key", "service", "structure", etc.
Top-level modules usually have an index.ts, with organized reports for all entities of the module which
are to be exported.
- When importing, in a certain file, an entity that is under a different top-level module (e.g. importing Key from
a service file), they should be imported from the main index.ts of the top-level module, e.g.
    ```typescript
    import { Key } from '#/key'
    ```
    and **not**:
    ```typescript
    import Key from '#/key/Key'
    ```
    In other words, files should try to keep all imports from a different, given top-level module under a single import statements;
    this way the import section of each file stays clean and more consistent.
    
    Also, of course, these imports must use the path alias #, as seen in the exmaple above. 
- **Import order**: Imports should be grouped by their relation to the file into which they are imported. Such "import groups" should be separated at the top of the file by empty lines, to keep everything clean and clear. The groups, and their general order, are:
  1. Imports from a different npm package 
  2. Imports from other top-level modules (imports from the same top-level modules, if they require more than one line, should be grouped together, but there need not be a line between those and other imports in this category).
  3. Imports from another "area" of the same top-level modules (this is mostly relevant for files in the linguistics top-level modules, which contains a few different sub-modules, e.g. `'#/linguisitics/property'`, `#/linguistics/inflection`, etc.). These imports can be either relative or "absolute" (using the # alias).
  4. Relative imports from the same module (and "area").

    In general, imports from files "closer" to the given file should appear later in the import section. For example, the imports of the GreekNoun.ts 
    (under `#/linguistics/pos`) file should look something like:
    ```typescript
    import { NounKey } from '#/key'; //Group #2
    import { Mastery } from '#/mastery'; 

    import { NounInflections } from '../inflection/'; //Group #3

    import GreekWord from './GreekWord'; //Group #4
    ```

    