# Verb Inflection Functions

The Verb inflection functions module provides inflection functions for all the possible inflections of a Greek verb.
Verb inflections are, by far, the richest and most complex inflection system of any Greek part of speech, and probably
of all grammatical systems of Ancient Greek.

The inflection functions tree must account for every possible inflection, that is for every possible set of extended verb
grammatical properties (Tense, mood, voice, etc. **but also** Strong/weak aorists, perfects, optative variations, etc.), as well as different
transformations that a root might undergo to form the final inflections (augmentation, contraction, euphonic consonant transformations, etc.).

It is worth noting that currently, this module only deals with inflecting ω-class verbs.

## Structure
### Composing inflection functions

All verb inflection functions are a product of the utility function,
composeVerbInflectionFunction(), declared at the inflection service transform index file.

### Inflection function tree structure

The inflection function tree itself is structured, for the most part, in the following order:
tense -> mood -> voice -> number -> person.
Different variants and classifications may "disrupt" this hierarchy, adding additional partitions.

The structure of the tree can be described as such (persons and numbers are omitted for brevity):

<br><span style="color:#009999">Present</span> (Contraction)
<br>┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span>
<br>┣ <span style="color:#cc6600">Subjunctive</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span>
<br>┣ <span style="color:#cc6600">Optative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span>
<br>┣ <span style="color:#cc6600">Imperative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┗ ┗ <span style="color:#cc6699">Mediopassive</span>
<br>
<br><span style="color:#009999">Imperfect</span> (Contraction, Augment)
<br>┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┗ ┗ <span style="color:#cc6699">Mediopassive</span>
<br>
<br><span style="color:#009999">Future</span>
<br>┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┣ <span style="color:#cc6699">Passive</span>
<br>┃ ┃ ┣ <span style="color:#ffffff">First</span>
<br>┃ ┗ ┗ <span style="color:#ffffff">Second</span>
<br>┣ <span style="color:#cc6600">Optative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┣ <span style="color:#cc6699">Passive</span>
<br>┃ ┃ ┣ <span style="color:#ffffff">First</span>
<br>┗ ┗ ┗ <span style="color:#ffffff">Second</span>
<br>
<br><span style="color:#009999">Aorist</span> (Augment)
<br>┣ <span style="color:#ffffff">First</span>
<br>┃ ┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┃ ┣ <span style="color:#cc6600">Subjunctive</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┃ ┣ <span style="color:#cc6600">Optative</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┃ ┣ <span style="color:#cc6600">Imperative</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┣ <span style="color:#ffffff">Second</span>
<br>┃ ┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┃ ┣ <span style="color:#cc6600">Subjunctive</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┃ ┣ <span style="color:#cc6600">Optative</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┃ ┃ ┗ <span style="color:#cc6699">Passive</span>
<br>┃ ┣ <span style="color:#cc6600">Imperative</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┃ ┣ <span style="color:#cc6699">Middle</span>
<br>┗ ┗ ┗ <span style="color:#cc6699">Passive</span>
<br>
<br><span style="color:#009999">Perfect</span>
<br>┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span> (Euphonization)
<br>┣ <span style="color:#cc6600">Subjunctive</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span> (Euphonization)
<br>┣ <span style="color:#cc6600">Optative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span> (Euphonization)
<br>┃ <span style="color:#cc6600">Imperative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┗ ┗ <span style="color:#cc6699">Mediopassive</span> (Euphonization)
<br>
<br><span style="color:#009999">Pluperfect</span> (Augment)
<br>┃ <span style="color:#cc6600">Indicative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┗ ┗ <span style="color:#cc6699">Mediopassive</span> (Euphonization)
<br>
<br><span style="color:#009999">Future Perfect</span>
<br>┣ <span style="color:#cc6600">Indicative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┃ ┗ <span style="color:#cc6699">Mediopassive</span>
<br>┃ <span style="color:#cc6600">Optative</span>
<br>┃ ┣ <span style="color:#cc6699">Active</span>
<br>┗ ┗ <span style="color:#cc6699">Mediopassive</span>

