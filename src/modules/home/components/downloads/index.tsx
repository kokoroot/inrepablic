import Image from 'next/image';
import appStoreIcon from '../../../../../assets/app-store.svg';
import googleIcon from '../../../../../assets/google-icon.svg';
import closeIcon from '../../../../../assets/close.svg';
import styles from './Downloads.module.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

export const Downloads = () => {
  const [openAppStoreDownLoad, setOpenAppStoreDownLoad] = useState(false);
  const [openGoogleDownLoad, setOpenGoogleDownLoad] = useState(false);

  return (
    <div className={styles.downloadBlock}>
      <div style={{ position: 'relative' }}>
        <Image
          style={{ cursor: 'pointer' }}
          src={appStoreIcon}
          alt=''
          unoptimized
          onClick={() => {
            setOpenAppStoreDownLoad(true);
            setOpenGoogleDownLoad(false);
          }}
        />
        {openAppStoreDownLoad && (
          <div className={styles.qrBlock}>
            <QRCode value='hey' size={85} />
            <Image
              className={styles.closeBtn}
              src={closeIcon}
              alt=''
              unoptimized
              onClick={() => setOpenAppStoreDownLoad(false)}
            />
          </div>
        )}
      </div>
      <div style={{ position: 'relative' }}>
        <Image
          style={{ cursor: 'pointer' }}
          src={googleIcon}
          alt=''
          unoptimized
          onClick={() => {
            setOpenGoogleDownLoad(true);
            setOpenAppStoreDownLoad(false);
          }}
        />
        {openGoogleDownLoad && (
          <div className={styles.qrBlock}>
            <QRCode value='hey' size={85} />
            <Image
              className={styles.closeBtn}
              src={closeIcon}
              alt=''
              unoptimized
              onClick={() => setOpenGoogleDownLoad(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
