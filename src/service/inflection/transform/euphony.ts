import { Consonant, isLabial, isPalatal, isDental, isVowel } from "#/linguistics/alphabet/letters";

/**
 * Euphonizes consonants, according to the rules of mutation
 * of the mediopassive perfect.
 * 
 * @param consonant1 the first consonant.
 * @param suffix the first consonants of the suffix; should be "μ", "σ", "σθ" or "τ".
 * @returns the euphonized vesion of the two (a one- or two-letter string)
 */
export function euphonizeConsonants(consonant1: Consonant, suffix: string): string {
    switch (suffix) {
        case "μ":
            if (isLabial(consonant1))
                return "μμ";
            else if (isPalatal(consonant1))
                return "γμ";
            else if (isDental(consonant1) || consonant1 === "ζ" || consonant1 === "ν")
                return "σμ";
            else
                return consonant1 + "μ";
        case "σ":
            if (isLabial(consonant1))
                return "ψ";
            else if (isPalatal(consonant1))
                return "ξ";
            else if (isDental(consonant1) || consonant1 === "ζ")
                return "σ";
            else
                return consonant1 + "σ";
        case "σθ":
            if (isLabial(consonant1))
                return "φθ";
            else if (isPalatal(consonant1))
                return "χθ";
            else if (isDental(consonant1) || consonant1 === "ζ")
                return "σθ";
            else
                return consonant1 + "θ";
        case "τ":
            if (isLabial(consonant1))
                return "πτ";
            else if (isPalatal(consonant1))
                return "κτ";
            else if (isDental(consonant1) || consonant1 === "ζ")
                return "στ";
            else
                return consonant1 + "τ";
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
    const lastLetter = base[base.length - 1]
    if(isVowel(lastLetter)) {
        return base + suffix;
    }
    else {
        //lastLetter is a consonant
        const suffixConsonants = 
            suffix.slice(0, 2) === "σθ"
            ? "σθ"
            : suffix[0]
        
        const euphonized = euphonizeConsonants(lastLetter as Consonant, suffixConsonants)

        return base.slice(0, base.length - 1) + euphonized + suffix.slice(suffixConsonants.length);
    }
}

/**
 * Utility function to easily define methods that suffix endings under the euphonization
 * rules.
 * 
 * @param suffix the suffix to be added to each base passed to the function returned from this.
 * @returns a function which adds a given suffix (with euphonizations) to passed bases.
 */
export function euphonizer(suffix: string) {
    return (base: string) => euphonize(base, suffix)
}