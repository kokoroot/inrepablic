import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import testIcon from '../../../../../assets/test-1.png';
import kokoroozIcon from '../../../../../assets/kokorooz-logo.png';

import kokoroozIcon1 from '../../../../../assets/kokorooz-phone-1.png';
import kokoroozIcon2 from '../../../../../assets/kokorooz-phone-2.png';

import kokoroozIconText from '../../../../../assets/kokorooz-text.svg';
import arrowRightIcon from '../../../../../assets/arrow-right-blue.svg';
import styles from './Portfolio.module.css';
import { Downloads } from '../downloads';
import { useState } from 'react';

export const Portfolio = () => {
  const { t } = useTranslation('common');

  const [activeImage, setActiveImage] = useState(true);

  const toggleActive = () => {
    setActiveImage(!activeImage);
  };

  return (
    <div className={styles.portfolio} id='portfolio'>
      <div className={styles.content}>
        <div className={`${styles.logoBlock} ${styles.logoBlockMob}`}>
          <Image src={kokoroozIcon} alt='' unoptimized width={40} height={40} />
          <div>
            <Image src={kokoroozIconText} alt='' unoptimized />
            <div className={styles.textLogo}>dating app</div>
          </div>
        </div>
        <div
          style={{
            maxWidth: '316px',
            width: '100%',
            height: '370px',
            position: 'relative',
          }}
        >
          <Image
            unoptimized
            src={kokoroozIcon1}
            alt=''
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: activeImage ? 'scale(1.1)' : 'scale(1)',
              zIndex: activeImage ? 1 : 0,
              top: 0,
              height: '355px',
              position: 'absolute',
              maxWidth: '220px',
              objectFit: 'contain',
            }}
            onClick={toggleActive}
          />
          <Image
            unoptimized
            src={kokoroozIcon2}
            alt=''
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: activeImage ? 'scale(1)' : 'scale(1.1)',
              maxWidth: '220px',
              height: '316px',
              right: activeImage ? 15 : -15,
              zIndex: activeImage ? 0 : 1,
              top: 15,
              position: 'absolute',
              objectFit: 'contain',
            }}
            onClick={toggleActive}
          />
        </div>
        <div>
          <div>
            <div className={styles.logoBlock}>
              <Image
                src={kokoroozIcon}
                alt=''
                unoptimized
                width={40}
                height={40}
              />
              <div>
                <Image src={kokoroozIconText} alt='' unoptimized />
                <div className={styles.textLogo}>dating app</div>
              </div>
            </div>
            <p className={styles.text}>
              <b style={{ fontWeight: 600 }}>Kokorooz</b>–{' '}
              {t('kokorooz_text_1')}
            </p>
            <p
              className={styles.text}
              style={{ marginBottom: 0 }}
              dangerouslySetInnerHTML={{ __html: t('kokorooz_text_2') }}
            ></p>
            <a href='#' className={styles.linkMore}>
              {t('learn_more')}
              <Image src={arrowRightIcon} alt='' unoptimized />
            </a>
            <Downloads />
          </div>
        </div>
      </div>
      <div className={styles.tag}>#app</div>
    </div>
  );
};
