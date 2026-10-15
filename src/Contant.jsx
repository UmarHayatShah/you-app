import React from 'react'

function Contant() {
  return (
    <div className="contact_us_2" contact-expand-lg Contact-dark>
      <div className="responsive-container-block big-container">
        <div class="blueBG">
        </div>
        <div class="responsive-container-block container">
          <form className="form-box card shadow p-4 mx-auto w-100">
            <div class="container-block form-wrapper">
              <p className="fw-bold mb-2">
                Get in Touch
              </p>
              <p className='text-secondry fs-5 mb-0'>
                Nunc erat cursus tellus gravida.
              </p>
              <div class="responsive-container-block">
                <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                  <p class="text -blk input-title">
                    FIRST NAME
                  </p>
                  <input class="input" name="FirstName" placeholder="Please enter first name..." />
                </div>
                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p class="text-blk input-title">
                    LAST NAME
                  </p>
                  <input class="input" name="Last Name" placeholder="Please enter last name..." />
                </div>
                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p class="text-blk input-title">
                    EMAIL
                  </p>
                  <input class="input" name="Email" placeholder="Please enter email..." />
                </div>
                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p class="text-blk input-title">
                    PHONE NUMBER
                  </p>
                  <input class="input" name="PhoneNumber" placeholder="Please enter phone number..." />
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                  <p class="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND
                  </p>
                  <textarea class="textinput" id="i5vyy" placeholder="Please enter query..."></textarea>
                </div>
              </div>
              <button className="submit-btn btn btn-primary w-100" type='Submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contant