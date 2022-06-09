const THEME_COLORS = [
  {prop: '--theme-color', light: '#fff', dark: '#000'},
  {prop: '--font-color', light: '#1E2330'},
  // Blue shades
  {prop: '--dark-primary-color', light: '#097DD2'},
  {prop: '--primary-color', light: '#0A8EEF'},
  {prop: '--secondary-color', light: '#BDDFFA'}, /* amount bg */
  {prop: '--light-primary-color', light: '#DFEEFC'}, /* tag bg */
  // Gray shades
  {prop: '--dark-bland-color', light: '#545D6F'}, /* label */
  {prop: '--hover-color', light: '#545D6F'},
  {prop: '--light-hover-color', light: '#F4F6FB'}, /* tag bg */
  {prop: '--bland-color', light: '#9099AC'}, /* border, placeholder, icon */
  {prop: '--light-bland-color', light: '#E5EAF5'}, /* amount bg */

  {prop: '--success-color', light: '#00B664'},
  {prop: '--light-success-color', light: '#E6F8F0'},
  {prop: '--warning-color', light: '#FCB03F'},
  {prop: '--light-warning-color', light: '#FFF8EC'},
  {prop: '--error-color', light: '#ED2929'},
  {prop: '--light-error-color', light: '#FEEAEA'},

  {prop: '--table-border-color', light: '#D2D6DF'},
];

export const setThemeColors = (_theme = 'light') => {
  const theme = _theme === 'light' || _theme === 'dark' ? _theme : 'light';
  const root = document.documentElement.style;
  THEME_COLORS.forEach(color => root.setProperty(color.prop, color[theme]));
};