import React, {Component} from 'react'
import Layout from '../components/Layout'
import Styledhero from '../components/Styledhero'
import{graphql} from 'gatsby'
import Title from '../components/StyledTitle'
import Styles from '../css/about.module.css'
import Abouts from '../components/About/abouts'
import Homeabout from '../components/Home/About'
import Styles2 from '../css/single-blog.module.css'

const about = ({data}) =>{
 return(
   <Layout>
     <Styledhero img={data.defaultBcg.childImageSharp.fluid} />
     <section className={Styles.about}>
     <Title title="about" subtitle="us" />
     <Abouts />
     </section>

     <Title title="our" subtitle="branches" />
      <section className={Styles2.blog}>
     <div className={Styles2.center}>
     <h1>Uthan Youth Parliament</h1>
      <article className={Styles2.article}>
             <p>Uthan Youth Parliament is an international level youth parliament to
create awareness among the youth about the working of Indian
parliament, to inculcate the habit of public speaking and to stand up
for what is correct. An initiative taken by Unnati, Uthan aims at
creating awareness on the issues of national and international
importance and familiarize students on policy making, political
science and governmental policies. Uthan has successfully organised
its three blockbuster editions with a participation of around 1500
debaters from various schools and universities giving their valuable
inputs for bringing a change in the the society and now looks forward
to the fourth edition in November.</p>
<p>Uthan is a platform where a person can get all that his inquisitive
soul craves for by providing them with a platform to put their views
in the heat of debate. It is an exciting and unique platform for
debaters, round the corner. Its fundamental purpose is to facilitate
thought and opinion exchange in addition to its primary goal of
empowering the youth. Uthan comes with a bundle of surprises for
its debaters such as badges, goodies, cash prizes, etc. Prominent
personalities, like Mrs Shiela Dixit, Mr. Oscar Fernandez (MP, Rajya
Sabha), Mr. Salman Khurshid, Ms. Sharmistha Mukherjee and various
Civil Services officers have been a part of Uthan Youth Parliament as
Chief Guests.</p>
<p>Team Uthan is all set for its next blockbuster, Uthan Edition 4 on 2nd
and 3rd November, 2019. Register here to be a part of Uthan legacy:</p>
  <a href="https://forms.gle/YQWwJ634vHsnGif28">Delegate Application</a> <br></br>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWgsJbAd55hqtvMX6Z
-pF-7lB6DkbZuWMwUeF8gLuUxOJrFA/viewform?usp=sf_link">National Press Application</a>
           </article>
       </div>
     </section>

     <section className={Styles2.blog}>
     <div className={Styles2.center}>
     <h1>Udyat: The Rising Stars</h1>
      <article className={Styles2.article}>
  <p>"Education is the most important weapon which you can use to change the world".
   Udyat has understood this philosophy of Nelson Mandela and has executed it in an outstanding manner.</p>
   <p>Udyat: The Rising Stars is an initiative by Unnati to promote Right to Education in the society. Under this
project, team Udyat has adopted a slum near Rana Partap Bagh, Azadpur, Delhi, where a team of
volunteers guide and teach the young kids to be a better citizen of India.</p>
<p>Our motto is education for all and to fulfill this aim a group of volunteers spend time with young kids
helping them in their elementary education, curriculum, conducting workshops and seminars for the
over all personality development of kids.</p>
<p>The classes of Udyat aims in developing the logical and analytical skills of young generation while in
order to Enhance ethical values, social awareness and physical fitness. We hope that together we can
change the educational status of our society.</p>
 </article>
       </div>
     </section>

     <section className={Styles2.blog}>
     <div className={Styles2.center}>
     <h1>Unnati Times</h1>
      <article className={Styles2.article}>
        <p>Unnati Times is a youth led monthly newspaper started by Unnati with the aim to cultivate a habit of
newspaper reading among our young generation, which is a requisite part for Civil Services preparation.</p>
<p>Unnati Times is a one destination for all the monthly news, brain teasers, confessions, quizzes, jokes,
interviews, food hotspots, fashion trends, spiritual news, sports, travel destinations and much more
targeting the youths of our nation. The newspapers are distributed free of cost among the students of
Delhi NCR with the motive to spread awareness on different topics.</p>
<i>To join Unnati Times or for any collaboration and sponsorships mail us upsc.cell.du@gmail.com</i>
</article>
       </div>
     </section>
  </Layout>
 )
}



export const query = graphql `
query{
  defaultBcg: file(relativePath:{eq: "abbout.jpg"}) {
    childImageSharp {
      fluid(quality:90,maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


export default about
