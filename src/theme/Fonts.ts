import Colors from './Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const getDimensions = {
  height: hp('100%'),
};
export const FontSize = {
  font: hp('2.5'), //16
  h1: hp('7.2'), //48
  h2: hp('5.3'), //34
  h3: hp('4.4'), //24
  h4: hp('3.0'), //20 somhow
  h5: hp('2.8'), //16
  cardItem: hp('2.9'), //18
  lead: hp('2.8'), //16
  button: hp('2.8'), //16
  body: hp('2.2'), //14
  caption: hp('1.9'), //12
  fieldError: hp('1.8'),
};

const fonts = {
  h1: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: FontSize.h1,
    color: Colors.text,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: FontSize.h2,
    color: Colors.text,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.h3,
    color: Colors.text,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.h4,
    color: Colors.text,
    letterSpacing: 0,
  },
  h5: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.h5,
    color: Colors.text,
    letterSpacing: 0,
  },
  cardItem: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: FontSize.cardItem,
    color: Colors.text,
    letterSpacing: 0,
  },
  lead: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.lead,
    color: Colors.text,
    letterSpacing: 0,
  },
  body: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.body,
    color: Colors.text,
    letterSpacing: 0,
  },
  caption: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.caption,
    color: Colors.gray,
    letterSpacing: 0.4,
  },
  textSubtle: {
    // fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.body,
    color: Colors.gray1,
    letterSpacing: 0.3,
  },
  textGray: {
    // fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.body,
    color: Colors.gray,
    letterSpacing: 0.3,
  },
  fieldError: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.caption,
    color: Colors.raddish,
    letterSpacing: 0.4,
  },
  button: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: FontSize.button,
    color: Colors.primary,
    letterSpacing: 0.32,
  },
};

export default fonts;
