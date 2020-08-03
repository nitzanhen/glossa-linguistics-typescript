# Key implementation

Keys are used to characterize Greek words, with different implementations (classes & interfaces) for different grammatical entities.
The Key contract is comprised of four different pieces:

- A "standard key" (or "complete" key) class. This extends the abstract Key class (or one of its subclasses), and provides extra functionality and typing over the properties interface. This class follows the convention of "XXXKey" (for example, InfinitiveKey).

- An interface (technically a type) of grammatical properties (forms, tenses, moods, etc.). Those follow the "XXXKeyProperties" naming convention, where "XXX" is the correponding entity name (e.g. InfinitiveProperties). For the sake of categorization, all property interfaces should extend the empty KeyProperties interface (or one of its subclasses). The Key properties interface contains only the non-function properties of the corresponding Key class, and is accordingly defined using the NonFunctionProperties type. For example:
  ```typescript
  type InfinitiveKeyProperties = NonFunctionProperties<InfinitiveKey> 
  ```
  The XXXKeyProperties type is defined in the same file as its corresponding Key class. 

- A "filter key" (or "partial" key) class. This too extends the Key class, and additionally implements the generic `FilterKey<P>`, where P is the properties interface, and is named conforming to "XXXFilterKey". The filter key class is actually composed
  of two separate declarations, one for extending Key and the other for implementing FilterKey, for example:

  ```typescript
  interface InfinitiveFilterKey extends FilterKey<InfinitiveKey> { ... };
  class InfinitiveFilterKey extends Key { ... }
  ```

- An "extended" properties interface. This bears no relation to the different Key classes, and is used for functions dealing with grammar logic. It extends
the Property interface of the corresponding class, as well as the empty ExtendedKeyProperties interface, for grouping the different extended interfaces.
These interfaces adhere to the "ExtendedXXXProperties" naming pattern.
For example:

  ```typescript
  interface InfinitiveProperties extends GrammaticalProperties, InfinitiveKeyProperties { ... };
  ```

Keys as a concept bear a close relation to Hash and Hashing, and generally should be implemented
such that two Key instances of the same class are equal if and only if their hash values are strictly equal (I.E as an homomorphism).

(Created on 12/05/20)
