import styled from "styled-components";
import Wrapper from "./Wrapper";
import emailIcon from "../assets/icons/email.svg";
import wppIcon from "../assets/icons/wpp.svg";

const Contacts = styled.div`
  div.contact {
    width: 500px;
    margin-top: 1em;
  }

  img {
    display: inline-flex;
  }

  img.wpp {
    width: 1em;
  }
  img.email {
    width: 1.15em;
  }

  a {
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #344969;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Contact = () => {
  return (
    <Wrapper>
      <h2>Contato</h2>
      <Contacts>
        <div className="contact">
          <p className="contact email">
            <img className="email" src={emailIcon} />
            Email:
          </p>
          <a
            target="_blank"
            href="mailto:contato@rtasolutions.com.br"
            className="link"
          >
            contato@rtasolutions.com.br
          </a>
        </div>
        <div className="contact">
          <p className="contact wpp">
            <img className="wpp" src={wppIcon} />
            WhatsApp:
          </p>
          <a
            target="_blank"
            href="https://wa.me/5511996916400?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            className="link"
          >
            (11)996916400
          </a>
        </div>
      </Contacts>
    </Wrapper>
  );
};
