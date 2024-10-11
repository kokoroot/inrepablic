import Image from 'next/image';
import arrowIcon from '../../../../../assets/arrow-right.svg';
import styles from './WhoWeAre.module.css';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const WhoWeAre = () => {
  const { t } = useTranslation('common');

  const scrollToTargetBlock = (id: any) => {
    const blockScroll: any = document.getElementById(id);

    blockScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className={styles.whoWeAre} id='whoWeAre'>
      <a
        className={styles.item}
        onClick={() => scrollToTargetBlock('portfolio')}
      >
        <div>
          <h2 className={styles.titleItem}>{t('app_developing')}</h2>
          <p className={styles.textItem}>{t('app_developing_text')}</p>
        </div>
        <Image
          className={styles.mobArrow}
          src={arrowIcon}
          alt=''
          style={{ position: 'relative', zIndex: 2 }}
        />
      </a>
      <a
        className={`${styles.item} ${styles.item2}`}
        onClick={() => scrollToTargetBlock('webplatform')}
      >
        <div>
          <h2 className={styles.titleItem}>{t('web_platform')}</h2>
          <p className={styles.textItem}>{t('web_platform_text')}</p>
        </div>
        <Image
          className={styles.mobArrow}
          src={arrowIcon}
          alt=''
          style={{ position: 'relative', zIndex: 2 }}
        />
      </a>
      <a className={styles.item} onClick={() => scrollToTargetBlock('website')}>
        <div>
          <h2
            className={styles.titleItem}
            dangerouslySetInnerHTML={{ __html: t('web_sites') }}
          ></h2>
          <p className={styles.textItem}>{t('web_sites_text')}</p>
        </div>
        <Image
          className={styles.mobArrow}
          src={arrowIcon}
          alt=''
          style={{ position: 'relative', zIndex: 2 }}
        />
      </a>
      <a
        className={`${styles.item} ${styles.item2}`}
        onClick={() => scrollToTargetBlock('hardwere')}
      >
        <div>
          <h2 className={styles.titleItem}>{t('hardware_systems')}</h2>
          <p className={styles.textItem}>{t('hardware_systems_text')}</p>
        </div>
        <Image
          className={styles.mobArrow}
          src={arrowIcon}
          alt=''
          style={{ position: 'relative', zIndex: 2 }}
        />
      </a>
    </div>
  );
};
