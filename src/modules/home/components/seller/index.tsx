import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import sellerIcon from '../../../../../assets/seller-logo.png';
import macIcon from '../../../../../assets/mac-icon.png';
import arrowRightIcon from '../../../../../assets/arrow-right-blue.svg';
import styles from './Seller.module.css';

export const Seller = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.portfolio} id='website'>
      <div className={styles.content}>
        <div className={`${styles.logoBlock} ${styles.logoBlockMob}`}>
          <Image src={sellerIcon} alt='' unoptimized />
        </div>
        <div style={{ maxWidth: '366px' }}>
          <Image
            className={styles.mobImage}
            unoptimized
            src={macIcon}
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
              <Image src={sellerIcon} alt='' unoptimized />
            </div>
            <p className={styles.text}>
              <b style={{ fontWeight: 600 }}>SellerFinance</b> -{' '}
              {t('seller_text')}
            </p>
            <a
              href='https://www.sellerfinance.io/'
              className={styles.linkMore}
              target='_blank'
            >
              {t('go_to')}
              <Image src={arrowRightIcon} alt='' unoptimized />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.tag}>#webplatform</div>
    </div>
  );
};
