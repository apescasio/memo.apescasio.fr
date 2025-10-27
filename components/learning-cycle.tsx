import { LEARNING_CYCLE } from '../consts';
import { Callout } from 'fumadocs-ui/components/callout';
import Link from 'next/link';

interface LearningCycleProps {
  lang?: string;
}

export default function LearningCycle({ lang = 'en' }: LearningCycleProps) {
  const label = LEARNING_CYCLE.label[lang as keyof typeof LEARNING_CYCLE.label] || LEARNING_CYCLE.label.en;
  const currentText = LEARNING_CYCLE.currentText[lang as keyof typeof LEARNING_CYCLE.currentText] || LEARNING_CYCLE.currentText.en;
  const cycleText = LEARNING_CYCLE.cycleText[lang as keyof typeof LEARNING_CYCLE.cycleText] || LEARNING_CYCLE.cycleText.en;
  const ordinals = LEARNING_CYCLE.ordinals[lang as keyof typeof LEARNING_CYCLE.ordinals] || LEARNING_CYCLE.ordinals.en;
  const calloutText = LEARNING_CYCLE.callout[lang as keyof typeof LEARNING_CYCLE.callout] || LEARNING_CYCLE.callout.en;
  
  const getOrdinal = (num: number) => {
    if (lang === 'fr') {
      return num === 1 ? ordinals[0] : ordinals[1];
    } else {
      return num === 1 ? ordinals[0] : 
             num === 2 ? ordinals[1] : 
             num === 3 ? ordinals[2] : ordinals[3];
    }
  };
  
  return (
    <>
      <h2>
        <Link href={`/${lang}/docs/cycles`} className="hover:underline">
          {label} ({currentText} {LEARNING_CYCLE.current}{getOrdinal(LEARNING_CYCLE.current)} {cycleText})
        </Link>
      </h2>
      <Callout type="warn">
        {calloutText}
      </Callout>
    </>
  );
}
