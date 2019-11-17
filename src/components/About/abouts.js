import React from 'react'
import Title from '../StyledTitle'
import Styles from '../../css/services.module.css'
import Services from '../../constants/services'

const abouts = () => {
  return(
    <section>
     <div className={Styles.center}>
       <article className={Styles.service}>
       <p>Unnati: The Knowledge Hub For Civil Aspirants is a not for profit organisation registered under the government of India. Started by Mr. Lokesh Chugh under the able guidance of Mr. Oscar Fernandez (MP, Rajya Sabha and Chief Patron, Unnati), Unnati is working for the upliftment of youth in different sectors from 18th of December, 2016. Unnati aims at providing free guidance to those UPSC aspirants who have knowledge and talent but lack adequate resources. 
        We are connected with various Members of Parliament, Civil Services officers and professors who guide the students towards a better path.  
        Since theoretical knowledge is not enough for a better learning experience, Unnati organises various events and seminars for the upliftment of young generation. To provide exposure and experience in different fields, Unnati also provides a platform for internship opportunities.</p>
        </article>
      </div>
    </section>
  )
}

export default abouts
