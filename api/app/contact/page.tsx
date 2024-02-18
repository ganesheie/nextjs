import { Metadata } from "next";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <section className="atr-sm-padding-vertical-32 atr-xl-padding-vertical-64 atr-sm-padding-horizontal-32">
      <div className="wrapper atr-flex atr-xl-justify-content-center">
        <article className="atr-xl-8">
          <h1>Contact</h1>
          <div className="text--contact atr-sm-margin-top-32">
            <p>
              If you would like to get in touch with Atradius regarding credit
              insurance or any other services, then please visit our{" "}
              <u>
                <a href="https://group.atradius.com/">Global site</a>
              </u>
              .
            </p>
            <ContactForm />
          </div>
        </article>
      </div>
    </section>
  );
};
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
  robots: "noindex nofollow",
};
export default Contact;
