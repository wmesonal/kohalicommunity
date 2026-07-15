import { Link } from "@tanstack/react-router";
import { User } from "lucide-react";
import type { Member } from "@/lib/members-data";
import { FaInstagram, FaFacebookF, FaXTwitter, FaPinterestP, FaArrowRight, FaPlus } from 'react-icons/fa6';

export function MemberCard({ member }: { member: Member }) {
  const hasPhoto = Boolean(member.photo);
  return (
    <Link
      to="/committee/$memberId"
      params={{ memberId: member.id }}
      className="group w-[246px] lg:m-0 m-auto"
    >
      <div className="relative block group" key={member.id}>
      {/* Image Box */}
      <div className="relative block rounded-[10px] overflow-hidden">
        <div className="relative block rounded-[10px] overflow-hidden h-[320px]">
          {/* Image with overlay */}
          <div className="relative block rounded-[10px] overflow-hidden aspect-square">
            <img
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] rounded-[10px] transition-transform duration-1000 ease-in-out group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#d89626] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50 z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Top triangle and arrow wrapper */}
          <div className="relative">
            {/* Arrow */}
            <div className="absolute -top-[56px] sm:-top-[56px] left-1/2 -translate-x-1/2 z-30">
              <span
                className="relative flex items-center justify-center w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] rounded-full text-lg sm:text-lg border-[6px] sm:border-[6px] border-[var(--service-icon-from)] group-hover:bg-[#d4941d] transition-colors duration-300 before:content-[''] before:absolute before:-top-2 before:-left-2 sm:before:-top-2 sm:before:-left-2 before:w-16 before:h-8 sm:before:w-16 sm:before:h-8 before:bg-[#d2ac57] before:rounded-t-[30px] before:z-[-1]"
              >
                <FaArrowRight />
              </span>
            </div>

            {/* Content box */}
            <div className="relative bg-[var(--service-icon-from)] text-center pt-[15px] pb-[15px] sm:pb-[15px] px-[15px] sm:px-[15px] rounded-[10px] border-t-2 border-[#d2ac57] z-20">
              {/* Top triangle decorations */}
              <div className="absolute -top-[30px] left-[30px] right-[30px] h-[30px] bg-[#d2ac57] clip-polygon-triangle -z-10" />
              <div className="absolute -top-[28px] left-[30px] right-[30px] h-[30px] bg-[var(--service-icon-from)] clip-polygon-triangle -z-10" />

              {/* Title */}
              <h3 className="text-[15px] sm:text-[17px] font-semibold leading-[24px] sm:leading-[32px] capitalize text-white">
                <span className="group-hover:text-[#d2ac57] transition-colors duration-300">
                  {member.name}
                </span>
              </h3>

              {/* Subtitle */}
              <p className="text-white/70 mt-[3px] text-[13px] sm:text-base">{member.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     </Link>
  );
}