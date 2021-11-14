import Fonts from './Fonts';
import AppColors from './Colors';
import AppSpacing from '@Utils/syleUtils/Spacing';
import {Typography, Colors, Spacings} from 'react-native-ui-lib';

Colors.loadColors({
  ...AppColors,
});

Typography.loadTypographies({
  ...Fonts,
});

Spacings.loadSpacings({
  ...AppSpacing,
});
