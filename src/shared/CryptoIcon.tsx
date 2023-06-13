import React from 'react';
import useDynamicSVGImport from 'react-crypto-icons/lib/useDynamicSVGImport';

interface DynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: React.ReactEventHandler<SVGSVGElement>;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size: number;
  onCompleted?: DynamicSVGImportOptions['onCompleted'];
  onError?: DynamicSVGImportOptions['onError'];
}
/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const CryptoIcon: React.FC<IconProps> = ({
  name,
  size,
  onCompleted,
  onError,
  ...rest
}): React.ReactElement | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    return (
      <div
        style={{
          height: size,
          width: size,
          backgroundColor: 'rgba(175,198,255,0.59)',
          borderRadius: '14px',
        }}
      ></div>
    );
  }
  if (loading) {
    return (
      <div
        style={{
          height: size,
          width: size,
          backgroundColor: 'rgba(175,198,255,0.59)',
          borderRadius: '14px',
        }}
      ></div>
    );
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} style={{ height: size, width: size }} />;
  }
  return null;
};

export default CryptoIcon;
