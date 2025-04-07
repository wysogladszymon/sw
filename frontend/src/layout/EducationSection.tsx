
export const EducationSection = () => {
  return (
    <section className="education flex flex-col items-center justify-center">
      <h2>Education and Job</h2>
      <p className='text-center'> For more details visit my Linkedin profile (for now).</p>
      <a
        href="https://www.linkedin.com/in/szymon-wysogl%C4%85d-62a6972aa/"
        target="blank"
      >
        <div className="border rounded-full w-[40px] h-[40px] flex items-center justify-center">
          <i className="fab fa-linkedin-in"></i>
        </div>
        {/* <span>LinkedIn</span> */}
      </a>
    </section>
  );
};