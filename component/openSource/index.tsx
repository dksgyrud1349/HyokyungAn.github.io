import { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import OpenSourceRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IOpenSource.Payload;

export const OpenSource = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    // OPEN SOURCE
    // CommonSection 태그 안에 <OpenSourceRow payload={payload} /> 추가하면 사용 가능
    <CommonSection title="">
      
    </CommonSection>
  );
}
