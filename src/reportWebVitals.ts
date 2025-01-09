import { onCLS, onFID, onLCP, onTTFB } from 'web-vitals';

type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry) {
    [onCLS, onFID, onLCP, onTTFB].forEach((metric) => metric(onPerfEntry));
  }
};

export default reportWebVitals;