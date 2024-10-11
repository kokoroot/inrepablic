import { Logo } from '@/components/logo';
import { useTranslation } from 'next-i18next';
import styles from './Header.module.css';
import { Navbar } from '@/components/navbar';
import ArrowMenuIcon from '../../../../assets/arrow-menu.svg';
import CloseDrawerIcon from '../../../../assets/close-drawer.svg';
import { SelectLanguage } from '@/components/select-language';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export const Header = () => {
  const { t, i18n } = useTranslation('common');
  const drawerRef: any = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const scrollToTargetBlock = (id: any) => {
    const blockScroll: any = document.getElementById(id);

    blockScroll.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  const handleDocumentClick = (e: any) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <Logo />
        <div className={styles.wrapNavbar}>
          <Navbar scrollToTargetBlock={scrollToTargetBlock} />
          <SelectLanguage
            changeLanguage={changeLanguage}
            activeLanguage={activeLanguage}
            setActiveLanguage={setActiveLanguage}
          />
        </div>
        <div className={styles.burgerMob} onClick={toggleDrawer}>
          menu
          <Image
            src={ArrowMenuIcon}
            alt=''
            unoptimized
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </div>
        <div
          // ref={drawerRef}
          className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
        >
          <div className={styles.subtitle}>{t('site_menu')}</div>
          <div className={styles.menuMob}>
            <div
              className={styles.linkItem}
              onClick={() => {
                scrollToTargetBlock('whoWeAre');
                toggleDrawer();
              }}
            >
              {t('who_we_are')}
            </div>
            <div
              className={styles.linkItem}
              onClick={() => {
                scrollToTargetBlock('portfolio');
                toggleDrawer();
              }}
            >
              {t('portfolio')}
            </div>
            <div
              className={styles.linkItem}
              onClick={() => {
                scrollToTargetBlock('getInTouch');
                toggleDrawer();
              }}
            >
              {t('get_in_touch')}
            </div>
          </div>
          <div className={styles.subtitle}>{t('site_language')}</div>
          <div className={styles.languageMob}>
            <div
              style={{ fontWeight: activeLanguage === 'EN' ? 700 : 400 }}
              onClick={() => {
                setActiveLanguage('EN');
                changeLanguage('en');
                toggleDrawer();
              }}
            >
              {t('english')}
            </div>
            <div
              style={{ fontWeight: activeLanguage === 'UA' ? 700 : 400 }}
              onClick={() => {
                setActiveLanguage('UA');
                changeLanguage('ua');
                toggleDrawer();
              }}
            >
              {t('ukrainian')}
            </div>
            <div
              style={{ fontWeight: activeLanguage === 'RU' ? 700 : 400 }}
              onClick={() => {
                setActiveLanguage('RU');
                changeLanguage('ru');
                toggleDrawer();
              }}
            >
              {t('russian')}
            </div>
          </div>
          <div className={styles.closeDrawer} onClick={toggleDrawer}>
            {t('close')} <Image src={CloseDrawerIcon} alt='' unoptimized />
          </div>

          <div className={styles.inc}>inrepublic inc, 2015 - 2023</div>
        </div>
      </div>
    </div>
  );
};
