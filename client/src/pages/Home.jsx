import SectionCard from '../components/SectionCard/SectionCard';
import UserCard from '../components/UserCard/UserCard';
import './Home.css'

const Home = () => {
   return ( 
      <>
         <section>
            <div className="section-container">
               <div className = "section-text">
                  <h1 className='ff-wix clr-primary-muted fs-header1'>Famous Inspirational Quotes</h1>
                  <div className="button-container">
                     <button className='bg-clr-neutral-900 clr-primary fs-subtitle1 ff-spline button-component'>Get inspired</button>
                     <button className='bg-clr-primary-muted clr-primary fs-subtitle1 ff-spline button-component'>Share yours</button>
                  </div>
               </div>
               <div className="image-container">
                  <div className="image-one">
                  </div>
                  <div className="image-two">
                     <img src="" alt="" />
                  </div>
                  <div className="image-three"/>
               </div>
            </div>
         </section>
         <section>
            <div className='section-container bg-clr-neutral-900'><h2 className='fs-subtitle1 ff-spline'>Welcome</h2>
            <p className='fs-header2 ff-wix clr-primary'>Take a leap through the wellspring of wisdom curated to enlighten your soul.</p></div>
         </section>
         <section>
            <div className="section-container bg-clr-neutral-300">
               <UserCard text={'This site changed my outlook on life completely!'} name = {'Emily Watson'} imgId={'et_78QkMMQs'}/>
               <UserCard text={'These quotes gave me the motivation I needed.'} name = {'Jame Ballinger'} imgId={'_M6gy9oHgII'}/>
               <UserCard text={'Inspirational, thought-provoking, and impactful!'} name = {'Maria Gonzales'} imgId={'O3ymvT7Wf9U'}/>
            </div>
         </section>
         <section>
            <div className="section-container">
               <SectionCard imgId={""} title={'Upvoted Quotes'} content={'Check out the most beloved quotes as voted by our vibrant community.'} />
               <SectionCard imgId={""} title={'Recent Additions'} content={'Witness the latest pearls of wisdom our dear adventurers have collected.'}/>
               <SectionCard imgId={""} title={'Personal Favorites'} content={'Discover quotes handpicked for their profound impact on our staff.'}/>
               <SectionCard imgId={""} title={'Random Finds'} content={'Dive into the abyss of serendipity with these unforeseen treasures.'}/>
            </div>
         </section>
      </>
   );
}
 
export default Home;