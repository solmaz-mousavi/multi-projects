import { PackageDataType } from "../../../../../../dataTypes/academiaData.type";
import Aos from "../../../../../main/modules/aos/Aos";
import SectionHeader from "../../../../modules/sectionHeader/SectionHeader";
import PackageThumb from "../../../../modules/packageThumb/PackageThumb";
import SeeAll from "../seeAll/SeeAll";

function Package({ data }: { data: PackageDataType[] }) {
  return (
    <section id="packages" className="academia-home-category-container">
      <div className="academia-container">
        <Aos aosStyle="fadeInUp" once={true}>
          <SectionHeader
            toptitle="Pricing and Packages"
            title="Be Professional With Our Road Maps And Special Offers"
          />
        </Aos>
        <div className="academia-home-category-content">
          {data &&
            data.map((item) => (
              <Aos aosStyle="fadeInUp" once={true} key={item.id}>
                <PackageThumb {...item} />
              </Aos>
            ))}
        </div>
				<SeeAll route="package"/>
      </div>
    </section>
  );
}

export default Package;
