import React from 'react';

import './Experience.css';

class Education extends React.Component {
	render() {
		return (
<div>

    <h2 class="title-lg text-upper padd-box">education</h2>

    <div class="education">

        <div class="education-box">
            <time class="education-date" datetime="2007-10T2012-07">
                <span>Oct <strong class="text-upper">2007</strong> - July <strong>2012</strong></span>
            </time>
            <h3>Technical Physics</h3>
            <span class="education-company">AGH University of Science and Technology, Kraków, Poland</span>

            <p>
                Technical physics major with specialization in computational physics. 
            </p>
                <p><b>MASTER THESIS</b> (in English): “Multiband mixing for valence band holes in semiconductor nanostructures of various dimensionalities” (Matlab)</p>
                <p><b>BACHELOR THESIS</b>: “Visualization of metallic complexes using OpenGL library” (C++, OpenGL)</p>

        </div>

        <div class="education-box">
            <time class="education-date" datetime="2011-08T2012-06">
                <span>Aug <strong class="text-upper">2011</strong> - Jun <strong>2012</strong></span>
            </time>
            <h3>Erasmus student exchange</h3>
            <span class="education-company">Stockholm University, Stockholm, Sweden</span>

            <p>
                Various courses from the domain of mathematical modeling and computational science.
            </p>
        </div>


        <div class="education-box">
            <time class="education-date" datetime="2012-03T2012-04">
                <span>Mar <strong class="text-upper">2012</strong> - Apr <strong>2012</strong></span>
            </time>
            <h3>Internship</h3>

            <span class="education-company">Ikonoskop, Stockholm, Sweden</span>

            <p>
            Development of an Android application that allowed remote control of a professional film camera via USB cable. The purpose of the application was to provide a user friendly interface to be an alternative to the complicated and unintuitive buttons on the camera.
            </p>
        </div>

        <div class="education-box">
            <time class="education-date" datetime="2010-08T2010-09">
                <span>Aug <strong class="text-upper">2010</strong> - Sep <strong>2010</strong></span>
            </time>
            <h3>Internship</h3>

            <span class="education-company">João Monlevade, Minas Gerais, Brazil</span>

            <p>
                Analysis of vibrations from broken and healthy steel sleepers using neural networks (Matlab) in order to find a way to distinguish one from the other.
            </p>
        </div>

    </div>

</div>
		)
	}
}

export default Education