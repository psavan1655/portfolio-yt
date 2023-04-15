import { ProfileData } from "@/modules/common/constants/profile-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex w-10/12 h-[80vh] items-center">
      <div className="w-4/6 animate-fade">
        <div className="text-7xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          {ProfileData.name}
        </div>
        <div className="mt-16 text-2xl w-5/6">{ProfileData.bio}</div>
        <div className="flex mt-12">
          <Link
            href={ProfileData.socials.linkedin}
            className="mr-4"
            target="_blank"
          >
            <Image
              src={"/assets/linkedin.svg"}
              height={24}
              width={24}
              alt="linkedin"
            />
          </Link>
          <Link
            href={ProfileData.socials.github}
            className="mr-4"
            target="_blank"
          >
            <Image
              src={"/assets/github.svg"}
              height={24}
              width={24}
              alt="github"
            />
          </Link>
          <Link
            href={ProfileData.socials.twitter}
            className="mr-4"
            target="_blank"
          >
            <Image
              src={"/assets/twitter.svg"}
              height={24}
              width={24}
              alt="twitter"
            />
          </Link>
          <Link
            href={ProfileData.socials.instagram}
            className="mr-4"
            target="_blank"
          >
            <Image
              src={"/assets/instagram.svg"}
              height={24}
              width={24}
              alt="instagram"
            />
          </Link>
        </div>
      </div>
      <div className="w-2/6 animate-fade">
        <Image
          src={"/assets/profile.JPG"}
          height={800}
          width={800}
          alt="instagram"
        />
      </div>
    </div>
  );
};

export default HeroSection;
