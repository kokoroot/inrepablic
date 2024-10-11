import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import inrepablicLogoIcon from '../../../../../assets/inrepublic-logo.png';
import inrepublicIcon from '../../../../../assets/interpublic.png';
import macIcon from '../../../../../assets/mac-icon.png';
import arrowRightIcon from '../../../../../assets/arrow-right-blue.svg';
import styles from './Inrepublic.module.css';

export const Inrepublic = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.portfolio} id='webplatform'>
      <div className={styles.content}>
        <div className={`${styles.logoBlock} ${styles.logoBlockMob}`}>
          <Image src={inrepablicLogoIcon} alt='' unoptimized height={20} />
        </div>
        <div style={{ maxWidth: '366px' }}>
          <Image
            className={styles.mobImage}
            unoptimized
            src={inrepublicIcon}
            alt=''
            style={{
              maxWidth: '366px',
              maxHeight: '430px',
              objectFit: 'contain',
            }}
          />
        </div>
        <div>
          <div>
            <div className={styles.logoBlock}>
              <Image src={inrepablicLogoIcon} alt='' unoptimized height={20} />
            </div>
            <p className={styles.text}>
              <b style={{ fontWeight: 600 }}>inRepublic </b>–{' '}
              {t('inrepublic_text')}
            </p>
            <a
              href='https://www.inrepublic.com'
              className={styles.linkMore}
              target='_blank'
            >
              {t('go_to')} <Image src={arrowRightIcon} alt='' unoptimized />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.tag}>#webplatform</div>
    </div>
  );
};
