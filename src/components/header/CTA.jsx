import React from 'react'
// import CV from '/assets/MARWAN MOHAMED REFAEI PERSONAL CV.pdf'

const CTA = () => {
  return (
      <div className="cta">
          {/* <a href={process.env.PUBLIC_URL+CV} download className='btn'>Download CV</a> */}
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
  )
}

export default CTA
