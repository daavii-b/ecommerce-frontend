/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from './styled';

export default function Payment() {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.authReducer);

  const mp = new MercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);
  const bricksBuilderI = mp.bricks();

  const paymentUrl = process.env.REACT_APP_BASE_URL.concat('payments/');

  const renderPaymentBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        amount: 1999, // valor total a ser pago
      },
      customization: {
        paymentMethods: {
          creditCard: 'all',
          debitCard: 'all',
          bankTransfer: 'all',
        },
      },
      callbacks: {
        onReady: () => {
          /*
            Callback chamado quando o Brick estiver pronto.
            Aqui você pode ocultar loadings do seu site, por exemplo.
          */
        },
        onSubmit: ({ selectedPaymentMethod, formData }) =>
          // callback chamado ao clicar no botão de submissão dos dados
          new Promise((resolve, reject) => {
            fetch(paymentUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify(formData),
            })
              .then((response) => {
                response.json().then((paymentId) => {
                  navigate('/payments/status', {
                    state: { paymentId },
                  });
                });
                resolve();
              })
              .catch((error) => {
                // lidar com a resposta de erro ao tentar criar o pagamento
                reject();
              });
          }),
        onError: (error) => {
          // callback chamado para todos os casos de erro do Brick
          console.error(error);
        },
      },
    };
    window.paymentBrickController = await bricksBuilder.create(
      'payment',
      'paymentBrick_container',
      settings
    );
  };
  renderPaymentBrick(bricksBuilderI);
  return <Container id="paymentBrick_container" />;
}
