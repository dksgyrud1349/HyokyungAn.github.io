import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { IPresentation } from './IPresentation';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPresentation.Payload;

export const Presentation = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    // PRESENTATION
    // CommonSection에 <PresentationRow payload={payload} /> 추가 시 사용 가능
    <CommonSection title="">
      
    </CommonSection>
  );
}
