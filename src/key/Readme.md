# Key implementation

Keys are used to characterize Greek words, with different implementations (classes & interfaces) for different grammatical entities.
The Key contract is comprised of four different pieces:

- An interface of grammatical properties (forms, tenses, moods, etc.). Those follow the "XXXKeyProperties" naming convention, where "XXX" is the correponding entity name (e.g. InfinitiveKeyProperties). For the sake of categorization, all property interfaces should extend the empty KeyProperties interface (or one of its subclasses).
The KeyProperties interface belonging to a grammatical entity should contains only the fields to be hashed and unhashed; that is, *only the fields that are used to check if two forms are grammatically equal* (have the same set of properties - their keys are equal). For example, a Greek noun
key should contain fields for the noun's root, case and number, **but not** its gender or declension. The latter are attributes *of the noun*, and while they are needed to determine a noun's corrent inflections, they are not used to distinguish between two inflections of the same noun.
  ```typescript
  interface InfinitiveKeyProperties extends KeyProperties { ... }
  ```
  The XXXKeyProperties type is defined in the same file as its corresponding Key class. 

- A "standard key" (or "complete" key) class. This extends the abstract Key class (or one of its subclasses) and implements the parallel KeyProperties interface, and provides extra functionality and typing over the parallel KeyProperties interface. This class follows the convention of "XXXKey" (for example, InfinitiveKey). 
  ```typescript
  class InfinitiveKey extends Key implements InfinitiveKeyProperties { ... }
  ```

- A "complete" properties interface. This bears no relation to the different Key classes, and is used for functions dealing with grammar logic (mostly inflecting). It extends the KeyProperties interface of the corresponding class, as well as the empty GrammaticalProperties interface, for grouping the different extended interfaces.
These interfaces adhere to the "XXXProperties" naming pattern.
For example:

  ```typescript
  interface InfinitiveProperties extends GrammaticalProperties, InfinitiveKeyProperties { ... };
  ```

- A "filter key" (or "partial" key) class. This too extends the Key class, and additionally implements the generic `FilterKey<P>`, where P is the properties interface, and is named conforming to "XXXFilterKey". The filter key class is actually composed of two separate declarations, one for extending Key and the other for implementing FilterKey, for example:

  ```typescript
  interface InfinitiveFilterKey extends FilterKey<InfinitiveKey> { ... };
  class InfinitiveFilterKey extends Key { ... }
  ```


Keys as a concept bear a close relation to Hash and Hashing, and generally should be implemented
such that two Key instances of the same class are equal if and only if their hash values are strictly equal (I.E as an isomorphism).

(Created on 12/05/20)
