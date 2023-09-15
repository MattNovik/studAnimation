import './MainPage.scss';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { ReactComponent as IconStart } from '../../assets/images/svg/star.svg';
import NumberOneImage from '../../assets/images/number-one@2x.png';
import WoomenImage from '../../assets/images/woomen-second@2x.png';

const MainPage = ({ refMain }) => {
  const [loadingState, setLoadingState] = useState(false);

  const formik = useFormik({
    initialValues: {
      theme: '',
      email: '',
      agreeament: true,
    },
    validationSchema: Yup.object().shape({
      theme: Yup.string().required('Заполните это поле'),
      email: Yup.string().email('Введите email').required('Заполните это поле'),
      agreeament: Yup.bool().oneOf([true], 's'),
    }),
    onSubmit: (values, action) => {
      setLoadingState(true);
      let formData = new FormData();
      formData.append('theme', values.theme);
      formData.append('email', values.email);
      axios
        .post('https://back.studuniverse.ru/api/public/user', formData)
        .then((response) => {
          setLoadingState(false);
          console.log(response);
          if (
            typeof response?.data?.data?.authlink !== 'undefined' &&
            response?.data?.data?.authlink?.length > 0
          ) {
            return (window.location.href = response?.data?.data?.authlink);
          } else {
            return (window.location.href = 'https://studservis-lk.ru/');
          }
        })
        .catch((error) => {
          setLoadingState(false);
          alert('Ошибка! Попробуйте ещё раз');
          console.log('error');
        });
    },
  });
  return (
    <section
      className="main__item main-page"
      ref={refMain}
      data-elemes="main"
      key="1"
    >
      <div className="main-page__wrapper">
        <div className="main-page__form-wrapper">
          <h1 className="main-page__title">
            {'Нужна помощь с\n'}
            <span className="main-page__help-title">{'курсовой\n'}</span>
            {'в Санкт-Петербурге?'}
          </h1>
          <form className="main-page__form" onSubmit={formik.handleSubmit}>
            <div className="main-page__inputs-wrapper">
              <input
                type={'text'}
                name="theme"
                className={
                  formik.errors.theme
                    ? 'main-page__input error'
                    : 'main-page__input'
                }
                value={formik.values.theme}
                onChange={formik.handleChange}
                placeholder="ТЕМА"
              />

              <input
                type="text"
                name="email"
                className={
                  formik.errors.email
                    ? 'main-page__input error'
                    : 'main-page__input'
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder={'ВАШ E-MAIL'}
              />
              <button
                type="submit"
                className="main-page__button"
                disabled={loadingState}
              >
                Рассчитать
              </button>
            </div>
            <input
              name="agreeamentMain"
              defaultChecked={formik.values.agreeament}
              onChange={formik.handleChange}
              className={
                formik.errors.agreeament
                  ? 'main-page__input-agreeament visibility-hidden error'
                  : 'main-page__input-agreeament visibility-hidden'
              }
              id={'agreeamentMain'}
              type="checkbox"
            />
            <label htmlFor={'agreeamentMain'}>
              Нажимая кнопку "Рассчитать", вы соглашаетесь с{' '}
              <a href="https://studuniverse.ru/partner_policy.pdf">
                политикой конфиденциальности
              </a>
            </label>
          </form>
        </div>
      </div>
      <div className="main-page__image-wrapper">
        <div className="main-page__star">
          <IconStart />
        </div>
        <img
          src={WoomenImage}
          alt="woomen-image"
          className="main-page__woomen-image"
        />
        <div className="main-page__number-one">
          <img src={NumberOneImage} alt="номер 1 для студентов" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
