import { ConfigParameters } from '../infra';
//import colors from './colors';


export default (parameters: ConfigParameters) => {
  return {
    DEFAULTMode: 'class',
    theme: {
      extend: {
        //colors: colors,
      },
    },

    plugins: [],
  }
}
