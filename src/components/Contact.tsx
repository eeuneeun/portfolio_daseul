import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={6}></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="primary" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <MarkEmailUnreadIcon />
              <h3>Email</h3>
              <a href="#">daseul@naver.com</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <PhoneAndroidIcon />
              <h3>Phone</h3>
              <span>010-0000-0000</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <OtherHousesIcon />
              <h3>Address</h3>
              <span>서울시 동작구 nn길 n층</span>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
