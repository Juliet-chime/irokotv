import React from 'react';
import './accordion.css'; 

function Accordion() {
    return (
        <div className="accordion-holder">
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header " id="flush-headingOne">
      <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Can I stream unlimited movies
      </button> 
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body accordion-text1">Yes! When you stream on your computer, you can instantly watch movies as often as you want, any time you want even on the go.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Can I watch Instantly on any device
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, simply select your movie or television show and you can watch it instantly as long as your device is connected to the internet. You can stream from up to one (1) device at a time, per account.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        How Can I watch movies on my television set
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can watch on your TV by connecting your computer to your TV with an HDMI cable, or connecting to a Chromecast device (Google Chrome browser) with Cast button or Apple TV (Safari browser) with the AirPlay button on the player</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        How fast does the movie start playing?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Fast – films start playing in seconds. It will depend on the speed of your broadband internet connection. Films are streamed over the internet, so you don’t have to wait for them to download. You can pause, rewind or fast forward as often as you like.
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        How Can I watch movies on my television set
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can watch on your TV by connecting your computer to your TV with an HDMI cable, or connecting to a Chromecast device (Google Chrome browser) with Cast button or Apple TV (Safari browser) with the AirPlay button on the player</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
        How fast does my broadwatch internet connection need to be to start watching?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Watching instantly works with all levels of broadband, however, we recommend a minimum speed of 500 kbps (0.5 MB).</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
        How often do you release new content on IROKO TV?
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We release content every week, there is never a dull moment on IROKOTV there will also be great movies and television shows for you enjoy as often as you want, anywhere and anytime.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
     What browser is best to use to watch IROKO TV?
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We recommend that for IROKOTV you use Google Chrome. We have found it to be the best performing. That does not mean that streaming on IROKOTV will not work on other browsers. If you need to download Google Chrome, please follow this link: https://www.google.com/chrome/browser/desktop/.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
        How do I cancel my IROKO TV subcriptions?
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">If you subscribed with credit card...
      <ol>
        <li>Login to your account on IROKOTV.com.</li>
        <li>Navigate to the “Subscription” tab of your profile.</li>
        <li>Click the “Cancel” button in the “Plan” section.</li>
      </ol>
If you subscribed via iTunes...
<ol>
  <li>Access “Settings” on your iPhone.</li>
  <li>Scroll down and tap “iTunes &amp; AppStore”.</li>
  <li>Tap your Apple ID email, then “View Apple ID” and enter your password.</li>
  <li>Tap “Subscriptions” and select IROKOTV.</li>
  <li>Tap the “Cancel Subscription” option at the bottom of the screen.</li>
</ol>
If you subscribed via bank, payments are non-recurring, so there’s nothing you need to do! Once cancelled, you’ll have access to watch IROKOTV until your next renewal date.
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
        I need help, how do I contact IROKOTV?
      </button>
    </h2>
    <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We are here for you 24hours, 7 days a week. for full contact information, contact us via the LiveChat window at the bottom of the page.</div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Accordion
