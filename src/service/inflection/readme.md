# Inflection Service #

The inflection service provides wide inflection functionality for the different parts of speech in Greek;
it is, therefore, one of the larger services in the Glossa core.

It has two main sections:

- **Transform:** The transform section provides solutions to the different operations that a form may go under
as part of its inflection - augment, suffixing, contraction, etc. It is not very useful by itself, and used mostly
as a utility module for the other section:

- **Function:** the function section contains the inflection functions themselves. It contains trees of 
specific inflection functions covering the possible combinations of grammatical properties (tenses, voices, persons, etc.),
as well as more generic functions that orchestrate the process of turning a root form, along with a set of the desired inflection's properties, into the form itself (using the specific functions).

