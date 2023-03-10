import React from "react";
import skrill from "../assets/payment/skrill.png";
import paypal from "../assets/payment/paypal.jpg";
import card from "../assets/payment/card.jpg";
import safecard from "../assets/payment/safecard.jpg";
import sofort from "../assets/payment/sofort.jpg";
import blue from "../assets/payment/blue.jpg";

import { useSelector } from "react-redux";

const SecurePayment = () => {
  const { language } = useSelector((state) => state.language);

  return language === "anglais" ? (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Secure payment</h1>
      <p className="secure-payment-intro">
        Our mission is to provide you with a pleasant shopping experience. Thus,
        we work with the best online payment systems. to ensure that any payment
        made on ibendouma is 100% secured. These trusted partners, whose
        reputation is second to none do, are listed below:
      </p>
      <div className="methode-of-payment">
        <span>Pay With Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, one of the world's leading digital payment companies with over
          36 million account holders, enables payments as well as internet
          transfers since 2001. Its services are used in over 200 countries and
          40 low-cost currencies, and always securely. Skrill protects your
          information personal finances and makes your online payments simple,
          fast and safe.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay with PayPal </span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal is the undisputed leader in online payments, with over 100
          million accounts in 190 countries around the world. PayPal has earned
          the trust of its buyers and sellers by offering a very high security,
          and is used by trading platforms reputable like eBay..
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay by credit card </span>
        <img src={card} alt="card" />
        <p>
          Payment by bank transfer is completely secure. The information
          provided such as the RIB, the name is strictly confidential.
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay by Paysafecard</span>
        <img src={safecard} alt="safecard" />
        <p>
          ABuy Paysafecard at over 480,000 points of sale anywhere in the world,
          and use them quickly, simply and safely to pay in thousands of online
          shops, including including ibendouma of course! As the name suggests,
          Paysafecard is safe because you do not provide any personal
          information regarding yourself or your credit card. Your privacy
          therefore remains completely protected at all times with Paysafecard!
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay with Sofort </span>
        <img src={sofort} alt="sofort" />
        <p>
          With Sofort Banking, online shopping payments are convenient and sure.
          You can use your own login information online banking, which are
          highly secure thanks to a process multi-level authentication and a
          confirmation code that has limited validity.
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Pay By Blue card</span>
        <img src={blue} alt="blue" />
        <p>
          Blue card is a major debit card payment system in France. It works
          like a credit card, but the holder of the card does not have to pay
          any fees. When using a Card Blue at a French merchant, the
          transactions are verified and authenticated, therefore secure.
        </p>
      </div>
    </div>
  ) : language === "espagnol" ? (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Pago seguro</h1>
      <p className="secure-payment-intro">
        Nuestra misi??n es brindarle una experiencia de compra placentera. De
        este modo, trabajamos con los mejores sistemas de pago online. para
        asegurarse de que cualquier pago hecho en ibendouma es 100% seguro.
        Estos socios de confianza, cuyos reputaci??n es insuperable, se enumeran
        a continuaci??n:
      </p>
      <div className="methode-of-payment">
        <span>Pagar con Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, una de las principales empresas de pagos digitales del mundo
          con m??s de 36 millones de titulares de cuentas, permite pagos e
          Internet transferencias desde 2001. Sus servicios se utilizan en m??s
          de 200 pa??ses y 40 monedas de bajo coste, y siempre de forma segura.
          Skrill protege su informaci??n de finanzas personales y simplifica sus
          pagos en l??nea, r??pido y seguro.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con PayPal</span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal es el l??der indiscutible en pagos en l??nea, con m??s de 100
          millones de cuentas en 190 pa??ses de todo el mundo. PayPal ha ganado
          la confianza de sus compradores y vendedores ofreciendo una alt??sima
          seguridad, y es utilizado por plataformas comerciales acreditadas como
          eBay...
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con tarjeta de cr??dito </span>
        <img src={card} alt="card" />
        <p>
          El pago por transferencia bancaria es totalmente seguro. La
          informaci??n proporcionada como el RIB, el nombre es estrictamente
          confidencial.
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con Paysafecard</span>
        <img src={safecard} alt="safecard" />
        <p>
          A Compra Paysafecard en m??s de 480.000 puntos de venta en todo el
          mundo, y util??zalos de forma r??pida, sencilla y segura para pagar en
          miles de online tiendas, incluyendo ibendouma por supuesto! Como el
          nombre sugiere, Paysafecard es seguro porque no proporciona ninguna
          informaci??n personal informaci??n sobre usted o su tarjeta de cr??dito.
          Tu privacidad ??Por lo tanto, permanece completamente protegido en todo
          momento con Paysafecard!
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pagar con Sofort </span>
        <img src={sofort} alt="sofort" />
        <p>
          Con Sofort Banking, los pagos de compras en l??nea son c??modos y
          seguros. Puede usar su propia informaci??n de inicio de sesi??n en la
          banca en l??nea, que son altamente seguro gracias a un proceso de
          autenticaci??n multinivel y un c??digo de confirmaci??n que tiene validez
          limitada.
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Pagar con tarjeta azul</span>
        <img src={blue} alt="blue" />
        <p>
          La tarjeta azul es un importante sistema de pago con tarjeta de d??bito
          en Francia. Funciona como una tarjeta de cr??dito, pero el titular de
          la tarjeta no tiene que pagar cualquier cargo. Al usar una tarjeta
          azul en un comerciante franc??s, el las transacciones se verifican y
          autentican, por lo tanto, son seguras.
        </p>
      </div>
    </div>
  ) : (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Paiement S??curis??</h1>
      <p className="secure-payment-intro">
        Notre mission est de vous fournir une exp??rience d???achats agr??able .
        Ainsi, nous travaillons avec les meilleurs syst??mes de paiement en ligne
        pour nous assurer que tout paiement effectu?? sur ibendouma est 100%
        s??curis??. Ces partenaires de confiance, dont la r??putation n'est plus ??
        faire, sont ??num??r??s ci-dessous:
      </p>
      <div className="methode-of-payment">
        <span>Payer Avec Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, une des principales soci??t??s de paiements num??riques au monde
          avec plus de 36 millions de titulaires de compte, permet des paiements
          ainsi que des transferts par Internet depuis 2001. Ses services sont
          utilis??s dans plus de 200 pays et 40 devises ?? faibles co??ts, et
          toujours de mani??re s??curis??e. Skrill prot??ge vos informations
          financi??res personnelles et rend vos paiements en ligne simples,
          rapides et s??rs.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payez avec PayPal </span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal est le leader incontest?? des paiements en ligne, avec plus de
          100 millions de comptes dans 190 pays ?? travers le monde. Paypal a
          gagn?? la confiance de ses acheteurs et vendeurs en offrant une tr??s
          grande s??curit??, et est utilis?? par des plates-formes de transactions
          r??put??es comme eBay.
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer par carte de cr??dit </span>
        <img src={card} alt="card" />
        <p>
          Le paiement par virement bancaire est enti??rement s??curis??. Les
          informations fournis tel que le RIB, le nom sont strictement
          confidentiels.
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer par Paysafecard</span>
        <img src={safecard} alt="safecard" />
        <p>
          Achetez des cartes Paysafecard dans plus de 480.000 points de vente
          partout dans le monde, et utilisez-les rapidement, simplement et en
          toute s??curit?? pour payer dans des milliers de boutiques en ligne, y
          compris ibendouma bien s??r! Comme son nom l???indique, Paysafecard est
          s??r parce que vous ne donnez aucune information personnelle concernant
          vous-m??me ou votre carte de cr??dit. Votre vie priv??e reste donc
          compl??tement prot??g??e en tout temps avec Paysafecard!
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer avec Sofort </span>
        <img src={sofort} alt="sofort" />
        <p>
          Avec Sofort Banking, les paiements d'achats en ligne sont pratiques et
          s??rs. Vous pouvez utiliser vos propres informations de connexion
          bancaire en ligne, qui sont hautement s??curis??es gr??ce ?? un processus
          d'authentification ?? multi-niveaux et un code de confirmation qui a
          une validit?? limit??e.
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Payer Par Carte Bleue </span>
        <img src={blue} alt="blue" />
        <p>
          Carte Bleue est un syst??me de paiement par carte de d??bit majeur en
          France. Il fonctionne comme une carte de cr??dit, mais le titulaire de
          la carte n'a pas ?? payer de frais. Lorsque vous utilisez une Carte
          Bleue chez un commer??ant fran??ais, les transactions sont v??rifi??es et
          authentifi??es, donc s??curis??es.
        </p>
      </div>
    </div>
  );
};

export default SecurePayment;
