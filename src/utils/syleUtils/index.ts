import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Utils from './Utils';

const screenSize = wp('100%') + hp('100%');

const StyleUtilities = {
  screenSize: screenSize,
  ...Utils,
  DM: handleMargins, //Dynamic margin
  DP: handlePaddings, //Dynamic Padding
  hp: hp,
  wp: wp,
  DH: (height: string | number) => ({height: hp(height)}), //Dynamic Height
  DW: (width: string | number) => ({width: wp(width)}), //Dynamic Width
  //Dynamic Max Min Width, Height
  DMinW: (maxWidth: string | number) => ({maxWidth: wp(maxWidth)}),
  DMaxW: (minWidth: string | number) => ({minWidth: wp(minWidth)}),
  DMinH: (maxHeight: string | number) => ({maxHeight: hp(maxHeight)}),
  DMaxH: (minHeight: string | number) => ({minHeight: hp(minHeight)}),
  zIndex: (zIndex: number) => ({zIndex}),
};
/**
 * @param margin
 * 1 for all side.
 * 2 for Vertical and horizontal.
 * 4 for all side.
 */
function handleMargins(margin: number | Array<number>) {
  if (typeof margin === 'number') {
    return {
      marginTop: margin,
      marginRight: margin,
      marginBottom: margin,
      marginLeft: margin,
    };
  }

  if (typeof margin === 'object') {
    const marginSize = Object.keys(margin).length;
    switch (marginSize) {
      case 1:
        return {
          marginTop: margin[0],
          marginRight: margin[0],
          marginBottom: margin[0],
          marginLeft: margin[0],
        };
      case 2:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[0],
          marginLeft: margin[1],
        };
      case 3:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[1],
        };
      default:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[3],
        };
    }
  }
}

/**
 * @param padding
 * 1 for all side.
 * 2 for Vertical and horizontal.
 * 4 for all side.
 */
function handlePaddings(padding: number | Array<number>) {
  if (typeof padding === 'number') {
    return {
      paddingTop: padding,
      paddingRight: padding,
      paddingBottom: padding,
      paddingLeft: padding,
    };
  }

  if (typeof padding === 'object') {
    const paddingSize = Object.keys(padding).length;
    switch (paddingSize) {
      case 1:
        return {
          paddingTop: padding[0],
          paddingRight: padding[0],
          paddingBottom: padding[0],
          paddingLeft: padding[0],
        };
      case 2:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[0],
          paddingLeft: padding[1],
        };
      case 3:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[1],
        };
      default:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[3],
        };
    }
  }
}
export default StyleUtilities;
