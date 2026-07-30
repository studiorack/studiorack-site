import { SystemType } from '@open-audio-stack/core';

export function detectSystemType(): SystemType | undefined {
  if (typeof navigator === 'undefined') return undefined;
  const uaData = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData;
  const source = (uaData?.platform || navigator.platform || navigator.userAgent || '').toLowerCase();
  if (source.includes('android') || source.includes('iphone')) return undefined;
  if (source.includes('mac')) return SystemType.Mac;
  if (source.includes('win')) return SystemType.Win;
  if (source.includes('linux')) return SystemType.Linux;
  return undefined;
}
