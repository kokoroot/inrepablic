import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import SuccessIcon from '../../../../../assets/success.png';
import styles from './ContactUs.module.css';
import { useState } from 'react';

export const ContactUs = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const { t } = useTranslation('common');
  const [success, setSuccess] = useState(false);

  const handleFormSubmission = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xyyqbgjj', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
      })
      .catch((error) => {
        alert('Помилка при відправці форми. Будь ласка, спробуйте ще раз.');
      });

    return false;
  };

  const handleChange = (e: any) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const isDisabled =
    !dataForm.name || !dataForm.phone || !dataForm.email || !dataForm.message;

  return (
    <div className={styles.contactUs} id='getInTouch'>
      {success ? (
        <div className={styles.blockSuccess}>
          <Image src={SuccessIcon} alt='' unoptimized width={70} />
          <p className={styles.textSuccess}>{t('success_text')}</p>
          <div className={styles.btnClose} onClick={() => setSuccess(false)}>
            {t('close')}
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <h2 className={styles.title}>{t('contact_us')}</h2>
          <form
            onSubmit={(e) => handleFormSubmission(e)}
            style={{ width: '100%' }}
          >
            <div className={styles.inputs} style={{ textAlign: 'center' }}>
              <input
                type='name'
                name='name'
                placeholder={t('your_name')}
                onChange={handleChange}
              />

              <input
                type='phone'
                name='phone'
                placeholder={t('phone_number')}
                onChange={handleChange}
              />

              <input
                type='email'
                name='email'
                placeholder={t('email')}
                onChange={handleChange}
              />
            </div>
            <label className={styles.messageLabel}>
              <textarea
                name='message'
                placeholder={t('message_text')}
                onChange={handleChange}
              />
            </label>

            <button
              type='submit'
              className={styles.submitBtn}
              disabled={isDisabled}
            >
              {t('send')}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
