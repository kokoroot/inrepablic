import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import testIcon from '../../../../../assets/test-1.png';
import soloIcon from '../../../../../assets/solo-logo-2.png';
import soloLogoIcon1 from '../../../../../assets/solo-2.png';
import soloIcon1 from '../../../../../assets/solo-phone-1.png';
import soloIcon2 from '../../../../../assets/solo-phone-2.png';
import soloIconText from '../../../../../assets/solo-text.svg';
import styles from './Solo.module.css';
import { Downloads } from '../downloads';
import { useState } from 'react';

export const Solo = () => {
  const { t } = useTranslation('common');

  const [activeImage, setActiveImage] = useState(true);

  const toggleActive = () => {
    setActiveImage(!activeImage);
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.content}>
        <div className={`${styles.logoBlock} ${styles.logoBlockMob}`}>
          <Image
            src={soloLogoIcon1}
            alt=''
            unoptimized
            height={42}
            style={{
              boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.10)',
              borderRadius: '10px',
            }}
          />
          <Image src={soloIcon} alt='' unoptimized height={40} />
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
            src={soloIcon1}
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
            src={soloIcon2}
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
                src={soloLogoIcon1}
                alt=''
                unoptimized
                height={42}
                style={{
                  boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.10)',
                  borderRadius: '10px',
                }}
              />
              <Image src={soloIcon} alt='' unoptimized height={40} />
            </div>
            <p className={styles.text}>
              <b style={{ fontWeight: 600 }}>Sollo App </b>– {t('solo_text')}
            </p>

            <Downloads />
          </div>
        </div>
      </div>
      <div className={styles.tag}>#app</div>
    </div>
  );
};
