import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { certificates } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const CertificateCard = ({ certificate }) => (
  <VerticalTimelineElement
    className=" "
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={certificate.date}
    iconStyle={{ background: certificate.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={certificate.icon}
          alt={certificate.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white texy-[24px] font-bold">{certificate.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {certificate.company_name}
      </p>
    </div>
    <ul className="mt5 list-disc ml-5 space-y-2">
      {certificate.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          point={point}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Certificates = () => {
  return (
    <div className="mt-4">
      <VerticalTimeline>
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
export default Certificates;
