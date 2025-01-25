import React from "react";

import Slide from "@/components/Slide";

const ContactsPage = () => {
  return (
    <div>
      <Slide></Slide>

      <Slide isRedSlide>
        <div>
          <div>Contacts</div>

          <div>
            <div>Office</div>
            <div>
              1301-0165, floor 13, The One Tower, Sheik Zayed Road, Barsha
              Heights, TECOM, Dubai, UAE
            </div>
          </div>
          <div>
            <div>Email</div>
            <div>faldina@idooh.ae</div>
          </div>
          <div>
            <div>Phone</div>
            <div>+ 971 581 733 443</div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ContactsPage;
