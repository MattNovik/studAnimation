import './OrderPage.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import GirlImage from '../../assets/images/girl@2x.png';

const OrderPage = ({ refOrder }) => {
  const [loadingState, setLoadingState] = useState(false);

  const formik = useFormik({
    initialValues: {
      theme: 'не определена',
      email: '',
      agreeament: true,
    },
    validationSchema: Yup.object().shape({
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
      className="main__item order-page"
      ref={refOrder}
      data-elemes="order"
      key="4"
    >
      <div className="order-page__wrapper">
        <div className="order-page__form-wrapper">
          <h3 className="order-page__title">
            Дарим скидку
            <span className="order-page__title-big">до 15%</span>
          </h3>
          <p className="order-page__help-title">
            на первый заказ при регистрации:
          </p>
          <form className="order-page__form" onSubmit={formik.handleSubmit}>
            <div className="order-page__inputs-wrapper">
              <input
                type={'hidden'}
                name="theme"
                className={
                  formik.errors.theme
                    ? 'order-page__input error'
                    : 'order-page__input'
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
                    ? 'order-page__input error'
                    : 'order-page__input'
                }
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder={'ВАШ E-MAIL'}
              />
              <button
                type="submit"
                className="order-page__button"
                disabled={loadingState}
              >
                Рассчитать
              </button>
            </div>
            <input
              name="agreeament"
              defaultChecked={formik.values.agreeament}
              onChange={formik.handleChange}
              className={
                formik.errors.agreeament
                  ? 'order-page__input-agreeament visibility-hidden error'
                  : 'order-page__input-agreeament visibility-hidden'
              }
              id={'agreeament'}
              type="checkbox"
            />
            <label htmlFor={'agreeament'}>
              Нажимая кнопку "Рассчитать", вы соглашаетесь с{' '}
              <a href="https://studuniverse.ru/partner_policy.pdf">
                политикой конфиденциальности
              </a>
            </label>
          </form>
        </div>
        <div className="order-page__image-wrapper">
          <img className="order-page__image" src={GirlImage} alt="order-girl" />
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
