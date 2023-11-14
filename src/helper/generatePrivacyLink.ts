
const links = {
  "USA": {
        "AL": {
          "en": { "privacyLink":  "https://privacypolicy.pg.com/usa/al/en" },
          "es": { "privacyLink":  "https://privacypolicy.pg.com/usa/al/es"}
        },
        "AK": {
          "en": { "privacyLink":  "https://privacypolicy.pg.com/usa/ak/en" },
          "es": { "privacyLink":  "https://privacypolicy.pg.com/usa/ak/es" }
        },
        "DEFAULT": {
          "en": { "privacyLink":  "https://privacypolicy.pg.com/usa/en" },
          "es": { "privacyLink":  "https://privacypolicy.pg.com/usa/es" }
        }
      },
  "AU": {
        "NSW": {
          "en": { "privacyLink":  "https://privacypolicy.pg.com/au/nsw/en" },
          "es": { "privacyLink":  "https://privacypolicy.pg.com/au/nsw/es" }
        },
        "VIC": {
          "en": { "privacyLink": "https://privacypolicy.pg.com/au/vic/en" },
          "es": { "privacyLink":  "https://privacypolicy.pg.com/au/vic/es" }

        },
        "DEFAULT": {
          "en": { "privacyLink":  "https://privacypolicy.pg.com/au/en" },
          "es": { "privacyLink":  "https://privacypolicy.pg.com/au/es" }
        }
      }, 
  "DEFAULT": {
        "en": { "privacyLink":  "https://privacypolicy.pg.com/en" },
        "es": { "privacyLink":  "https://privacypolicy.pg.com/es" }
      }
}

export const generatePrivacyLink = ({
  countryCode, 
  state, 
  lang,
  linkType
 }: {
  countryCode: string;
  lang: string;
  linkType: string;
  state: string;
}) => {
    if (!countryCode) {
      console.error('generatePrivacyLink: Missing countryCode parameter.')
    
      return links.DEFAULT[lang][linkType]
    }
  
  const countryData = links[countryCode]
  const hasCountryButNoState = countryData && countryData[lang]
  const hasStateEntry = countryData && countryData[state]

  if (hasCountryButNoState) {
    return countryData[lang][linkType];
  }

  if (hasStateEntry) { 
    return countryData[state][lang][linkType]; 
  } else {
    console.error('generatePrivacyLink: Missing state parameter.')

    return countryData.DEFAULT[lang][linkType]
  }
}
