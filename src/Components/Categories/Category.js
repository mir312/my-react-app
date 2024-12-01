
import './Category.css'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'
import img5 from '../../img/img5.jpg'

  function Category () {
    return(
        <><section className='Main'>

         <div className='container'>

         <h1 className='sec_main'>Популярные категории</h1>

         <div className='cards flex'>

        <div className='card'>
            <a  className='link'  href='#' >  
            
            <img src={img1} alt='' className='image'/>           
             <p className='txt'></p>

             </a>
        </div>

        <div className='card'>
            <a  className='link'  href='#' >  
            
            <img src={img2} alt='' className='image'/>           
             <p className='txt'></p>

             </a>
        </div>

        <div className='card'>
            <a  className='link'  href='#' >  
            
            <img src={img3} alt='' className='image'/>           
             <p className='txt'></p>

             </a>
        </div>

        <div className='card'>
            <a  className='link'  href='#' >  
            
            <img src={img4} alt='' className='image'/>           
             <p className='txt'></p>

             </a>
        </div>

        <div className='card'>
            <a  className='link'  href='#' >  
            
            <img src={img5} alt='' className='image'/>           
             <p className='txt'></p>

             </a>
        </div>

         </div>

         </div>

        </section>
        </>
    )
}

export default Category