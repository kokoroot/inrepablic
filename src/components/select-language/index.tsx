import Image from 'next/image';
import arrowIcon from '../../../assets/arrow.svg';
import styles from './SelectLanguage.module.css';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const language = [
  { id: 'ua', title: 'UA' },
  { id: 'en', title: 'EN' },
  { id: 'ru', title: 'RU' },
];

export const SelectLanguage = ({
  changeLanguage,
  activeLanguage,
  setActiveLanguage,
}: any) => {
  const { i18n } = useTranslation('common');
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const selectLanguageRef = useRef<HTMLDivElement | null>(null);

  const togglePopover = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectLanguageRef.current &&
      !selectLanguageRef.current.contains(event.target as Node) &&
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.selectLanguage}
      onClick={togglePopover}
      ref={selectLanguageRef}
    >
      {activeLanguage} <Image src={arrowIcon} alt='' />
      {open && (
        <div className={styles.popover} ref={popoverRef}>
          {language
            .filter((el) => {
              return el.title !== activeLanguage;
            })
            .map((item, index) => {
              return (
                <>
                  <div
                    key={item.id}
                    className={styles.item}
                    onClick={() => {
                      changeLanguage(item.id);
                      setActiveLanguage(item.title);
                    }}
                  >
                    {item.title}
                  </div>
                  {index < 1 && <hr />}
                </>
              );
            })}
        </div>
      )}
    </div>
  );
};
