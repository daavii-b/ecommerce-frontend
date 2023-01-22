import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PaymentStatus() {
  // eslint-disable-next-line no-undef
  const mp = new MercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);
  const bricksBuilderI = mp.bricks();

  const location = useLocation();
  const { paymentId } = location.state;

  const renderStausScreenBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        paymentId, // id de pagamento gerado pelo Mercado Pago
      },
      callbacks: {
        onReady: () => {
          // callback chamado quando o Brick estiver pronto
        },
        onError: (error) => {
          console.log(error);
          // callback chamado para todos os casos de erro do Brick
        },
      },
      customization: {
        visual: {
          showExternalReference: true,
        },
      },
    };
    window.statusBrickController = await bricksBuilder.create(
      'statusScreen',
      'statusScreenBrick_container',
      settings
    );
  };
  renderStausScreenBrick(bricksBuilderI);
  return (
    <>
      <div id="statusScreenBrick_container" />
      <div>Back to home page</div>
    </>
  );
}
