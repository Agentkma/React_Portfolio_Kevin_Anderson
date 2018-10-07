import React from "react";

const Form = () => {
    return (
        <div class="contact-item">
            <div class="alert alert-error error color-bg" id="fname">
                <p class="black">Name must not be empty</p>
            </div>
            <div class="alert alert-error  error color-bg" id="fmail">
                <p class="black">Please provide a valid email</p>
            </div>
            <div class="alert alert-error  error color-bg" id="fmsg">
                <p class="black">Message should not be empty</p>
            </div>
        
            <form name="myform" id="contactForm" action="https://formspree.io/kevin@kevinanderson.codes" enctype="multipart/form-data" method="post">
            <fieldset>
            <legend>Fruit juice size</legend>
            <p>
                <input type="text" placeholder="Your Name" id="name" name="name" size="100" class="border-form white font4light" />
            </p>
            <p>
                <input type="text" placeholder="Valid email ID" name="email" id="email" size="30" class="border-form white font4light" />
            </p>
            <p>
                <textarea placeholder="Your Message" name="message" cols="40" rows="5" id="msg" class="border-form white font4light"></textarea>
                <div class="btn-wrap  text-left">
                    <button class="btn btn-signature btn-signature-karl btn-signature-color" id="submit" name="submit" type="submit">Send Message</button>
                </div>
            </p>
            </fieldset>
        </form>
        {/* <form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small">
      <label for="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium">
      <label for="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large">
      <label for="size_3">Large</label>
    </p>
  </fieldset> 
</form>*/}
        </div>
    );
};

export default Form;
