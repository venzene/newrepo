import React from 'react'

function About(props) {

  //   const [myStyle,setMyStyle] = useState({
  //       color:'black',
  //       backgroundColor:'white',
  //  });

  //  const cngStyle=()=>{
  //   if(myStyle.color==='black'){
  //       setMyStyle({
  //           color:'white',
  //           backgroundColor:'black', 
  //       })
  //       setTextBtn('Enable Light Mode')
  //   }
  //   else{
  //       setMyStyle({
  //           color:'black',
  //           backgroundColor:'white', 
  //       }) 
  //       setTextBtn('Enable Dark Mode')
  //   }
  //  }

  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#042743':'white'
  }

  return (
    <div className='container pb-2' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <b>Analyses Text</b>
      </button>
    </h2>
    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtil.com provides a range of powerful text analysis tools to meet your diverse needs. From sentiment analysis and keyword extraction to readability scoring and grammar checking, our platform empowers you to gain valuable insights into your text. Understand the tone, extract key information, and improve the overall quality of your writing with our easy-to-use analysis features.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <b>Free to Use</b>
      </button>
    </h2>
    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      At TextUtil.com, we believe in making advanced text analysis accessible to everyone. That's why our platform is completely free to use. No hidden fees, no subscription charges – simply visit our website, input your text, and take advantage of our robust analysis tools at no cost. We are committed to democratizing text analysis for users worldwide.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b>Browser Compatible</b>
      </button>
    </h2>
    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtil.com is designed to work seamlessly across various browsers, ensuring a hassle-free experience for users. Whether you prefer Chrome, Firefox, Safari, or any other popular browser, our website is optimized to deliver consistent performance. Enjoy the convenience of analyzing text without the need for additional downloads or installations.
     </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
