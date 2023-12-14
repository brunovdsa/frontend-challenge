import { useEffect, useState } from 'react';
import * as Styled from './styles';

interface ProgressBarProps {
  value: any;
}

export function ProgressBar(props: ProgressBarProps) {
  const [filled, setFilled] = useState<number>(props.value);

  useEffect(() => {
    if (filled > 0) {
      setFilled((prev) => (prev += 2));
    }
  }, [filled]);

  const progress = filled + '%';
  const renderCompleteProgress = () => {
    if (progress === '100%') {
      return console.log('finalizado');
    }
  };

  return (
    <Styled.Progress value={filled}>
      <div>{renderCompleteProgress()}</div>
    </Styled.Progress>
  );
}
