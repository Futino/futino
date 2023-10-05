
import fColors from "./futino-universal-colors.cjs";

const typography = (colors, alpha) => {
    return {
    DEFAULT: {
      css: {
        h1: {
          fontFamily: "TASA Orbiter Display",
          fontWeight: "bold",
        },
        h2: {
          fontFamily: "TASA Orbiter Text",
          fontWeight: "normal"
        },
        h3: {
          fontFamily: "TASA Orbiter Text",
          fontWeight: "normal"
        },
        h4: {
          fontFamily: "TASA Orbiter Text",
          fontWeight: "normal"
        },
        h5: {
          fontFamily: "TASA Orbiter Text",
          fontWeight: "normal"
        },

        h6: {
          fontFamily: "TASA Orbiter Text",
      fontWeight: "normal"
        },
        p: {
          fontFamily: "TASA Orbiter Text",
          letterSpacing: "0.5",
          lineHeight: "1",
        }
      }
    },
    main: {
      css: {
        '--tw-prose-body': fColors.surface.on.DEFAULT,
        '--tw-prose-headings': fColors.surface.on.DEFAULT,
        '--tw-prose-lead': colors.neutral[400],
        '--tw-prose-links': fColors.tertiary.DEFAULT.replace(alpha, 1),
        '--tw-prose-bold': colors.white,
        '--tw-prose-counters': colors.neutral[400],
        '--tw-prose-bullets': fColors.secondary.DEFAULT.replace(alpha, 0.4),
        '--tw-prose-hr': colors.neutral[700],
        '--tw-prose-quotes': colors.neutral[100],
        '--tw-prose-quote-borders': fColors.secondary.DEFAULT.replace(alpha, 0.3),
        '--tw-prose-captions': colors.neutral[400],
        '--tw-prose-code': colors.white,
        '--tw-prose-pre-code': colors.neutral[300],
        '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
        '--tw-prose-th-borders': colors.neutral[600],
        '--tw-prose-td-borders': colors.neutral[700],
      },
    }
  };
};
module.exports = typography;

