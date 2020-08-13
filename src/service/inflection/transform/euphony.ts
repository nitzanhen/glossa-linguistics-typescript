import { Consonant, isLabial, isPalatal, isDental, isVowel } from 'linguistics/alphabet/letters';

import { suffix as suffixFunction } from './suffixer';

/**
 * Euphonizes consonants, according to the rules of mutation
 * of the mediopassive perfect.
 * 
 * @param consonant the first consonant.
 * @param suffix the first consonants of the suffix; should be "μ", "σ", "σθ" or "τ".
 * @returns the euphonized vesion of the two (a one- or two-letter string)
 */
export function euphonizeConsonants(consonant: Consonant, suffix: string): string {
    switch (suffix) {
        case "μ":
            if (isLabial(consonant))
                return "μμ";
            else if (isPalatal(consonant))
                return "γμ";
            else if (isDental(consonant) || consonant === "ζ" || consonant === "ν")
                return "σμ";
            else
                return consonant + "μ";
        case "σ":
            if (isLabial(consonant))
                return "ψ";
            else if (isPalatal(consonant))
                return "ξ";
            else if (isDental(consonant) || consonant === "ζ")
                return "σ";
            else
                return consonant + "σ";
        case "σθ":
            if (isLabial(consonant))
                return "φθ";
            else if (isPalatal(consonant))
                return "χθ";
            else if (isDental(consonant) || consonant === "ζ")
                return "σθ";
            else
                return consonant + "θ";
        case "τ":
            if (isLabial(consonant))
                return "πτ";
            else if (isPalatal(consonant))
                return "κτ";
            else if (isDental(consonant) || consonant === "ζ")
                return "στ";
            else
                return consonant + "τ";
    }

    //Suffix is not "μ", "σ", "σθ" or "τ".
    throw new RangeError(`suffix must be "μ", "σ", "σθ" or "τ". Instead received: ${suffix}`);
}

/**
 * Euphonizes according to the rules of mutation
 * of the mediopassive perfect.
 * For a base root ending in a vowel, this function will simply concat the suffix
 * to the base.
 * Otherwise, it will combine the base and suffix according to the rules of mutation
 * of the mediopassive perfect.
 * 
 * @param base the base to suffix to
 * @param suffix the suffix to add
 * 
 * @returns the suffixed form
 * @throws RangeError if eupohonization is needed and the suffix down not begin with "μ", "σ", "σθ" or "τ".
 */
export function euphonize(base: string, suffix: string): string {
    const lastLetter = base[base.length - 1];
    if (isVowel(lastLetter)) {
        return base + suffix;
    }
    else {
        //lastLetter is a consonant
        const suffixConsonants =
            suffix.slice(0, 2) === "σθ"
                ? "σθ"
                : suffix[0];

        const euphonized = euphonizeConsonants(lastLetter as Consonant, suffixConsonants);

        return base.slice(0, base.length - 1) + euphonized + suffix.slice(suffixConsonants.length);
    }
}

/**
 * Utility function to easily define methods that suffix endings under the euphonization
 * rules.
 * 
 * @param suffix the suffix to be added to each base passed to the function returned from this.
* @param fallback a function to call if euphonizing fails (throws an error). Defaults to the suffix function.
 * 
 * @returns a function which adds a given suffix (with euphonizations) to passed bases.
 */
export function euphonizer(suffix: string, fallback: (base: string, suffix: string) => string = suffixFunction) {
    return function (base: string) {
        try {
            return euphonize(base, suffix);
        }
        catch (error) {
            if (error instanceof RangeError) {
                return fallback(base, suffix);
            }
            throw error;
        }
    };
}