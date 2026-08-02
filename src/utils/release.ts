import { criticalReviewItems } from '../data/clinic';

export function assertReleaseReady() {
  const releaseMode = import.meta.env.PUBLIC_RELEASE_MODE;
  const pending = criticalReviewItems();

  if (releaseMode === 'production' && pending.length > 0) {
    throw new Error(
      `Publisering stoppet: følgende kritiske opplysninger må bekreftes: ${pending.join(', ')}.`,
    );
  }

  return {
    isDraft: releaseMode !== 'production',
    pending,
  };
}
