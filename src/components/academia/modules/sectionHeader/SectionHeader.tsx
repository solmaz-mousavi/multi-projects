import "./sectionHeader.scss";

function SectionHeader({
  title,
  toptitle,
}: {
  title: string;
  toptitle?: string;
}) {
  return (
    <div className="academia-section-header-container">
      {toptitle && <h4 className="academia-toptitle">{toptitle}</h4>}
      <h2 className="academia-main-title">{title}</h2>
    </div>
  );
}

export default SectionHeader;
