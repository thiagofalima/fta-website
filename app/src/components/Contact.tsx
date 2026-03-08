import styled from "styled-components";
import Wrapper from "./Wrapper";
import emailIcon from "../assets/icons/email.svg";
import wppIcon from "../assets/icons/wpp.svg";

const Contacts = styled.div`
  div.contact {
    width: 500px;
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
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
          <img className="email" src={emailIcon} />
          E-mail:{" "}
          <p className="contact email">
            <a href="mailto:contato@rtasolutions.com.br" className="link">
              contato@rtasolutions.com.br
            </a>
          </p>
        </div>
        <div className="contact">
          <img className="wpp" src={wppIcon} />
          <p className="contact wpp">
            WhatsApp:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=1199696400/message=teste"
              className="link"
            >
              (11)996916400
            </a>
          </p>
        </div>
      </Contacts>
    </Wrapper>
  );
};
