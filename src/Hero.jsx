import heroImg from './assets/hero.svg';
export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            alias et, tempore ea rerum quibusdam? Reiciendis nemo ex dolorum
            modi, quidem unde dicta vitae quod, excepturi blanditiis non,
            dolores explicabo.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='hero image' className='img' />
        </div>
      </div>
    </section>
  );
};
