const numberWords = {
  twenty: 20,
  twentyone: 21,
  twentytwo: 22,
  twentythree: 23,
  twentyfour: 24,
  twentyfive: 25,
  twentysix: 26,
  twentyseven: 27,
  twentyeight: 28,
  twentynine: 29,
  thirty: 30,
  thirtyone: 31,
  thirtytwo: 32,
  thirtythree: 33,
  thirtyfour: 34,
  thirtyfive: 35,
  thirtysix: 36,
  thirtyseven: 37,
  thirtyeight: 38,
  thirtynine: 39,
  forty: 40,
  fortyone: 41,
  fortytwo: 42,
  fortythree: 43,
  fortyfour: 44,
  fortyfive: 45,
  fortysix: 46,
  fortyseven: 47,
  fortyeight: 48,
  fortynine: 49,
  fifty: 50,
  fiftyone: 51,
  fiftytwo: 52,
};

export default function normalizeAnswer(question, answer) {
  if (!answer) return "";

  let text = answer.toLowerCase().trim();

  // --------------------
  // Skip
  // --------------------

  if (text === "skip" || text === "no") {
    return "";
  }

  // --------------------
  // Height
  // --------------------

  if (question.key === "height") {
    text = text
      .replace("feet", "'")
      .replace("foot", "'")
      .replace("ft", "'")
      .replace("inches", "")
      .replace("inch", "")
      .replace(/\s+/g, "");

    if (text.includes("'")) {
      const parts = text.split("'");

      if (parts.length >= 2) {
        return `${parts[0]}'${parts[1]}"`;
      }
    }
  }

  // --------------------
  // Numbers
  // --------------------

  if (
    question.key === "weight" ||
    question.key === "waist" ||
    question.key === "hip" ||
    question.key === "size"
  ) {
    const digits = text.match(/\d+/);

    if (digits) {
      return digits[0];
    }

    const key = text.replace(/\s/g, "");

    if (numberWords[key]) {
      return numberWords[key].toString();
    }
  }

  // --------------------
  // Multi Select (Brands)
  // --------------------

  if (question.type === "multi") {

    const aliases = {
      "Levi's": ["levis", "levi", "levi's"],
      "Jack & Jones": ["jack and jones", "jack & jones"],
      "H&M": ["h and m", "hm", "h&m"],
    };

    const selectedBrands = question.options.filter((brand) => {

      const brandLower = brand.toLowerCase();

      // Exact match
      if (text.includes(brandLower)) {
        return true;
      }

      // Alias match
      if (aliases[brand]) {
        return aliases[brand].some((alias) =>
          text.includes(alias)
        );
      }

      return false;
    });

    return selectedBrands;
  }

  // --------------------
  // Radio Buttons
  // --------------------

  if (question.type === "radio") {

    const found = question.options.find((option) =>
      text.includes(option.toLowerCase())
    );

    if (found) {
      return found;
    }
  }

  // --------------------
  // Default
  // --------------------

  return answer;
}