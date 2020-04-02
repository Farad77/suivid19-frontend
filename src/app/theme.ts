const primary =  '#3366FF';
const success =  '#80D631';
const info =  '#3C9FFC';
const warning =  '#e97000';
const danger =  '#FF4A3D';

export const LIGHT_THEME = {
  name: 'light',
  base: 'default',
  variables: {
    primary,
    success,
    info,
    warning,
    danger,
    charts: {
      primary,
      success,
      info,
      warning,
      danger,
      bg: 'transparent',
      textColor: '#1A2138',
      axisLineColor: '#8F9BB3',
      splitLineColor: '#C5CEE0',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#E4E9F2',
      areaOpacity: '0.7',
    },
    bubbleMap: {
      primary,
      success,
      info,
      warning,
      danger,
      titleColor: '#1A2138',
      areaColor: '#C5CEE0',
      areaHoverColor: '#8F9BB3',
      areaBorderColor: '#E4E9F2',
    },
  },
};
