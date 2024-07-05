import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';

const Aboutus = () => {
  return (
    <>
      {/* Header Component to Navigate */}
      {/* Main Content */}
      <div className='flex flex-col items-center justify-center mx-10 mt-20 py-20'>
        <div style={{maxWidth:'1500px'}}>
          {/* Main Heading */}
          <h1 className="font-bold text-3xl md:text-4xl mb-8 text-center">
            Thanks for using Resume Builder.
          </h1>
          {/* About Us paragraph */}
          <p className="text-xl text-center mb-8">
            Resume Builder helps create resumes with a proper layout. Its easy layout assists users in crafting resumes in a formally structured way.
            <br /><br />
            Users can select from various templates tailored to different industries and job roles, ensuring their resume stands out. The intuitive 
            interface simplifies the process, allowing users to focus on showcasing their skills and experience. With built-in tips and suggestions,
            Resume Builder guides users in creating a professional, polished resume that impresses potential employers.
            Resume Builder simplifies the daunting task of resume creation by offering an array of customizable templates catering to diverse industries
            and job roles. Its user-friendly interface empowers individuals to highlight their skills and experiences effectively. Additionally, the platform
            provides valuable tips and suggestions, ensuring that each resume is polished and professional. Whether you are a seasoned professional or a recent graduate,
            Resume Builder streamlines the process, enabling you to craft a standout resume that catches the attention of employers.
          </p>
        </div>

        {/* Share buttons */}
        <h2 className='font-bold text-xl mb-4 text-center'>
          Share with Your Friends
        </h2>
        <div className='flex justify-center'>
          <div className="mx-2">
            {/* Facebook share button */}
            <FacebookShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              quote={'Check out this amazing Resume Builder!'}
              hashtag={'#resume #jobsearch'}
            >
              <FacebookIcon size={40} round />
            </FacebookShareButton>
          </div>

          <div className="mx-2">
            {/* LinkedIn share button */}
            <LinkedinShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              title={'Resume Builder'}
              summary={'Check out this amazing Resume Builder!'}
              source={'Resume Builder'}
            >
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
          </div>

          <div className="mx-2">
            {/* WhatsApp share button */}
            <WhatsappShareButton
              url={'https://cv-builder-ruddy.vercel.app/'}
              title={'Resume Builder'}
              separator=" - "
            >
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
