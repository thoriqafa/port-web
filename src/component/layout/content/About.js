import React from "react";
import Person from '../../image/person_1.jpg';

const About = () => {
    return(
        <div class="untree_co-section pb-0" id="about-section">
            <div class="container">
                <div class="row justify-content-center mb-3">
                <div class="col-lg-7 mx-auto text-center author-wrap">
                    <img src={Person} alt={Person} class="img-fluid rounded-circle mb-3" />
                    <h3 class="text-black h5 font-weight-bold mb-2 gsap-reveal-hero txt-about">Thoriq Afa</h3>
                    <p class="gsap-reveal-hero txt-about">Application Developer/Software Engineer</p>
                </div>
                </div>

                <div class="row justify-content-center">
                <div class="col-lg-7">


                    <p class="gsap-reveal-hero txt-about">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <p class="gsap-reveal-hero txt-about">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>  
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;