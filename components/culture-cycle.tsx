import { CULTURE_CYCLE } from '../consts';
import { Callout } from 'fumadocs-ui/components/callout';
import Link from 'next/link';

interface CultureCycleProps {
  lang?: string;
}

export default function CultureCycle({ lang = 'en' }: CultureCycleProps) {
  const openSourceText = CULTURE_CYCLE.openSource.text[lang as keyof typeof CULTURE_CYCLE.openSource.text] || CULTURE_CYCLE.openSource.text.en;
  const calloutTitle = CULTURE_CYCLE.callout.title[lang as keyof typeof CULTURE_CYCLE.callout.title] || CULTURE_CYCLE.callout.title.en;
  const calloutContent = CULTURE_CYCLE.callout.content[lang as keyof typeof CULTURE_CYCLE.callout.content] || CULTURE_CYCLE.callout.content.en;
  const description = CULTURE_CYCLE.description[lang as keyof typeof CULTURE_CYCLE.description] || CULTURE_CYCLE.description.en;
  
  // Split the callout content by line breaks and render as separate paragraphs
  const renderCalloutContent = () => {
    return calloutContent.split('\n\n').map((paragraph, index) => (
      <p key={index} className={index > 0 ? 'mt-4' : ''}>
        {paragraph}
      </p>
    ));
  };
  
  return (
    <>
      <h2>
        <Link href={CULTURE_CYCLE.openSource.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
          {openSourceText}
        </Link>
      </h2>
      <Callout type="info" title={calloutTitle}>
        {renderCalloutContent()}
      </Callout>
      <p>{description}</p>
    </>
  );
}
