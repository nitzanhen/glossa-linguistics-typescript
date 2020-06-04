# Glossa Core #

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
- A top-level folder, for the sake of this discussion,
is a direct descendant of the src folder, such as "key", "service", "structure", etc.
- 
    