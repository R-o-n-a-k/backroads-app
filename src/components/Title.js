const Title = ({ heading, subheading }) => {
  return (
    <div className="section-title">
      <h2>
        {heading} <span>{subheading}</span>
      </h2>
    </div>
  );
};
export default Title;
