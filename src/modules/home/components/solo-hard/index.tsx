import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import soloHardIcon from '../../../../../assets/solo-hard-logo.svg';
import soloIcon from '../../../../../assets/solo-hard.png';
import arrowRightIcon from '../../../../../assets/arrow-right-blue.svg';
import styles from './SoloHard.module.css';

export const SoloHard = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.portfolio} id='hardwere'>
      <div className={styles.content}>
        <div className={`${styles.logoBlock} ${styles.logoBlockMob}`}>
          <Image src={soloHardIcon} alt='' unoptimized />
        </div>
        <div style={{ maxWidth: '530px' }}>
          <Image
            className={styles.mobImage}
            unoptimized
            src={soloIcon}
            alt=''
            style={{
              maxWidth: '530px',
              maxHeight: '430px',
              objectFit: 'contain',
            }}
          />
        </div>
        <div>
          <div>
            <div className={styles.logoBlock}>
              <Image src={soloHardIcon} alt='' unoptimized />
            </div>
            <p className={styles.text}>
              <b style={{ fontWeight: 600 }}>Sollo Systems</b> -{' '}
              {t('solo_hard_text')}
            </p>
            <a
              href='https://www.sollo.systems'
              className={styles.linkMore}
              target='_blank'
            >
              {t('go_to')} <Image src={arrowRightIcon} alt='' unoptimized />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.tag}>#hardware</div>
    </div>
  );
};
