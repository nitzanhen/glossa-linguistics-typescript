# Key implementation

Keys are used to characterize Greek words, with different implementations (classes & interfaces) for different grammatical entities.
The Key contract is comprised of four different pieces:

- An interface of grammatical properties (forms, tenses, moods, etc.). Those follow the "XXXKeyProperties" naming convention, where "XXX" is the correponding entity name (e.g. InfinitiveKeyProperties). For the sake of categorization, all property interfaces should extend the empty KeyProperties interface (or one of its subclasses).
  The KeyProperties interface belonging to a grammatical entity should contains only the fields to be hashed and unhashed; that is, _only the fields that are used to check if two forms are grammatically equal_ (have the same set of properties - their keys are equal). For example, a Greek noun key should contain fields for the noun's root, case and number, **but not** its gender or declension. The latter are attributes _of the noun_, and while they are needed to determine a noun's corrent inflections, they are not used to distinguish between two inflections of the same noun.

  ```typescript
  interface InfinitiveKeyProperties extends KeyProperties { ... }
  ```

  The XXXKeyProperties type is defined in the same file as its corresponding Key class.

- A "standard key" (or "complete" key) class. This extends the abstract Key class (or one of its subclasses) and implements the parallel KeyProperties interface, and provides extra functionality and typing over the parallel KeyProperties interface. This class follows the convention of "XXXKey" (for example, InfinitiveKey).

  ```typescript
  class InfinitiveKey extends Key implements InfinitiveKeyProperties { ... }
  ```

- A "complete" properties interface. This bears no relation to the different Key classes, and is used for functions dealing with grammar logic (mostly inflecting). It extends the KeyProperties interface of the corresponding class, as well as the plain GrammaticalProperties class, for grouping the different extended interfaces.
  These interfaces adhere to the "XXXFormProperties" naming pattern.
  A form properties class is actually composed of two separate declarations, one as an interface extending the types stated above, and defining any new fields, and one as a class. For example:

  ```typescript
  interface InfinitiveFormProperties extends InfinitiveKeyProperties { ... }
  class InfinitiveFormProperties extends GrammaticalProperties<InfinitiveFormProperties> {
    //...
    constructor(properties: InfinitiveFormProperties) {
      super(properties)
    }
    //...
  };
  ```

  The class constructor **must** receive a single argument, its type matching the interface (and class) type, and pass it to the constructor where all of its fields are simply assigned to the instance (see the constructor at [GrammaticalProperties](GrammaticalProperties.ts)). when constructing an instance, this serves as a set of named arguments. The properties argument should be _an object_ containing all of the fields as described in the corresponding interface, not an actual class instance (that also works, but it isn't necessary).

  Any static methods (variant validators, for example) can be defined in the class declaration. For brevity, the constructor should be defined at the top of the class declaration, before anything else, and all other methods/properties of the class should be defined below it.

- A "filter key" (or "partial" key) class. This too extends the Key class, and additionally implements the generic `FilterKey<P>`, where P is the properties interface, and is named conforming to "XXXFilterKey". A filter key class is composed of two separate declarations as well, one for extending Key and the other for implementing FilterKey, for example:

  ```typescript
  interface InfinitiveFilterKey extends FilterKey<InfinitiveKey> { ... };
  class InfinitiveFilterKey extends Key { ... }
  ```

  Note that while a filter key is declared both as an interface and as a class, it must **always be instantiated using the class constructor.**

Keys as a concept bear a close relation to Hash and Hashing, and generally should be implemented
such that two Key instances of the same class are equal if and only if their hash values are strictly equal (I.E as an isomorphism).

(Created on 12/05/20)
